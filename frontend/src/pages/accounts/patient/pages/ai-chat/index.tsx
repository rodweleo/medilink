import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiSend } from "react-icons/fi";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { AIChatFormSchema } from "@/schemas/ai-chat-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { API_URL } from "@/utils/API_URL";
import { useState } from "react";

export const AIChat = () => {
  const { setValue } = useForm();
  const [replies, setReplies] = useState<string[]>([]);
  const form = useForm<z.infer<typeof AIChatFormSchema>>({
    resolver: zodResolver(AIChatFormSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AIChatFormSchema>) {
    try {
      setValue(values.query, "");
      const response = await axios.post(`${API_URL}/ai-chat`, {
        query: values.query,
      });
      setReplies([...replies, response.data.reply]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="flex flex-col justify w-full h-full">
      <section className="h-full">
        {replies.map((reply) => {
          return reply;
        })}
      </section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-3 justify-between w-full">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="w-full">
                  <div className="flex w-full items-center gap-1">
                    <Input
                      type="text"
                      placeholder="What's on your mind today?"
                      {...field}
                      className="w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-white p-0 text-3xl text-black hover:bg-white">
            <FiSend />
          </Button>
        </form>
      </Form>
    </main>
  );
};
