export default function Hero() {
  const benefits = [
    { icon: '✓', title: 'Expert Team', description: 'Industry-leading digital marketing professionals' },
    { icon: '🎯', title: 'Targeted Strategy', description: 'Custom campaigns designed for your goals' },
    { icon: '📊', title: 'Data Driven', description: 'Every decision backed by solid analytics' },
    { icon: '🚀', title: 'Fast Results', description: 'Quick turnaround without sacrificing quality' }
  ];

  return (
    <section className="relative bg-linear-to-r from-ad-purple via-ad-purple to-ad-pink text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Making Your Business Be Known
          </h2>
          <p className="text-xl text-ad-yellow mb-6 font-semibold">
            Digital Marketing Excellence for Caribbean Businesses
          </p>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            At Ad-Tex, we specialize in amplifying your brand's voice and reaching your target audience with precision and creativity. Our expert team combines data-driven strategies with innovative campaigns to deliver measurable results.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-ad-yellow text-ad-purple font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all shadow-md">
              Let's Work Together
            </button>
            <button className="border-2 border-ad-yellow text-ad-yellow font-bold px-8 py-3 rounded-lg hover:bg-ad-yellow hover:text-ad-purple transition-all">
              View Our Services
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 bg-linear-to-br from-ad-yellow to-ad-pink rounded-lg shadow-2xl flex items-center justify-center hover:shadow-2xl transition-all duration-300">
            <img src="/Ad-Tex.png" alt="Ad-Tex Hero" className="w-64 h-64 object-contain" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-6xl mx-auto mt-20 pt-16 border-t border-white border-opacity-20">
        <h3 className="text-3xl font-bold text-center mb-12">Why Partner With Ad-Tex?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition-all">
              <div className="text-4xl mb-4 font-bold">{benefit.icon}</div>
              <p className="font-semibold text-lg mb-2">{benefit.title}</p>
              <p className="text-gray-200 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
