/*eslint-disable*/

"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";

declare let Email: any;

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendToDiscord = async (
    name: string,
    email: string,
    subject: string,
    message: string,
  ) => {
    const webhookURL =
      "https://discord.com/api/webhooks/1169601255862194228/dWUULuXuHlJjgH1KpWkzCsINr7COtFJlJ0YD1ejAzJ5JjwgNmH0OGu1tPfbOeAeDoqkw";
    const data = {
      embeds: [
        {
          title: "New message from website",
          fields: [
            {
              name: "Name",
              value: name,
              inline: true,
            },
            {
              name: "Email",
              value: email,
              inline: true,
            },
            {
              name: "Subject",
              value: subject,
              inline: false,
            },
            {
              name: "Message",
              value: message,
              inline: false,
            },
          ],
        },
      ],
    };

    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => console.error("Error:", error));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendToDiscord(name, email, subject, message).then((message: any) => {
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    });
  };

  return (
    <div className="bg-primary p-8" id="contact">
      <h2 className="text-4xl font-bold">Contact me</h2>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col items-center justify-center"
        >
          <label className="mb-4">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-primary mt-2 block w-96 border-b-4 border-white p-2 focus:outline-none"
            />
          </label>
          <label className="mb-4">
            Mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary mt-2 block w-96 border-b-4 border-white p-2 focus:outline-none"
            />
          </label>
          <label className="mb-4">
            Subject:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-primary mt-2 block w-96 border-b-4 border-white p-2 focus:outline-none"
            />
          </label>
          <label className="mb-4">
            Message:
            <TextareaAutosize
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-primary mt-2 block w-96 resize-none border-b-4 border-white p-2 focus:outline-none"
            />
          </label>
          <input
            type="submit"
            value="Send"
            className="hover:text-primary duration-900 w-96 cursor-pointer gap-4 rounded-lg border-4 border-white p-4 text-center text-white transition-colors hover:bg-white"
          />
        </form>
      </div>
      <p className="mt-4 text-center">
        Or send me a email at contact@eloick.fr
      </p>
    </div>
  );
};

export default FormComponent;
