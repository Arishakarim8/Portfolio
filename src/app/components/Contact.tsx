import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen  py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className=" text-center mb-8">
          Get in Touch
        </h1>
     <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-9">
        <div className="mt-12  border-gray-500 border shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-6 text-[#E8E8E8] ">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border-[2px] bg-black border-gray-300  rounded-md "
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border-[2px] bg-black border-gray-300 rounded-md "
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border-[2px] border-gray-300 bg-black rounded-md "
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#EE964B] text-white  py-3 rounded-md hover:bg-orange-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="grid sm:flex gap-14 justify-around   ">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            <div className=" flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 p-4 bg-[#E8E8E8] rounded-[5px] ">
              <MdLocationOn className="text-2xl text-blue-600" />
              </div>
              <div className="grid">
                <h3>Address</h3>
                <p className="text-gray-500">123 Tech Street, Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 p-4 bg-[#E8E8E8] rounded-[5px] ">
              <MdPhone className="text-2xl text-green-600" />
              </div>
              <div className="grid">
                <h3>WhatsApp Contact</h3>
                <p className="text-gray-500">+92 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
            <div className="w-14 h-14 p-4 bg-[#E8E8E8] rounded-[5px] ">
                 <MdEmail className="text-2xl text-red-600" />
              </div>
              <div className="grid">
                <h3>Technical support</h3>
                <p className="text-gray-500">arishakarim8@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="text-center items-center">
            <h2 className="text-xl font-semibold mb-4">Find Me On</h2>
            <div className="flex justify-center space-x-3 text-4xl">
              <a
                href="https://linkedin.com/in/"
                className="text-blue-600 hover:text-blue-800 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Arishakarim8"
                className="text-gray-50  hover:text-gray-200 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/arishakarim8"
                className="text-pink-600 hover:text-pink-800 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div> 
        </div>

  </div>
      </div>
    </section>
  );
}
