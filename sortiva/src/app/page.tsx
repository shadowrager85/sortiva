import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import  ThemeSwitch  from '@/components/ui/ThemeSwitch';
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-16 md:py-24">
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
          <div className="banner border-2 rounded-2xl mb-4 px-4 py-2 border-green-600  dark:border-green-500 shadow">
            <p className="text-green-700  font-semibold text-sm">
              Best Waste Management System
            </p>
          </div>
          <ThemeSwitch />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900  dark:text-amber-100">
            Empowering Kenya to Recycle Smarter, Live Greener
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
            Sortiva is your AI-powered partner in recycling, transforming waste management into a seamless experience. Join us in creating a cleaner, greener Kenya for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto">
              <Link href="/signup">
                Get Started
              </Link>
            </button>
            <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition w-full sm:w-auto">
              <Link href="/Learn">
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <div className="h-64 w-64 md:h-96 md:w-96 rounded-2xl bg-green-800 flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src="/img.png"
              alt="Sortiva Hero Image"
              width={768}
              height={768}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-16 md:py-24">
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-green-700 dark:text-green-400">
            Discover the Benefits of Using Sortiva
          </h2>
          <p className="text-lg md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
            Sortiva simplifies recycling by providing easy access to recycling services right at your fingertips. With our AI-driven platform, you can contribute to a cleaner environment while saving time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto">
              <Link href="/Learn">
                Learn More
              </Link>
            </button>
            <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition w-full sm:w-auto">
              <Link href="/signup">
                Get Started
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <div className="h-64 w-64 md:h-96 md:w-96 rounded-2xl bg-green-800 flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src="/img2.png"
              alt="Sortiva Hero Image"
              width={768}
              height={768}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features flex flex-col items-center px-4 py-16 md:py-24 ">
        <div className="mb-10 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
            Discover How Sortiva Transforms Recycling Today
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Sortiva simplifies recycling with an intuitive AI assistant. Our step-by-step guidance ensures you recycle correctly and efficiently.
          </p>
        </div>
        <div className="boxes grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="box border-2 rounded-2xl p-6 h-80 text-center dark:border-green-700 bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700 dark:text-green-400">
                Step 1: Identify Your Recyclables Easily
              </h3>
              <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
                Simply scan or input items to see if they are recyclable.
              </p>
            </div>
            <button className="rounded-md px-4 py-2 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition">
              <Link href="/Learn">
                Learn More
              </Link>
            </button>
          </div>
          <div className="box border-2 rounded-2xl p-6 h-80 text-center dark:border-green-700 bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700 dark:text-green-400">
                Step 2: Get Tailored Recycling Instructions
              </h3>
              <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
                Receive personalized tips on how to sort and dispose of your recyclables.
              </p>
            </div>
            <button className="rounded-md px-4 py-2 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition">
              <Link href="/Learn">
                Learn More
              </Link>
            </button>
          </div>
          <div className="box border-2 rounded-2xl p-6 h-80 text-center dark:border-green-700 bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700 dark:text-green-400">
                Step 3: Track Your Recycling Progress
              </h3>
              <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
                Monitor your contributions to a greener environment with our tracking feature.
              </p>
            </div>
            <button className="rounded-md px-4 py-2 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition">
              <Link href="/Learn">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="pricing py-16 px-4 ">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
        Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300">
        Flexible pricing for individuals, families, and businesses. Find the plan that fits your recycling needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border-2 rounded-2xl p-8 bg-white dark:bg-gray-800 dark:border-green-700 shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Basic</h3>
          <p className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Free</p>
          <ul className="mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Access to recycling tips</li>
            <li>AI assistant (limited)</li>
            <li>Track basic progress</li>
          </ul>
          <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              <Link href="/signup">
                Get Started
              </Link>
          </button>
        </div>
        {/* Pro Plan */}
        <div className="border-4 border-green-600 dark:border-green-400 rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center scale-105">
          <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Pro</h3>
          <p className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ksh 499<span className="text-base font-normal">/mo</span></p>
          <ul className="mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>All Basic features</li>
            <li>Full AI assistant access</li>
            <li>Personalized recycling insights</li>
            <li>Priority support</li>
          </ul>
          <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            <Link href="/Payment">
              Upgrade Now
            </Link>
          </button>
        </div>
        {/* Business Plan */}
        <div className="border-2 rounded-2xl p-8 bg-white dark:bg-gray-800 dark:border-green-700 shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Business</h3>
          <p className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</p>
          <ul className="mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>All Pro features</li>
            <li>Team management</li>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
          </ul>
          <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Contact Sales
          </button>
        </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonial py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 dark:text-green-400">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl italic mb-4 text-gray-700 dark:text-gray-300">
            “Sortiva has made recycling so much easier for me. I love how intuitive the app is, and the AI assistant is incredibly helpful!”
          </p>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">- Jane Doe</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer py-16 px-4 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Sortiva Community</h2>
          <p className="text-lg md:text-xl mb-8">
            Be part of the movement towards a cleaner, greener Kenya. Sign up today and start making a difference with Sortiva.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-md px-6 py-3 bg-white text-green-700 font-semibold hover:bg-green-100 transition w-full sm:w-auto">
              <Link href="/signup">
                Get Started
              </Link>
            </button>
            <button className="rounded-md px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-green-700 transition w-full sm:w-auto">
              <Link href="/Learn">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Section */}
      <section className="contact py-16 px-4 ">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
            Get in Touch with Us
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Have questions or feedback? We’d love to hear from you! Reach out to us through our contact form or follow us on social media.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto">
              Contact Us
            </button>
            <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition w-full sm:w-auto">
              Follow Us
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter py-16 px-4 ">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Stay updated with the latest news, tips, and offers from Sortiva. Subscribe to our newsletter and never miss an update!
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-2 rounded-md px-4 py-2 border-green-600 dark:border-green-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
            />
            <button type="submit" className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq py-16 px-4 ">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Have questions about Sortiva? Check out our FAQ section for quick answers to common queries.
          </p>
          <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            View FAQs
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
            Latest from Our Blog
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Stay informed with the latest news, tips, and insights from the recycling world. Check out our blog for informative articles and updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-md px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto">
              <Link href="/Learn">
                Read Our Blog
              </Link>
            </button>
            <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <p>Copyright Sortiva Kenya And Acacia Crest @ 2025</p>
    </>
  );
}
