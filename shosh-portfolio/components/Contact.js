import Image from "next/image";
import react from "react";

export default function Contact() {
  return (
    <section id='contact'>
      <div className="max-w-6xl mx-auto py-10 bg-white dark:bg-[#121212] antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          I'd love to hear from you!
        </h2>
      </div>
      <div className="relative rounded-md shadow-md p-4 md:p-10 lg:p-16 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="text-center">
              {/* <h3 className="dark:text-gray-50 font-semibold text-2xl">
                I'd love to hear from you!
              </h3> */}
              <p className="text-base dark:text-gray-200 mt-2">
                Fill out your information to get in touch.
              </p>
            </header>
            <div className="hidden md:block">
              <Image className="mt-10 rounded-md" src="/talk-to-me-parks-and-rec.gif" alt="A clip from Parks and Recreation with Leslie Knope repeatedly saying 'talk to me' to Ron Swanson." width={498} height={280}/>
            </div>
          </div>
          <form className="form rounded-lg p-4 flex flex-col">
            <label htmlFor="name" className="text-sm dark:text-gray-200 text-gray-600 mx-4">
              Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              id="name"
            />
            <label htmlFor="email" className="text-sm dark:text-gray-200 text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              id="email"
            />
            <label htmlFor="message" className="text-sm dark:text-gray-200 text-gray-600 mx-4 mt-4">
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