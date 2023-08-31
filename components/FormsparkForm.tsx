'use client'
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

export const FormsparkForm = () => {
  const [submit, submitting] = useFormspark({
    formId: "your-form-id"
  });
  const [message, setMessage] = useState("");
  return (
    <form className="flex flex-row gap-4" onSubmit={async (e) => {
        e.preventDefault();
        await submit({ message })
    }}>
      <textarea
        className="ring-4 rounded-md w-1/3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-primary-600 px-10 py-2 rounded-3xl text-xl text-white hover:bg-primary-light" type="submit" disabled={submitting}>Send</button>
    </form>
  );
};