"use client"

import { Link } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default function SignupPage() {

  const router = useRouter()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [acceptedTerms,setAcceptedTerms] = useState(false)

  const handleSignup = (e:any) => {

    e.preventDefault()

    if(!name || !email || !password || !confirmPassword){
      toast.error("Please fill all fields")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
      toast.error("Enter a valid email")
      return
    }

    if(password.length < 6){
      toast.error("Password must be at least 6 characters")
      return
    }

    if(password !== confirmPassword){
      toast.error("Passwords do not match")
      return
    }

    if(!acceptedTerms){
      toast.error("Please accept Terms and Privacy Policy")
      return
    }

    toast.success("Account created successfully!")

    localStorage.setItem(
  "algo_user",
  JSON.stringify({ name, email, password })
)

    setTimeout(()=>{
      router.push("/dashboard")
    },1200)

  }

  return (

    <div className="min-h-screen flex bg-[#0A0A0F]">

     {/* LEFT SIDE */}
<div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden">

  {/* Base gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-[#0A0A0F]"></div>

  {/* Soft grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px]"></div>

  {/* Soft ambient glow (static) */}
  <div className="absolute w-[420px] h-[420px] bg-purple-500/20 blur-[120px] rounded-full top-1/3 left-1/3"></div>

  <div className="absolute w-[320px] h-[320px] bg-cyan-500/15 blur-[110px] rounded-full bottom-1/4 right-1/4"></div>

  {/* Content */}
  <div className="relative z-10 max-w-md px-12 text-white">

    <div className="flex items-center gap-3 mb-6">

      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center shadow-md">
        🎓
      </div>

      <h2 className="text-lg font-semibold">
        AlgoAliens
      </h2>

    </div>

    <h1 className="text-4xl font-bold mb-4 leading-tight">
      Start your journey
    </h1>

    <p className="text-purple-200/80 leading-relaxed">
      Join thousands of developers who verify their skills
      and earn trusted certificates.
    </p>

    {/* Stats */}
    <div className="mt-8 flex gap-6">

      <div>
        <p className="text-2xl font-bold">10k+</p>
        <p className="text-sm text-purple-200/60">Developers</p>
      </div>

      <div>
        <p className="text-2xl font-bold">500+</p>
        <p className="text-sm text-purple-200/60">Companies</p>
      </div>

    </div>

  </div>

</div>


      {/* RIGHT SIDE - Enhanced form styling */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-16 bg-gradient-to-br from-[#0A0A0F] to-[#1A0F2E]">

        <form
          onSubmit={handleSignup}
          className="w-full max-w-md transform transition-all duration-500 hover:scale-[1.02]"
        >

          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Create an account
          </h2>

          <p className="text-gray-400 mb-8">
            Get started with AlgoAliens for free
          </p>


          {/* GOOGLE BUTTON - Enhanced */}

          <button
            type="button"
            className="w-full mb-6 py-3.5 rounded-xl border border-purple-700 hover:bg-purple-900/50 transition-all duration-300 flex items-center justify-center gap-3 group hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              Continue with Google
            </span>
          </button>


          <div className="flex items-center my-6 text-gray-500">
            <div className="flex-1 border-b border-purple-800/30"></div>
            <span className="px-4 text-sm text-purple-400">OR</span>
            <div className="flex-1 border-b border-purple-800/30"></div>
          </div>


          {/* FULL NAME - Enhanced input fields */}

          <div className="space-y-2">
            <label className="text-sm text-purple-400 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3.5 rounded-xl bg-[#1A0F2E] border border-purple-800/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-500"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>


          {/* EMAIL */}

          <div className="space-y-2 mt-4">
            <label className="text-sm text-purple-400 ml-1">Email</label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full p-3.5 rounded-xl bg-[#1A0F2E] border border-purple-800/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>


          {/* PASSWORD */}

          <div className="space-y-2 mt-4">
            <label className="text-sm text-purple-400 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              minLength={6}
              className="w-full p-3.5 rounded-xl bg-[#1A0F2E] border border-purple-800/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="text-xs text-gray-500 ml-1">Minimum 6 characters</p>
          </div>


          {/* CONFIRM PASSWORD */}

          <div className="space-y-2 mt-4">
            <label className="text-sm text-purple-400 ml-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3.5 rounded-xl bg-[#1A0F2E] border border-purple-800/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-500"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>


          {/* TERMS - Enhanced checkbox */}

          <div className="flex items-center gap-3 text-sm text-gray-400 my-6">
            <div className="relative">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e)=>setAcceptedTerms(e.target.checked)}
                className="peer appearance-none w-5 h-5 border-2 border-purple-700 rounded-md bg-[#1A0F2E] checked:bg-purple-500 checked:border-purple-500 transition-all duration-300 cursor-pointer"
              />
              <svg 
                className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>
              I agree to the <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Terms</a> and <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</a>
            </span>
          </div>


          {/* SUBMIT - Enhanced button */}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>


          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{' '}
            <button 
              type="button"
              onClick={() => router.push('/signin')}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
             <Link href="/signin">Sign in</Link>
            </button>
          </p>

        </form>

      </div>

    </div>
  )
}