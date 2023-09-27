import React from 'react'
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {



        const sendEmail = (e) => {
            e.preventDefault();
                toast("Your Message is Sent. I'll get back to you Soon.");
                emailjs.sendForm('service_ylsv702', 'template_4gf6qzf', e.target, '9tLAKWxeVYDrYQXLr')
                  .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text)
                  });
                  e.target.reset();
        };

  return (

    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap pb-32">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative translate-y-10">
                <iframe
                    width="100%"
                    height="100%" 
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed/v1/place?q=Siliguri+Institute+Of+Technology,+Sukna,+West+Bengal,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
            </div>
            <form
            method='post'
            onSubmit={sendEmail}
                name="contact"
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 translate-y-5">
                <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font text-cyan-400">
                    Connect With Me.
                </h2>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-cyan-400">
                    Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-black rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-cyan-400">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-black rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                    name="message"
                    required
                    className="leading-7 text-sm text-cyan-400">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    className="w-full bg-black rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
                <ToastContainer theme='dark'/>
            </form>
      </div>
    </section>
  );

}
