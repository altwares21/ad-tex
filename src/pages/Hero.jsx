import {
  CheckIcon,
  TargetIcon,
  ChartIcon,
  RocketIcon,
} from "../components/Icons";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-ad-purple via-ad-purple to-ad-pink text-white py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-xl text-ad-yellow mb-8 leading-relaxed">
            At Ad-Tex, we specialize in amplifying your brand's voice and
            reaching your target audience with precision and creativity. Our
            expert team combines data-driven strategies with innovative
            campaigns to deliver measurable results.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-ad-yellow text-ad-purple font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all shadow-md">
              Get Started
            </button>
            <button className="border-2 border-ad-yellow text-ad-yellow font-bold px-8 py-3 rounded-lg hover:bg-ad-yellow hover:text-ad-purple transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 bg-linear-to-br from-ad-yellow to-ad-pink rounded-lg shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300">
            <img
              src="src/assets/ad-tex.png"
              alt="Ad-Tex Logo"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto mt-20 pt-16 border-t border-white border-opacity-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-black">
          Why Partner With Ad-Tex?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Expert Team */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all flex flex-col items-center text-center">
            <div className="text-4xl mb-4">
              <CheckIcon className="w-12 h-12 text-ad-yellow" />
            </div>
            <p className="font-semibold text-lg mb-2 text-black">Expert Team</p>
            <p className="text-sm leading-relaxed text-black">
              Industry-leading digital marketing professionals
            </p>
          </div>

          {/* Targeted Strategy */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all flex flex-col items-center text-center">
            <div className="text-4xl mb-4">
              <TargetIcon className="w-12 h-12 text-ad-yellow" />
            </div>
            <p className="font-semibold text-lg mb-2 text-black">
              Targeted Strategy
            </p>
            <p className="text-sm leading-relaxed text-black">
              Custom campaigns designed for your goals
            </p>
          </div>

          {/* Data Driven */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all flex flex-col items-center text-center">
            <div className="text-4xl mb-4">
              <ChartIcon className="w-12 h-12 text-ad-yellow" />
            </div>
            <p className="font-semibold text-lg mb-2 text-black">Data Driven</p>
            <p className="text-sm leading-relaxed text-black">
              Every decision backed by solid analytics
            </p>
          </div>

          {/* Fast Results */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all flex flex-col items-center text-center">
            <div className="text-4xl mb-4">
              <RocketIcon className="w-12 h-12 text-ad-yellow" />
            </div>
            <p className="font-semibold text-lg mb-2 text-black">
              Fast Results
            </p>
            <p className="text-sm leading-relaxed text-black">
              Quick turnaround without sacrificing quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
