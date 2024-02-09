import React, { useState } from "react";

function SupportCenter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sorovni yuborishni amalga oshirish
        console.log("Email:", email);
        console.log("Message:", message);
        // Yuborilganlikka oid xabar ko'rsatish yoki boshqa amallar
        // ...
    };

    return (
        <div className="container mx-auto py-6 h-[100vh] text-white">
            <h1 className="text-3xl font-bold mb-4">Support Center</h1>
            <p className="text-gray-600 mb-8">
                Welcome to our support center. We're here to help you with any questions
                or issues you may have.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-500 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-400 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="6"
                        placeholder="Enter your message"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-white text-black p-2 focus:border-[blue] focus:border-spacing-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SupportCenter;
