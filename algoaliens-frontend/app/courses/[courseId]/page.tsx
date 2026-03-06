"use client"

import { useParams } from "next/navigation"
import { courses } from "@/lib/courses"
import Link from "next/link"
import { useState } from "react"

import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Code2,
  Book,
  Video
} from "lucide-react"

export default function CoursePage() {

  const params = useParams()

  const course = courses.find(c => c.id === params.courseId)

  const [openModule, setOpenModule] = useState<string | null>(null)

  if (!course) return <div>Course not found</div>

  return (

    <div className="space-y-8 max-w-3xl">

      {/* COURSE HEADER */}

      <div>

        <span className="text-xs bg-[#1c1038] text-gray-300 px-3 py-1 rounded-full">
          Computer Science
        </span>

        <h1 className="text-2xl font-bold mt-3 flex items-center gap-2">
          <BookOpen size={20} className="text-purple-400" />
          {course.title}
        </h1>

        <p className="text-gray-400 text-sm">
          Master core data structures and algorithm patterns
        </p>

        {/* PROGRESS */}

        <div className="mt-4 flex items-center gap-4">

          <div className="w-60 h-2 bg-[#1a0b33] rounded-full">

            <div
              className="h-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
              style={{ width: `${course.progress}%` }}
            />

          </div>

          <span className="text-sm text-gray-400">
            {course.progress}% complete
          </span>

        </div>

      </div>



      {/* MODULES */}

      <div className="space-y-4">

        {course.modules.map(module => (

          <div
            key={module.id}
            className="bg-[#0f0622] border border-purple-700/20 rounded-xl p-5"
          >

            {/* MODULE HEADER */}

            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
            >

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 text-sm">
                  {module.id}
                </div>

                <div>

                  <h2 className="font-semibold">
                    {module.title}
                  </h2>

                  <p className="text-xs text-gray-400">
                    3 stages · {Math.round(course.progress / 2)}% complete
                  </p>

                </div>

              </div>

              {openModule === module.id
                ?
                <ChevronUp size={18} className="text-gray-400" />
                :
                <ChevronDown size={18} className="text-gray-400" />
              }

            </div>



            {/* MODULE CONTENT */}

            {openModule === module.id && (

              <div className="space-y-3 mt-5">


                {/* THEORY */}

                <div className="flex justify-between items-center bg-[#0a0318] p-3 rounded-lg">

                  <div className="flex items-center gap-3">

                    <Book size={16} className="text-gray-400" />

                    <span>Theory</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">
                      Completed
                    </span>

                    <button className="px-3 py-1 text-xs rounded-md bg-[#1c1038] hover:bg-purple-600/40">
                      Review
                    </button>

                  </div>

                </div>


                {/* ACTIVITY */}

                <div className="flex justify-between items-center bg-[#0a0318] p-3 rounded-lg">

                  <div className="flex items-center gap-3">

                    <Code2 size={16} className="text-gray-400" />

                    <span>Activity</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">
                      Completed
                    </span>

                    <Link href={`/courses/${course.id}/module/${module.id}/activity`}>

                      <button className="px-3 py-1 text-xs rounded-md bg-[#1c1038] hover:bg-purple-600/40">
                        Review
                      </button>

                    </Link>

                  </div>

                </div>


                {/* VIDEO */}

                <div className="flex justify-between items-center bg-[#0a0318] p-3 rounded-lg">

                  <div className="flex items-center gap-3">

                    <Video size={16} className="text-gray-400" />

                    <span>Explanation Video</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs bg-cyan-600/20 text-cyan-400 px-2 py-1 rounded">
                      In Progress
                    </span>

                    <Link href={`/courses/${course.id}/module/${module.id}/stage/3`}>

                      <button className="px-4 py-1 text-xs rounded-md bg-gradient-to-r from-purple-500 to-cyan-400">
                        Continue
                      </button>

                    </Link>

                  </div>

                </div>


              </div>

            )}

          </div>

        ))}

      </div>

    </div>

  )

}