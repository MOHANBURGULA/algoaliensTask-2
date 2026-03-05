import Link from "next/link"

export default function PublicNavbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <h1 className="font-bold text-lg">
        AlgoAliens
      </h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/signup">Signup</Link>
      </div>

    </nav>
  )
}