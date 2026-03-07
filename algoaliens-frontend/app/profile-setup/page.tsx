"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfileSetup() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    experienceLevel: "",
    interest: "",
    goal: "",
  })

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const isComplete =
    formData.experienceLevel &&
    formData.interest &&
    formData.goal

  const handleSubmit = () => {

    console.log("Profile Setup Data:", formData)

    // Save onboarding completion
    localStorage.setItem("profileSetup", "true")

    router.push("/dashboard")

  }

  const Option = ({
    label,
    selected,
    onClick,
  }: {
    label: string
    selected: boolean
    onClick: () => void
  }) => (
    <button
      onClick={onClick}
      className={`w-full p-3 rounded-lg border transition 
      ${
        selected
          ? "border-purple-500 bg-purple-500/20"
          : "border-white/10 hover:border-purple-400"
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070012] text-white px-4">

      <div className="w-full max-w-xl bg-[#0d001f] border border-white/10 rounded-xl p-8 space-y-6">

        <h1 className="text-2xl font-bold text-center text-purple-400">
          Welcome to AlgoAliens 🚀
        </h1>

        <p className="text-center text-white/60 text-sm">
          Help us personalize your learning experience.
        </p>

        {/* Question 1 */}

        <div className="space-y-2">

          <p className="text-sm font-semibold">
            How experienced are you in coding?
          </p>

          <div className="grid grid-cols-3 gap-2">

            {["Beginner", "Intermediate", "Advanced"].map((opt) => (

              <Option
                key={opt}
                label={opt}
                selected={formData.experienceLevel === opt}
                onClick={() => handleSelect("experienceLevel", opt)}
              />

            ))}

          </div>

        </div>


        {/* Question 2 */}

        <div className="space-y-2">

          <p className="text-sm font-semibold">
            What do you want to learn most?
          </p>

          <div className="grid grid-cols-2 gap-2">

            {[
              "Data Structures & Algorithms",
              "Web Development",
              "AI / Machine Learning",
              "Cloud Computing",
            ].map((opt) => (

              <Option
                key={opt}
                label={opt}
                selected={formData.interest === opt}
                onClick={() => handleSelect("interest", opt)}
              />

            ))}

          </div>

        </div>


        {/* Question 3 */}

        <div className="space-y-2">

          <p className="text-sm font-semibold">
            What is your main goal?
          </p>

          <div className="grid grid-cols-2 gap-2">

            {[
              "Crack placements",
              "Build projects",
              "Improve coding skills",
              "Explore new technologies",
            ].map((opt) => (

              <Option
                key={opt}
                label={opt}
                selected={formData.goal === opt}
                onClick={() => handleSelect("goal", opt)}
              />

            ))}

          </div>

        </div>


        {/* Submit Button */}

        <button
          disabled={!isComplete}
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg font-semibold transition
          ${
            isComplete
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          Complete Setup
        </button>

      </div>

    </div>
  )
}