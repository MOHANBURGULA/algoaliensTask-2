"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import Link from "next/link"

export default function SigninPage() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSignin = (e:any) => {

    e.preventDefault()

    const storedUser = localStorage.getItem("algo_user")

    if(!storedUser){
      toast.error("No account found. Please signup.")
      return
    }

    const user = JSON.parse(storedUser)

    if(email === user.email && password === user.password){

      toast.success("Login successful!")

      setTimeout(()=>{
        router.push("/dashboard")
      },1000)

    } else {
      toast.error("Invalid email or password")
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0F] text-white">

      <form
        onSubmit={handleSignin}
        className="w-full max-w-md bg-[#1A0F2E] p-8 rounded-xl border border-purple-900/40"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#0A0A0F] border border-purple-700"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#0A0A0F] border border-purple-700"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400"
          >
            Sign In
          </button>

        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-purple-400">
            Create account
          </Link>
        </p>

      </form>

    </div>
  )
}