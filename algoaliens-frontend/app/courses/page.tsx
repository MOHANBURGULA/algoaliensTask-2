"use client"

import CourseCard from "@/components/courses/CourseCard"

const courses = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    difficulty: "Intermediate",
    progress: 64,
    modules: 24,
    enrolled: true
  },
  {
    id: "sql",
    title: "SQL Mastery",
    difficulty: "Beginner",
    progress: 85,
    modules: 16,
    enrolled: true
  },
  {
    id: "cn",
    title: "Computer Networks",
    difficulty: "Advanced",
    progress: 20,
    modules: 20,
    enrolled: false
  }
]

export default function CoursesPage() {
  return (

    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-2">
        Courses
      </h1>

      <p className="text-gray-400 text-sm mb-6">
        Skill-verified learning paths
      </p>

      {/* FILTERS */}

      <div className="flex gap-3 mb-8">

        <button className="px-4 py-1 bg-purple-600 rounded-full text-sm">
          All
        </button>

        <button className="px-4 py-1 border border-purple-700 rounded-full text-sm">
          Beginner
        </button>

        <button className="px-4 py-1 border border-purple-700 rounded-full text-sm">
          Intermediate
        </button>

        <button className="px-4 py-1 border border-purple-700 rounded-full text-sm">
          Advanced
        </button>

      </div>

      <div className="grid grid-cols-3 gap-6">

        {courses.map((course)=>(
          <CourseCard key={course.id} course={course}/>
        ))}

      </div>

    </div>
  )
}