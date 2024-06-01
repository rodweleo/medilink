import { Card, CardContent } from "@/components/ui/card";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/utils/API_URL";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { z } from "zod";

const formSchema = z.object({
  prompt: z.string().min(2),
});

type ChatProps = {
  prompt: string;
  response: string | number | string[];
};

export const ChatWithMeliForm = () => {
  const [chatsWithMeli, setChatsWithMeli] = useState<ChatProps[]>(
    JSON.parse(localStorage.getItem("chatsWithMeli")!)
  );
  const [isFetchingResponse, setFetchingResponse] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const { register, handleSubmit } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setFetchingResponse(true);
    const { prompt } = values;
    try {
      const response = await axios.post(`${API_URL}/ai-chat`, {
        prompt: prompt,
      });
      const text = response.data.response;
      setFetchingResponse(false);
      form.reset();
      if (localStorage.getItem("chatsWithMeli")) {
        localStorage.setItem(
          "chatsWithMeli",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("chatsWithMeli")!),
            {
              prompt: prompt,
              response: text,
            },
          ])
        );
        setChatsWithMeli(JSON.parse(localStorage.getItem("chatsWithMeli")!));
      } else {
        localStorage.setItem(
          "chatsWithMeli",
          JSON.stringify([
            {
              prompt: prompt,
              response: text,
            },
          ])
        );
        setChatsWithMeli(JSON.parse(localStorage.getItem("chatsWithMeli")!));
      }
    } catch (e) {
      setFetchingResponse(true);
    }
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle>Ask Meli</DialogTitle>
        <DialogDescription>
          Make any inquiries pertaining your health here. Click{" "}
          <b className="italic underline">Ask</b> when you're done keying in
          your query.
        </DialogDescription>
      </DialogHeader>
      <Card>
        <CardContent className="flex flex-col gap-5 h-[400px] overflow-y-auto">
          {chatsWithMeli &&
            chatsWithMeli.map((chat) => {
              return (
                <>
                  <div className="w-full justify-end flex items-center gap-2 p-1 rounded-l-md rounded-tr-md">
                    {chat.prompt}
                  </div>

                  <div className="w-fit flex items-center gap-2 bg-slate-100 p-1 rounded-r-md rounded-tl-md">
                    {chat.response}
                  </div>
                </>
              );
            })}
        </CardContent>
      </Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start gap-5">
        <Textarea
          placeholder="What can I help you with today ?"
          {...register("prompt")}
          required
        />

        <DialogFooter>
          <Button
            type="submit"
            disabled={isFetchingResponse}
            className="flex items-center gap-1">
            {isFetchingResponse && <ClipLoader color="white" size={16} />}
            Ask{isFetchingResponse && "ing"}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};
