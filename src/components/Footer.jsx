export default function Footer() {
  return (
    <footer className="bg-ad-purple text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Ad-Tex</h3>
            <p className="text-ad-yellow font-semibold mb-3">Making Your Business Be Known</p>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in digital marketing and brand elevation. We help businesses grow with innovative, data-driven strategies.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Email:</span> contact@adtex.com  
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Phone:</span> +(501) 492-8237
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-ad-yellow hover:text-white transition-colors font-semibold">
                Facebook
              </a>
              <a href="#" className="text-ad-yellow hover:text-white transition-colors font-semibold">
                Twitter
              </a>
              <a href="#" className="text-ad-yellow hover:text-white transition-colors font-semibold">
                Instagram
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2026 Ad-Tex. All rights reserved. | Making Your Business Be Known</p>
        </div>
      </div>
    </footer>
  );
}
