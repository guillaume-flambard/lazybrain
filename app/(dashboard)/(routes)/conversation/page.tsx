"use client"

import Heading from "@/components/heading"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { formSchema } from "./constants"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ReactNode, useState } from "react"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import axios from "axios"

const ConversationPage = () => {

  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: data.prompt
      }

      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/conversation", {
        messages: newMessages
      })

      console.log(response.data);
      

      setMessages((current) => [...current, userMessage, response.data])
    } catch (error: any) {
     console.log(error);
    } finally {
      router.refresh()
    }
  }

  return (
    <>
      <Heading title="Conversation" description="Be lazy and leave the boring stuff to LazyBrain, and it will do the rest" icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10" />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="
          rounded-lg
          border
          w-full
          p-4
          px-3
          md:px-6
          focus-within:shadow-sm
          grid
          grid-cols-12
          gap-2
          ">
            <FormField name="prompt" render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent" disabled={isLoading} placeholder="Write a poem" {...field} />
                </FormControl>
              </FormItem>
            )} />
            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
              Generate
            </Button>
          </form>
        </Form>
        <div className="space-y-4 mt-4">
          <div className="flex flex-col-reverse gap-y-4"></div>
          {messages.map((message, index) => (
            <div key={index}>{message.content as ReactNode}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ConversationPage