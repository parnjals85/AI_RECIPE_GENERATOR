import img from '../contact/contact.png';
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-200">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 text-red-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or want to suggest a new recipe? We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Form */}
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition active:scale-95"
            >
              Send Message
            </button>
          </form>

          {/* Right Side Image */}
          <div className="flex items-center justify-center">
            <img
              src={img}
              alt="contact illustration"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
