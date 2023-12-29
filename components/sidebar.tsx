"use client"

import { cn } from "@/lib/utils"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, SettingsIcon, VideoIcon } from "lucide-react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
})

const routes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500",
    },
    {
        name: "Conversation",
        path: "/conversation",
        icon: MessageSquare,
        color: "text-violet-500",
    },
    {
        name: "Image generation",
        path: "/image",
        icon: ImageIcon,
        color: "text-pink-500",
    },
    {
        name: "Video generation",
        path: "/video",
        icon: VideoIcon,
        color: "text-emerald-500",
    },
    {
        name: "Music generation",
        path: "/music",
        icon: Music,
        color: "text-yellow-500",
    },
    {
        name: "Code generation",
        path: "/code",
        icon: Code,
        color: "text-red-500",
    },
    {
        name: "Settings",
        path: "/settings",
        icon: SettingsIcon,
        color: "text-white-500",
    },
] as const
const Sidebar = () => {

    const pathname = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image className="rounded-full " fill alt="Logo" src="data:image/jpeg;base64,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/opIvlVQR1VNLTzt3opmFj2+LSMiEGIUXr4ssNVhm/1lprGu3oHkMeRkJGfZcORH8F5CAtFf0cIXMwjcJXDJsleQ3nkxn8VniKKSaVkULHPke4NaxozLieAAWvNnWHnYXwfb7XLl1hrDJPl/9HHeI9M8vRBJEREBERAREQEREBERBEca7O7Di9jpKyDq9dlk2spwA/73c4efoQs/Y22aX/CTnzTQ9ct44VlO0loHvji3105rV64c0OaWuALSMiD3oMOotJY42M2e99JV2EttdeczuNH1Eh5t+z5t05FUNibC95wvWdWvVFJASexJxjkHi1w0P5+KDxkREBERAREQbjREQRfHOBrRjSjbFcWOiqYv7Griy32cubeR9MlnvEWze4WbGVBhoVtLPLcA008+TmtyJI7YyOXsnhmtWKntoP8Afdg//Sj/AHj0HvbPtlFrwlOy4VUv0hdGjsSuZusi+BuuvM+mSsNEQEREBERAREQEREBERAREQF1blbqK60b6O5UsNVTP9qKZgc088j3812kQUZjfYa5u/WYPl3hqTQVD9fJjz+TvmqYuFBV2yrkpLhTS01RGcnxStLXD0K20vFxNhay4opOr3qhjnDfYk4SR/C4aj8kGNkVyXrYJcm1//g7pSyUbv85vMkZyO60h3np5KWYJ2L2qx1Edde5xdKth3mR7m7Cw+R9o+enJBT1q2Z4uu1vgr6K0udTzt3o3PkYwkeORIOXh4hFrTgiAiL8yP6ONz91zt0Z7rRmT5IP0qe2g/wB92D/9KP8AePU2rsa9TkLP6sYlny+1DQbzfnvKtMVXS43XaNYsQ0+FcRNpLe1rZWPoDvuye49kA5cHDvQXsih1Pj3p3tb/AFTxSzP7TrdoPPtKUUFX12nE3V6inz+xUM3HD0QdlERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z" />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>LazyBrain</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link key={route.name} href={route.path} className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.path ? "bg-white/10 text-white" : "text-zinc-400")}>
                            <div className={"flex items-center flex-1"}>
                                <route.icon className={cn("w-6 h-6", route.color)} />
                                <span className="ml-3">{route.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar