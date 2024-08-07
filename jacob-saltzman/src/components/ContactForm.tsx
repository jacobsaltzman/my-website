import { useState } from "react";
import Bounded from "./Bounded";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully");
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-black p-8">
      

        <h3 className="border-b-2 font-bold text-white">CONTACT ME</h3>
      
      
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <div>
        <button type="submit" className="max-w-14 px-1 border-2 text-white hover:border-slate-800 hover:text-slate-800">
          SEND
        </button>
      </div>
    </form>
  );
}
