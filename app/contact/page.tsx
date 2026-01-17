export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Need help or have questions about{" "}
          <span className="font-semibold text-purple-600">BitLinks</span>?  
          We’re always happy to assist you.
        </p>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base">
          <p>
            📧 Email:{" "}
            <span className="font-medium text-purple-600 break-all">
              support@bitlinks.com
            </span>
          </p>

          <p>
            🌐 Website:{" "}
            <span className="font-medium text-purple-600 break-all">
              www.bitlinks.com
            </span>
          </p>

          <p>
            ⏰ Support Hours: Monday – Friday, 9:00 AM – 6:00 PM
          </p>
        </div>

        <p className="text-gray-600 mt-6 sm:mt-8 text-sm sm:text-base">
          Thank you for using BitLinks ❤️
        </p>
      </div>
    </main>
  )
}
