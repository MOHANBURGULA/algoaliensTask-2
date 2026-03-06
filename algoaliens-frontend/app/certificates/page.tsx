"use client"

import {
  Trophy,
  Clock,
  Star,
  Award,
  Download,
  Share2,
  ShieldCheck,
  Loader
} from "lucide-react"

export default function CertificatesPage() {

  const earnedCertificates = [
    {
      title: "Data Structures & Algorithms",
      level: "Intermediate Level",
      score: 92,
      tag: "Expert",
      date: "Feb 15, 2026",
      id: "ALGO-2024-DSA-841",
      pdf: "/certificates/sample-certificate.pdf"
    },
    {
      title: "SQL Mastery",
      level: "Beginner Level",
      score: 88,
      tag: "Verified",
      date: "Jan 28, 2026",
      id: "ALGO-2024-SQL-842",
      pdf: "/certificates/sample-certificate.pdf"
    },
    {
      title: "Python for DSA",
      level: "Intermediate Level",
      score: 95,
      tag: "Gold",
      date: "Dec 10, 2025",
      id: "ALGO-2024-PY-189",
      pdf: "/certificates/sample-certificate.pdf"
    }
  ]

  const inProgress = [
    { title: "Computer Networks", progress: 20 },
    { title: "Operating Systems", progress: 45 }
  ]

  const handleShare = async (cert:any) => {

    const shareData = {
      title: cert.title,
      text: `I earned a certificate in ${cert.title}!`,
      url: cert.pdf
    }

    try {

      if (navigator.share) {

        await navigator.share(shareData)

      } else {

        await navigator.clipboard.writeText(window.location.origin + cert.pdf)

        alert("Certificate link copied to clipboard!")

      }

    } catch (error) {

      console.log("Share cancelled")

    }

  }

  return (

    <div className="min-h-screen bg-[#070312] text-white p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold">My Certificates</h1>
        <p className="text-gray-400 text-sm">
          Blockchain-verified skill certificates you've earned
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">

          <Trophy className="mx-auto mb-2 text-cyan-400" size={22}/>

          <p className="text-2xl text-cyan-400 font-semibold">3</p>
          <p className="text-gray-400 text-sm">Earned</p>

        </div>

        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">

          <Clock className="mx-auto mb-2 text-yellow-400" size={22}/>

          <p className="text-2xl text-yellow-400 font-semibold">2</p>
          <p className="text-gray-400 text-sm">Pending</p>

        </div>

        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-6 text-center hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">

          <Star className="mx-auto mb-2 text-pink-400" size={22}/>

          <p className="text-2xl text-pink-400 font-semibold">850</p>
          <p className="text-gray-400 text-sm">Points</p>

        </div>

      </div>

      {/* EARNED CERTIFICATES */}
      <h2 className="text-sm text-gray-300 mb-4">Earned Certificates</h2>

      <div className="grid grid-cols-3 gap-6 mb-10">

        {earnedCertificates.map((cert, index) => (

          <div
            key={index}
            className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-6 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition"
          >

            {/* TITLE */}
            <div className="flex justify-between mb-3">

              <div className="flex gap-2">

                <Award className="text-purple-400 mt-1" size={16}/>

                <div>
                  <h3 className="text-sm font-semibold">{cert.title}</h3>
                  <p className="text-xs text-gray-400">{cert.level}</p>
                </div>

              </div>

              <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded">
                {cert.tag}
              </span>

            </div>

            {/* PROGRESS */}
            <div className="mb-4">

              <div className="w-full h-2 bg-[#1b1238] rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                  style={{ width: `${cert.score}%` }}
                />
              </div>

              <p className="text-xs text-right text-gray-400 mt-1">
                {cert.score}/100
              </p>

            </div>

            {/* INFO */}
            <div className="text-xs text-gray-400 space-y-1 mb-4">

              <p>{cert.date}</p>

              <p>{cert.id}</p>

              <div className="flex items-center gap-1">
                <ShieldCheck size={12}/>
                Blockchain Verified
              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex justify-between text-xs text-gray-400 border-t border-purple-500/20 pt-3">

              <a
                href={cert.pdf}
                download
                className="hover:text-white transition flex items-center gap-1"
              >

                <Download size={14}/>

                Download

              </a>

              <button
                onClick={() => handleShare(cert)}
                className="hover:text-white transition flex items-center gap-1"
              >

                <Share2 size={14}/>

                Share

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* IN PROGRESS */}
      <h2 className="text-sm text-gray-300 mb-4">In Progress</h2>

      <div className="grid grid-cols-2 gap-6">

        {inProgress.map((course, index) => (

          <div
            key={index}
            className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >

            <div className="flex justify-between mb-3">

              <div className="flex items-center gap-2">

                <Loader size={16} className="text-purple-400"/>

                <h3 className="text-sm">{course.title}</h3>

              </div>

              <span className="text-xs text-gray-400">
                {course.progress}%
              </span>

            </div>

            <div className="w-full h-2 bg-[#1b1238] rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}