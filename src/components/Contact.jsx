const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Map */}
        <div className="w-full h-96">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5091260989166!2d88.35089409999996!3d22.560053799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027708fcb35431%3A0x197697e299820afc!2s19-B%2C%20Jawaharlal%20Nehru%20Rd%2C%20Maidan%2C%20New%20Market%20Area%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1751699925372!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
