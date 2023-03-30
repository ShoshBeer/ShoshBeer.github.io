import react from "react";

export default function Contact() {
  return (
    <section id='contact'>
      <div className="max-w-6xl mx-auto h-44 bg-white dark:bg-gray-800 antialiased">
        <h2 className="text-5xl lg:text-6xl font-bold py-20 text-center md:text-left">
          Contact
        </h2>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-16 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header>
              <h3 className="text-gray-50 font-semibold text-2xl">
                I'd love to hear from you!
              </h3>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill out your information to get in touch.
              </p>
            </header>
            <div className="hidden md:block">
              <img className="mt-10 rounded-md" src="/talk-to-me-parks-and-rec.gif" />
            </div>
          </div>
          <form className="form rounded-lg bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              id="name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              id="email"
            />
            <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
              Message
            </label>
            <textarea
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
            />
            <button
              type="submit"
              className="bg-blue-500 rounded-md mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}