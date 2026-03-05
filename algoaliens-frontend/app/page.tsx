import PublicNavbar from "@/components/layout/PublicNavbar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0A19] text-white">

      <PublicNavbar />

      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-32 px-6">

        <span className="text-xs px-4 py-1 border border-purple-600 rounded-full text-purple-400">
          AI Powered Developer Platform
        </span>

        <h1 className="text-5xl font-bold mt-6">
          Master Algorithms with
          <span className="block text-purple-400">
            AlgoAliens
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          Prove your coding skills through real challenges, projects,
          and skill verification.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/courses"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400"
          >
            Start Learning
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-lg border border-purple-500"
          >
            Explore Courses
          </Link>
        </div>

        {/* STATS */}
        <div className="flex gap-12 mt-10 text-center">

          <div>
            <h2 className="text-xl font-semibold">50K+</h2>
            <p className="text-gray-400 text-sm">Developers</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">200+</h2>
            <p className="text-gray-400 text-sm">Challenges</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">95%</h2>
            <p className="text-gray-400 text-sm">Completion</p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-28 px-6">

        <h2 className="text-center text-xl font-semibold">
          Why Choose AlgoAliens?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">

          <div className="border border-purple-800 rounded-xl p-6 bg-[#1A0F2E]">
            <h3 className="font-semibold">Interactive Coding</h3>
            <p className="text-gray-400 text-sm mt-2">
              Solve real algorithm challenges.
            </p>
          </div>

          <div className="border border-purple-800 rounded-xl p-6 bg-[#1A0F2E]">
            <h3 className="font-semibold">Progress Tracking</h3>
            <p className="text-gray-400 text-sm mt-2">
              Monitor your growth.
            </p>
          </div>

          <div className="border border-purple-800 rounded-xl p-6 bg-[#1A0F2E]">
            <h3 className="font-semibold">Skill Verification</h3>
            <p className="text-gray-400 text-sm mt-2">
              Earn certificates.
            </p>
          </div>

          <div className="border border-purple-800 rounded-xl p-6 bg-[#1A0F2E]">
            <h3 className="font-semibold">Expert Guidance</h3>
            <p className="text-gray-400 text-sm mt-2">
              Learn from experts.
            </p>
          </div>

        </div>
      </section>

      {/* COURSE PREVIEW */}
      <section className="mt-28 text-center px-6">

        <h2 className="text-xl font-semibold">
          Explore Our Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">

          <div className="border border-purple-800 p-6 rounded-xl bg-[#1A0F2E]">
            Data Structures
          </div>

          <div className="border border-purple-800 p-6 rounded-xl bg-[#1A0F2E]">
            DBMS Mastery
          </div>

          <div className="border border-purple-800 p-6 rounded-xl bg-[#1A0F2E]">
            System Design
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="mt-28 px-6">

        <div className="max-w-4xl mx-auto text-center rounded-xl p-10 bg-gradient-to-r from-purple-700 to-blue-500">

          <h2 className="text-2xl font-bold">
            Ready to Prove Your Skills?
          </h2>

          <p className="text-gray-200 mt-4">
            Join thousands of developers mastering algorithms.
          </p>

          <button className="mt-6 px-6 py-3 bg-black rounded-lg">
            Start Learning
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-28 border-t border-purple-900 py-10 text-center text-gray-400">
        © 2026 AlgoAliens. All rights reserved.
      </footer>

    </div>
  )
}