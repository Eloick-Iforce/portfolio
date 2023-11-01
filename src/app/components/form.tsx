"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast.success("Message sent with success !");
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
    </div>
  );
};

export default FormComponent;
