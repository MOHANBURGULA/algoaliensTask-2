export default function Dashboard() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-[#1A0F2E] p-6 rounded-xl">
          Courses Enrolled
          <h2 className="text-xl mt-2">5</h2>
        </div>

        <div className="bg-[#1A0F2E] p-6 rounded-xl">
          Challenges Solved
          <h2 className="text-xl mt-2">128</h2>
        </div>

        <div className="bg-[#1A0F2E] p-6 rounded-xl">
          Certificates
          <h2 className="text-xl mt-2">3</h2>
        </div>

        <div className="bg-[#1A0F2E] p-6 rounded-xl">
          Streak
          <h2 className="text-xl mt-2">21 days</h2>
        </div>

      </div>

    </div>
  )
}