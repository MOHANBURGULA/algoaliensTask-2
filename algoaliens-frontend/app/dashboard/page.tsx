"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
  BookOpen,
  Code2,
  Award,
  Flame
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis
} from "recharts"

export default function DashboardPage() {

  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {

    const completed = localStorage.getItem("profileSetup")

    if (!completed) {
      router.push("/profile-setup")
    } else {
      setChecking(false)
    }

  }, [])

  if (checking) {
    return null
  }

  const weeklyData = [
    { day: "Mon", progress: 2 },
    { day: "Tue", progress: 3 },
    { day: "Wed", progress: 2 },
    { day: "Thu", progress: 5 },
    { day: "Fri", progress: 4 },
    { day: "Sat", progress: 6 },
    { day: "Sun", progress: 3 }
  ]

  const radarData = [
    { skill: "DSA", score: 80 },
    { skill: "Python", score: 70 },
    { skill: "SQL", score: 65 },
    { skill: "Networks", score: 55 },
    { skill: "OS", score: 60 }
  ]

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back 👋
          </h1>

          <p className="text-gray-400 text-sm">
            Here is your learning progress today
          </p>
        </div>

        <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400">
          Continue Learning →
        </button>

      </div>


      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">
          <BookOpen className="text-purple-400 mb-4" size={22}/>
          <h3 className="text-2xl font-bold">5</h3>
          <p className="text-gray-400 text-sm">Courses Enrolled</p>
          <p className="text-purple-400 text-sm">3 active</p>
        </div>

        <div className="p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">
          <Code2 className="text-cyan-400 mb-4" size={22}/>
          <h3 className="text-2xl font-bold">128</h3>
          <p className="text-gray-400 text-sm">Challenges Solved</p>
          <p className="text-cyan-400 text-sm">+12 this week</p>
        </div>

        <div className="p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">
          <Award className="text-green-400 mb-4" size={22}/>
          <h3 className="text-2xl font-bold">3</h3>
          <p className="text-gray-400 text-sm">Certificates Earned</p>
          <p className="text-green-400 text-sm">1 pending</p>
        </div>

        <div className="p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">
          <Flame className="text-pink-400 mb-4" size={22}/>
          <h3 className="text-2xl font-bold">21</h3>
          <p className="text-gray-400 text-sm">Day Streak</p>
          <p className="text-pink-400 text-sm">Personal best!</p>
        </div>

      </div>


      {/* CHART SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Weekly Activity */}

        <div className="lg:col-span-2 p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">

          <h3 className="mb-6 font-semibold">
            Weekly Activity
          </h3>

          <div className="h-[280px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={weeklyData}>

                <XAxis dataKey="day" stroke="#aaa"/>

                <YAxis stroke="#aaa"/>

                <Tooltip/>

                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#a855f7"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* Skill Radar */}

        <div className="p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">

          <h3 className="mb-6 font-semibold">
            Skill Radar
          </h3>

          <div className="h-[280px]">

            <ResponsiveContainer width="100%" height="100%">

              <RadarChart data={radarData}>

                <PolarGrid />

                <PolarAngleAxis dataKey="skill" stroke="#aaa"/>

                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#a855f7"
                  fill="#a855f7"
                  fillOpacity={0.5}
                />

              </RadarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* COURSE PROGRESS */}

      <div className="p-6 rounded-xl border border-purple-900/30 bg-[#0B0518]">

        <h3 className="mb-6 font-semibold">
          Course Progress
        </h3>

        <div className="space-y-6">

          <div>
            <p className="text-sm mb-2">
              Data Structures & Algorithms
            </p>

            <div className="w-full h-2 bg-gray-800 rounded-full">
              <div className="h-2 bg-purple-500 rounded-full w-[75%]"></div>
            </div>
          </div>

          <div>
            <p className="text-sm mb-2">
              Python for DSA
            </p>

            <div className="w-full h-2 bg-gray-800 rounded-full">
              <div className="h-2 bg-cyan-400 rounded-full w-[45%]"></div>
            </div>
          </div>

          <div>
            <p className="text-sm mb-2">
              SQL Mastery
            </p>

            <div className="w-full h-2 bg-gray-800 rounded-full">
              <div className="h-2 bg-purple-400 rounded-full w-[85%]"></div>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}