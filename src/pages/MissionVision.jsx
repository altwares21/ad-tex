export default function MissionVision() {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-ad-purple mb-16">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-ad-pink hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-ad-pink text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                M
              </div>
              <h3 className="text-2xl font-bold text-ad-pink">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To help businesses grow by effectively advertising
              and marketing their products and services to the right audience
              using accurate, data driven strategies. We focus on analyzing and
              performing data-driven solutions to focus on enhancing brand
              recognition, prestige, and long term impact.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-ad-yellow hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-ad-yellow text-ad-purple rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                V
              </div>
              <h3 className="text-2xl font-bold text-ad-yellow">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the leading marketing and advertising
              company in the Caribbean recognized for transforming brands into
              recognizable, competitive, and trustworthy ones. We aim to set the
              regional standards for ethical marketing, innovation, scalability,
              and adaptability for all business sizes to grow sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
