export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-ad-purple mb-4">
            About Ad-Tex
          </h1>
          <p className="text-xl text-gray-600">Making Your Business Be Known</p>
        </div>

        {/* Company Overview */}
        <div className="bg-linear-to-r from-ad-purple to-ad-pink rounded-lg shadow-lg p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">Who We Are</h2>
          <p className="text-lg leading-relaxed text-black">
            Ad-Tex is a forward-thinking advertising and marketing agency
            dedicated to transforming how businesses connect with their
            audiences. With a passion for creativity, data-driven strategies,
            and client success, we've been helping companies amplify their brand
            presence and achieve their business goals.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ad-purple mb-8 text-center">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              "Web Development & Management",
              "Social Media Management using Digital Tools",
              "Online Advertising",
              "Data Analytics",
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-ad-purple hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-700 font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ad-purple mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Daniel Villanueva",
                img: "/src/assets/team-placeholder.png",
              },
              {
                name: "Madelyn Cunil",
                img: "/src/assets/team-placeholder.png",
              },
              { name: "Luis Mattu", img: "/src/assets/team-placeholder.png" },
              { name: "Alvaro Chan", img: "/src/assets/team-placeholder.png" },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <p className="text-lg font-semibold text-ad-purple">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ad-Tex's Values */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-ad-purple mb-8 text-center">
            Ad-Tex's Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-ad-purple mb-2">
                Teamwork & Respect
              </h3>
              <p className="text-gray-700 mb-4">
                We value teamwork, open communication and respect among
                employees to create a supportive and productive work
                environment.
              </p>

              <h3 className="text-xl font-bold text-ad-purple mb-2">
                Innovation & Creativity
              </h3>
              <p className="text-gray-700 mb-4">
                We encourage creative thinking, flexibility and adaptation to
                new trends and technologies in digital marketing.
              </p>

              <h3 className="text-xl font-bold text-ad-purple mb-2">
                Reliability & Professionalism
              </h3>
              <p className="text-gray-700 mb-4">
                We maintain organized processes, accountability and consistency
                in delivering quality services to our clients.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ad-purple mb-2">
                Excellence & Results
              </h3>
              <p className="text-gray-700 mb-4">
                We aim for high quality work, measurable outcomes, and
                continuous improvement in all our endeavors.
              </p>

              <h3 className="text-xl font-bold text-ad-purple mb-2">
                Integrity & Transparency
              </h3>
              <p className="text-gray-700 mb-4">
                We commit to honest communication, ethical marketing practices
                and clear reporting to our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ad-purple mb-8 text-center">
            Location
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d270.8363138520418!2d-88.39265666424947!3d18.385465000379106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbz!4v1771299984150!5m2!1sen!2sbz"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-linear-to-r from-ad-purple to-ad-pink rounded-lg p-12 text-black">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make Your Business Be Known?
          </h2>
          <p className="text-lg mb-8">
            Let's work together to elevate your brand and achieve your business
            goals.
          </p>
          <button className="bg-ad-yellow text-ad-purple font-bold px-10 py-3 rounded-lg hover:shadow-lg transition-all text-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
