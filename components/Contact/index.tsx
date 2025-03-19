import Head from 'next/head';
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - SwahiliPot Hub</title>
        <meta name="description" content="Get in touch with SwahiliPot Hub. We'd love to hear from you!" />
      </Head>

      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Have questions or want to get involved?
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                We'd love to hear from you! Whether you have a question, want to get involved, or just want to say hello, feel free to reach out to us.
                </p>

                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                   
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>


{/* Map Section */}
<section className="py-10 bg-gray-100 dark:bg-gray-800 flex flex-col items-center">
  {/* Heading Outside */}
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
    Find Us
  </h2>

  {/* Map Container */}
  <div className="w-[60%] h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
    <iframe
      title="Google Map Location"
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.789356977319!2d39.67731441020607!3d-4.063311395893389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840131ba0153b67%3A0x75a36ee817c3f38b!2sSwahilipot%20Hub!5e0!3m2!1sen!2ske!4v1741008927276!5m2!1sen!2ske"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>



    </>
  );
};

export default Contact;
