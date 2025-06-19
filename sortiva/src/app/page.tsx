

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <div className="hero flex flex-row m-4 p-8 ">
        <div className="content left justify-end items-end flex-1 h-96 w-96 m-4 ">
          <div className="banner border-2 rounded-2xl m-4 p-2 pr-4 w-70 border-gray-700 bg-gray-100 dark:bg-gray-800 dark:border-gray-600">
            <p>Best Waste Management System</p>
          </div>
          <div className="content">
            <h1 className="text-6xl font-bold mb-4">
              Empowering Kenya to Recycle Smarter, Live Greener
            </h1>
            <p className="text-2xl">
              Sortiva is your AI-powered partner in recycling, transforming
              waste management into a seamless experience. Join us in creating
              a cleaner, greener Kenya for future generations.
            </p>
            <button className="rounded-md m-2 p-2 bg-green-600 text-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
              Get Started
            </button>
            <button className="border-2 rounded-md m-2 p-2 border-green-600 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        <div className="image flex justify-end items-end flex-1 h-96 w-96 m-4 rounded-2xl bg-green-800">

        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits flex flex-row mb-16 p-8 mt-32">
        <div className="content justify-end items-end flex-1 rounded-2xl m-8 w-96 h-96">
          <h1 className="text-6xl mb-4">Discover the Benefits of Using Sortiva</h1>
          <p className="text-2xl">
            Sortiva simplifies recycling by providing easy access to recycling
            services right at your fingertips. With our AI-driven platform, you
            can contribute to a cleaner environment while saving time and
            money.
          </p>
          <button className="rounded-md m-2 p-2 bg-green-600 text-gray-100 hover:shadow-lg transition duration-300 ease-in-out">
            Learn More
          </button>
          <button className="border-2 rounded-md m-2 p-2 border-green-600 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
        <div className="image flex justify-end items-end flex-1 h-96 w-96 m-8 rounded-2xl bg-green-800"></div>
      </div>

      {/* Features Section */}
      <div className="features flex flex-col mb-16 p-8 mt-32">
        <div className="content flex flex-col justify-center items-center mb-10">
          <h1 className="text-4xl mb-4">
            Discover How Sortiva Transforms Recycling Today
          </h1>
          <p>
            Sortiva simplifies recycling with an intuitive AI assistant. Our
            step-by-step guidance ensures you recycle correctly and efficiently.
          </p>
        </div>
        <div className="boxes flex flex-row justify-center items-center">
          <div className="box box border-2 rounded-2xl p-4 w-80 h-80 text-center m-4  dark:border-gray-600 hover:shadow-lg transition duration-300 ease-in-out">
            <h1 className="text-2xl font-semibold mb-10">
              Step 1: Identify Your Recyclables Easily
            </h1>
            <p className="text-2xl mb-8">
              Simply scan or input items to see if they are recyclable.
            </p>
            <button className="border-2 rounded-md m-2 p-2 border-green-600 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="box box border-2 rounded-2xl p-4 w-80 h-80 text-center m-4  dark:border-gray-600 hover:shadow-lg transition duration-300 ease-in-out">
            <h1 className="text-2xl font-semibold mb-10">
              Step 2: Get Tailored Recycling Instructions
            </h1>
            <p className="text-2xl">
              Receive personalized tips on how to sort and dispose of your
              recyclables.
            </p>
            <button className="border-2 rounded-md m-2 p-2 border-green-600 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="box border-2 rounded-2xl p-4 w-80 h-80 text-center m-4  dark:border-gray-600 hover:shadow-lg transition duration-300 ease-in-out">
            <h1 className="text-2xl font-semibold mb-10">
              Step 3: Track Your Recycling Progress
            </h1>
            <p className="text-2xl">
              Monitor your contributions to a greener environment with our
              tracking feature.
            </p>
            <button className="border-2 rounded-md m-2 p-2 border-green-600 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="testimonial py-16 mb-70">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-600">What Our Users Say</h2>
          <p className="text-xl italic mb-4">
        Sortiva has made recycling so much easier for me. I love how
        intuitive the app is, and the AI assistant is incredibly helpful!
          </p>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">- Jane Doe</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer  py-16 mb-70">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Sortiva Community</h2>
          <p className="text-xl mb-8">
        Be part of the movement towards a cleaner, greener Kenya. Sign up
        today and start making a difference with Sortiva.
          </p>
          <div className="flex justify-center space-x-4">
        <button className="rounded-md px-6 py-3 bg-gray-100 text-green-600 hover:bg-gray-200 transition">
          Get Started
        </button>
        <button className="rounded-md px-6 py-3 border-2 border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-green-600 transition">
          Learn More
        </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contac py-16 mb-70">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-600">Get in Touch with Us</h2>
          <p className="text-xl mb-8">
        Have questions or feedback? We’d love to hear from you! Reach out
        to us through our contact form or follow us on social media.
          </p>
          <div className="flex justify-center space-x-4">
        <button className="rounded-md px-6 py-3 bg-green-600 text-gray-100 hover:bg-green-700 transition">
          Contact Us
        </button>
        <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition">
          Follow Us
        </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter py-16 mb-70">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-600">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">
        Stay updated with the latest news, tips, and offers from Sortiva.
        Subscribe to our newsletter and never miss an update!
          </p>
          <div className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-1/2 border-2 rounded-md px-4 py-2 border-gray-700"
        />
        <button className="rounded-md px-6 py-3 bg-green-600 text-gray-100 hover:bg-green-700 transition">
          Subscribe
        </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq  py-16 mb-70">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-600">Frequently Asked Questions</h2>
          <p className="text-xl mb-8">
        Have questions about Sortiva? Check out our FAQ section for quick
        answers to common queries.
          </p>
          <button className="rounded-md px-6 py-3 bg-green-600 text-gray-100 hover:bg-green-700 transition">
        View FAQs
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog  py-16 mb-70">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-600">Latest from Our Blog</h2>
          <p className="text-xl mb-8">
        Stay informed with the latest news, tips, and insights from the
        recycling world. Check out our blog for informative articles and
        updates.
          </p>
          <div className="flex justify-center space-x-4">
        <button className="rounded-md px-6 py-3 bg-green-600 text-gray-100 hover:bg-green-700 transition">
          Read Our Blog
        </button>
        <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-gray-100 transition">
          Subscribe
        </button>
          </div>
        </div>
      </div>
    </>
  );
}
