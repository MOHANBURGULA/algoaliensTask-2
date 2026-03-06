import Link from "next/link"

export default function PublicNavbar() {
  return (
    <nav className="w-full border-b border-purple-900/30 backdrop-blur-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          AlgoAliens
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm text-gray-300">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/courses" className="hover:text-white">
            Courses
          </Link>

          <Link href="/signup" className="hover:text-white">
            Signup
          </Link>

        </div>

      </div>

    </nav>
  )
}