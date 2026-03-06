"use client"

import { useState, useRef } from "react"

import {
  BookOpen,
  Github,
  UploadCloud,
  FileText,
  Send
} from "lucide-react"

export default function ProjectsPage() {

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const courses = [
    "Data Structures & Algorithms",
    "SQL Mastery",
    "Computer Networks",
    "Operating Systems",
    "Java Programming",
    "Python for DSA"
  ]

  const [selectedCourse, setSelectedCourse] = useState("")

  return (
    <div className="min-h-screen bg-[#070312] flex justify-center items-start pt-14">

      <div className="w-[600px] space-y-6">

        {/* TITLE */}
        <div>
          <h1 className="text-white text-xl font-semibold">
            Project Submission
          </h1>

          <p className="text-gray-400 text-sm">
            Submit your project for review and earn verification points
          </p>
        </div>

        {/* COURSE BOX */}
        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">

          <div className="flex items-center gap-2 mb-4 text-purple-300 text-sm">
            <BookOpen size={16}/>
            Select Course *
          </div>

          <div className="grid grid-cols-2 gap-3">

            {courses.map((course) => (

              <button
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`text-sm px-4 py-2 rounded-lg border transition-all
                ${
                  selectedCourse === course
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "border-purple-500/20 text-gray-300 hover:border-purple-400 hover:bg-purple-500/10"
                }`}
              >
                {course}
              </button>

            ))}

          </div>
        </div>

        {/* GITHUB BOX */}
        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">

          <div className="flex items-center gap-2 text-purple-300 text-sm mb-3">
            <Github size={16}/>
            GitHub Repository *
          </div>

          <div className="relative">

            <Github
              size={16}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="https://github.com/username/repo-name"
              className="w-full bg-[#090515] border border-purple-500/20 rounded-lg pl-9 pr-3 py-2 text-sm text-white outline-none focus:border-purple-500"
            />

          </div>

          <p className="text-xs text-gray-500 mt-2">
            Make sure your repository is public or accessible to reviewers.
          </p>
        </div>

        {/* ZIP BOX */}
        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-5
        hover:border-purple-500 transition-all
        hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">

          <div className="flex items-center gap-2 text-purple-300 text-sm mb-3">
            <UploadCloud size={16}/>
            Upload ZIP File (optional)
          </div>

          <input
            type="file"
            accept=".zip"
            ref={fileInputRef}
            className="hidden"
          />

          <div
            onClick={handleClick}
            className="border border-dashed border-purple-500/20 rounded-lg py-10
            text-center text-gray-400 text-sm hover:border-purple-400
            cursor-pointer transition-all flex flex-col items-center gap-2"
          >

            <UploadCloud size={26} className="text-purple-400"/>

            Drop ZIP file or click to browse

          </div>

        </div>

        {/* DESCRIPTION BOX */}
        <div className="bg-[#0e0820] border border-purple-500/20 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">

          <div className="flex items-center gap-2 text-purple-300 text-sm mb-3">
            <FileText size={16}/>
            Project Description *
          </div>

          <textarea
            rows={4}
            placeholder="Describe what your project does..."
            className="w-full bg-[#090515] border border-purple-500/20 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500"
          />

          <p className="text-xs text-gray-500 mt-2 text-right">
            0 / 1000
          </p>

        </div>

        {/* SUBMIT BUTTON */}
        <button className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition flex items-center justify-center gap-2">

          <Send size={18}/>

          Submit Project

        </button>

      </div>

    </div>
  )
}