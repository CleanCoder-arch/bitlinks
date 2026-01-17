"use client"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
          About BitLinks
        </h1>

        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          <span className="font-semibold text-purple-600">BitLinks</span> is a
          modern and easy-to-use URL shortener designed to transform long,
          complex links into short, shareable, and memorable URLs.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
          Whether you are sharing links on social media, emails, or messaging
          platforms, Bitlinks helps you keep your URLs clean and professional.
        </p>

        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4">
            Why Choose BitLinks?
          </h2>

          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              Fast and reliable URL shortening
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              Clean and user-friendly interface
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              Custom short links for better branding
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              Secure and scalable architecture
            </li>
          </ul>
        </div>

        <p className="text-gray-600 text-center mt-8 sm:mt-10 text-sm sm:text-base">
          Built with ❤️ to make link sharing smarter and simpler.
        </p>
      </div>
    </main>
  )
}
