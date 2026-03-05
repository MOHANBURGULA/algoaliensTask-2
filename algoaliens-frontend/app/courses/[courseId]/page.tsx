"use client"

import { useParams } from "next/navigation"

type ActivityMap = {
  [key: string]: string[]
}

const activities: ActivityMap = {
  dsa: [
    "Two Sum",
    "Binary Search",
    "Reverse Linked List"
  ],
  sql: [
    "SQL Joins",
    "Indexes",
    "Normalization"
  ]
}

export default function CourseDetails() {

  const params = useParams()
  const courseId = params.courseId as string

  const courseActivities = activities[courseId] || []

  return (
    <div className="p-8">

      <h1 className="text-2xl font-semibold mb-6">
        {courseId?.toUpperCase()} Course
      </h1>

      {/* Activities */}

      <h2 className="text-lg mb-4">
        Coding Activities
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {courseActivities.map((act, index) => (
          <div
            key={index}
            className="p-5 border border-purple-800 rounded-lg bg-[#1A0F2E]"
          >
            {act}
          </div>
        ))}

      </div>

      {/* MCQ */}

      <h2 className="text-lg mt-10 mb-4">
        MCQ Tests
      </h2>

      <div className="p-6 border border-purple-800 rounded-lg bg-[#1A0F2E]">
        Practice MCQ for {courseId?.toUpperCase()}
      </div>

    </div>
  )
}