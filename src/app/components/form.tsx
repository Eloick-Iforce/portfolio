// @ts-ignore
"use client";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";
import trad from "../../../public/trad.json";
import LanguageContext from "./LanguageContext";
import { Translations } from "../../../public/trad";
const typedTrad = trad as Translations;

const FormComponent = () => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendToDiscord = async () => {
    const webhookURL =
      "https://discord.com/api/webhooks/1169601255862194228/dWUULuXuHlJjgH1KpWkzCsINr7COtFJlJ0YD1ejAzJ5JjwgNmH0OGu1tPfbOeAeDoqkw";
    const data = {
      embeds: [
        {
          title: "Un nouveau message est arrivé !",
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
    sendToDiscord()
      .then(() => {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-primary p-8" id="contact">
      <h2 className="text-4xl font-bold">{typedTrad[language].contactMe}</h2>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col items-center justify-center"
        >
          <label className="mb-4">
            {typedTrad[language].champform1}
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-64 border-b-4 border-white bg-primary p-2 focus:outline-none md:w-96"
            />
          </label>
          <label className="mb-4">
            {typedTrad[language].champform2}
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-64 border-b-4 border-white bg-primary p-2 focus:outline-none md:w-96"
            />
          </label>
          <label className="mb-4">
            {typedTrad[language].champform3}
            <input
              required
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 block w-64 border-b-4 border-white bg-primary p-2 focus:outline-none md:w-96"
            />
          </label>
          <label className="mb-4">
            {typedTrad[language].champform4}
            <TextareaAutosize
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 block w-64 resize-none border-b-4 border-white bg-primary p-2 focus:outline-none md:w-96"
            />
          </label>
          <input
            type="submit"
            value={typedTrad[language].buttonform}
            className="duration-900 w-64 cursor-pointer gap-4 rounded-lg border-4 border-white p-4 text-center text-white transition-colors hover:bg-white hover:text-primary md:w-96"
          />
        </form>
      </div>
      <p className="mt-4 text-center">{typedTrad[language].email}</p>
    </div>
  );
};

export default FormComponent;
