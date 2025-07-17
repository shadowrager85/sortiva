import React from "react";
import type { NextPage } from "next";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

const HomePage: NextPage = () => {
  return (
<>
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-gray-100 py-10 px-4 rounded-xl shadow-lg mb-8 border-l-8 border-green-700 transition-shadow duration-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center gap-3">
          <ThemeSwitch />
          🌍 The Power of Environmental Observation: Why Watching Nature Matters More Than Ever
        </h1>

        <p className="mb-4">
          In an age where technology dominates daily life, the simple act of observing nature might seem quaint — even outdated. But in reality, environmental observation is one of the most important tools we have for understanding the planet and protecting its future.
        </p>

        <p className="mb-4">
          From climate change to biodiversity loss, our world is changing faster than ever before. And to keep up, we must pay attention. Carefully. Consistently. Intentionally.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
          🌿 What is Environmental Observation?
        </h2>
        <p className="mb-4">
          Environmental observation is the practice of watching, measuring, and recording changes in the natural world. It can be as sophisticated as satellite monitoring of deforestation, or as simple as a person noting the first day flowers bloom each spring.
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Temperature and climate trends</li>
          <li>Air and water quality</li>
          <li>Wildlife populations and migration patterns</li>
          <li>Soil conditions and vegetation changes</li>
          <li>Natural disasters like floods, wildfires, or hurricanes</li>
        </ul>

        <p className="mb-4">
          Together, these observations create a big-picture view of our planet’s health.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
          🔬 Why It Matters
        </h2>
        <h3 className="text-xl font-medium mt-4 mb-2 text-green-200">1. Early Warnings of Environmental Threats</h3>
        <p className="mb-4">
          Environmental observation helps scientists detect changes early — before they become crises. For example, tracking water levels and temperatures can warn of an upcoming drought or algal bloom that might affect drinking water and food production.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2 text-green-200">2. Understanding Climate Change</h3>
        <p className="mb-4">
          Climate change isnt just about rising temperatures. It’s about shifting seasons, melting glaciers, stronger storms, and disappearing species. Long-term environmental data helps us understand these complex trends and how they affect people and ecosystems.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2 text-green-200">3. Protecting Biodiversity</h3>
        <p className="mb-4">
          By observing changes in plant and animal populations, scientists can identify species at risk. This leads to conservation efforts that help restore habitats, protect endangered animals, and maintain biodiversity.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2 text-green-200">4. Informing Policy and Action</h3>
        <p className="mb-4">
          Good decisions depend on good data. Environmental observations are the foundation of smart policy-making, helping governments, farmers, businesses, and communities prepare and adapt to changing conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
          🧳️ Everyone Can Be an Observer
        </h2>
        <p className="mb-4">
          You don’t need a lab coat or fancy instruments to be part of this movement. Citizen scientists — everyday people like you — are playing a growing role in environmental observation. Apps like iNaturalist, eBird, and GLOBE Observer let people record wildlife sightings, track tree health, and even monitor cloud patterns.
        </p>

        <p className="mb-4">
          By contributing your own observations, you help build a global network of environmental data. And in doing so, you also deepen your connection to the natural world.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
          🌎 A Call to Awareness
        </h2>
        <p className="mb-4">
          In a world flooded with headlines and noise, pausing to observe the environment is an act of care. It’s a statement: <em>I am paying attention.</em> It’s a step toward a healthier, more sustainable future.
        </p>

        <p className="mb-8">
          So take a walk. Look around. Notice the birds, the sky, the soil beneath your feet. Whether youre in a city park or a rural field, your observations matter.
        </p>

        <p className="font-semibold text-green-400 mb-8">
          Because protecting the planet begins with truly seeing it.
        </p>
      </div>
    </div>
</>
  );
};

export default HomePage;
