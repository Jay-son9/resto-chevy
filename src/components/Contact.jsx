import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c5a8347-4fc4-49f5-80aa-bdb2dd42bb16");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto my-5 rounded-md p-7">
      <h3 className="text-3xl text-gray-400 font-semibold mb-4">
        Send <span className="text-sky-400">Message</span>
      </h3>
      <form className="" onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Name </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            type="text"
            name="name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Your Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            type="email"
            name="email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">
            Your Message
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            rows="4"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit"  className="border border-sky-400 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 hover:border-transparent cursor-pointer">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
