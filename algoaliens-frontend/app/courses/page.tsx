"use client"

import { useState } from "react"
import { courses } from "@/lib/courses"
import Link from "next/link"

import {
  BookOpen,
  Search,
  Layers,
  BarChart,
  Play,
  PlusCircle
} from "lucide-react"

export default function CoursesPage() {

  const [search, setSearch] = useState("")

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="space-y-8">

      {/* TITLE */}

      <h1 className="text-2xl font-bold flex items-center gap-2">

        <BookOpen size={24} className="text-purple-400"/>

        Courses

      </h1>


      {/* SEARCH */}

      <div className="relative w-72">

        <Search
          size={16}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          className="input-ui w-full pl-9"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* COURSES GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredCourses.map(course => (

          <div
            key={course.id}
            className="card-ui hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition"
          >

            {/* TITLE */}

            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">

              <BookOpen size={16} className="text-purple-400"/>

              {course.title}

            </h2>


            {/* MODULES */}

            <p className="text-sm text-gray-400 mb-4 flex items-center gap-1">

              <Layers size={14}/>

              {course.modules.length} modules

            </p>


            {/* PROGRESS BAR */}

            <div className="mb-5">

              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">

                <span className="flex items-center gap-1">

                  <BarChart size={12}/>

                  Progress

                </span>

                <span>{course.progress}%</span>

              </div>

              <div className="w-full h-2 bg-[#1a0b33] rounded-full">

                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />

              </div>

            </div>


            {/* BUTTON */}

            <Link href={`/courses/${course.id}`}>

              {course.enrolled ? (

                <button className="btn-primary w-full flex items-center justify-center gap-2">

                  <Play size={16}/>

                  Resume Course

                </button>

              ) : (

                <button className="w-full py-3 rounded-lg border border-purple-700 hover:border-purple-500 transition flex items-center justify-center gap-2">

                  <PlusCircle size={16}/>

                  Enroll Now

                </button>

              )}

            </Link>

          </div>

        ))}

      </div>

    </div>

  )

}