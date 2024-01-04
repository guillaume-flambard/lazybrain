import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET(request: Request) {
    try {
        const { userId } = auth();
        const user = await currentUser();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const userSubscription = await prismadb.userSubscription.findFirst({
            where: {
                userId
            }
        })

        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.checkout.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl,
            })

            return new NextResponse(JSON.stringify(stripeSession.url), { status: 200 });
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user?.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'LazyBrain Pro',
                            description: "Unlimited access to all features",
                        },
                        unit_amount: 2000,
                        recurring: {
                            interval: 'month',
                        }
                    },
                    quantity: 1,
                }
            ],
            metadata: {
                userId
            }
        })

        return new NextResponse(JSON.stringify(stripeSession.url), { status: 200 });

    } catch (error) {
        console.log("[STRIPE_ERROR]", error);

        return new NextResponse("Internal Error", { status: 500 });
    }
}