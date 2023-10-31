"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast.success("Votre message a été envoyé !");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-primary p-8 ">
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
              className="mt-2 block rounded border border-gray-300 p-2 text-black"
            />
          </label>
          <label className="mb-4">
            Mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block rounded border border-gray-300 p-2 text-black"
            />
          </label>
          <label className="mb-4">
            Subject:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 block rounded border border-gray-300 p-2 text-black"
            />
          </label>
          <label className="mb-4">
            Message:
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 block rounded border border-gray-300 p-2 text-black"
            />
          </label>
          <input
            type="submit"
            value="Send"
            className="hover:text-primary duration-900 flex cursor-pointer items-center gap-4 rounded-lg border-4 border-white p-4 text-white transition-colors hover:bg-white"
          />
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
