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

  const [showProjectInput, setShowProjectInput] = useState(false)
  const [showVideoInput, setShowVideoInput] = useState(false)

  const [projectFile, setProjectFile] = useState<File | null>(null)
  const [githubLink, setGithubLink] = useState("")
  const [videoFile, setVideoFile] = useState<File | null>(null)

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
                ? <ChevronUp size={18} className="text-gray-400" />
                : <ChevronDown size={18} className="text-gray-400" />
              }

            </div>


{/* MODULE CONTENT */}

{openModule === module.id && (

<div className="space-y-4 mt-5">


{/* FINAL MODULE */}

{module.id === "6" ? (

<>

{/* MCQ TEST */}

<div className="flex justify-between items-center bg-[#0a0318] p-4 rounded-xl border border-purple-700/20">

<div className="flex items-center gap-3">
<Book size={16} className="text-purple-400"/>
<span className="font-medium">Final MCQ Test</span>
</div>

<Link href={`/courses/${course.id}/mcq`}>

<button className="px-4 py-1 text-xs rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition">
Start Test
</button>

</Link>

</div>



{/* PROJECT SUBMISSION */}

<div className="bg-[#0a0318] p-4 rounded-xl border border-purple-700/20">

<div className="flex justify-between items-center">

<div className="flex items-center gap-3">
<Code2 size={16} className="text-purple-400"/>
<span className="font-medium">Submit Project (ZIP / GitHub)</span>
</div>

<button
onClick={() => setShowProjectInput(!showProjectInput)}
className="px-4 py-1 text-xs rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition"
>
Submit
</button>

</div>

{showProjectInput && (

<div className="mt-4 space-y-4">

<input
type="file"
accept=".zip"
onChange={(e)=>setProjectFile(e.target.files?.[0] || null)}
className="w-full text-sm bg-[#1c1038] border border-purple-700/30 rounded-lg p-3
file:bg-purple-600 file:text-white file:border-0 file:px-3 file:py-1 file:rounded-md
file:mr-3 hover:file:bg-purple-500"
/>

<input
type="text"
placeholder="Paste GitHub Repo Link"
value={githubLink}
onChange={(e)=>setGithubLink(e.target.value)}
className="w-full p-3 rounded-lg bg-[#1c1038] border border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
/>

<button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 hover:scale-[1.02] transition font-medium">
Submit Project
</button>

</div>

)}

</div>



{/* VIDEO UPLOAD */}

<div className="bg-[#0a0318] p-4 rounded-xl border border-purple-700/20">

<div className="flex justify-between items-center">

<div className="flex items-center gap-3">
<Video size={16} className="text-cyan-400"/>
<span className="font-medium">Upload Explanation Video</span>
</div>

<button
onClick={()=>setShowVideoInput(!showVideoInput)}
className="px-4 py-1 text-xs rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition"
>
Upload
</button>

</div>

{showVideoInput && (

<div className="mt-4 space-y-4">

<input
type="file"
accept="video/*"
onChange={(e)=>setVideoFile(e.target.files?.[0] || null)}
className="w-full text-sm bg-[#1c1038] border border-purple-700/30 rounded-lg p-3
file:bg-cyan-500 file:text-black file:border-0 file:px-3 file:py-1 file:rounded-md
file:mr-3 hover:file:bg-cyan-400"
/>

<button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 hover:scale-[1.02] transition font-medium">
Upload Video
</button>

</div>

)}

</div>

</>

) : (

<>

{/* THEORY */}

<div className="flex justify-between items-center bg-[#0a0318] p-3 rounded-lg">

<div className="flex items-center gap-3">
<Book size={16} className="text-gray-400"/>
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
<Code2 size={16} className="text-gray-400"/>
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
<Video size={16} className="text-gray-400"/>
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

</>

)}

</div>

)}

          </div>

        ))}

      </div>

    </div>

  )

}