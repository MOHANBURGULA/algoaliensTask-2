"use client"

import { useState } from "react"
import {
  User,
  Mail,
  Settings,
  Save,
  LogOut,
  Pencil
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {

  const router = useRouter()

  const [editMode,setEditMode] = useState(false)

  const [profile,setProfile] = useState({
    name:"Mohan Burgula",
    email:"mohan@email.com"
  })

  const handleChange = (e:any)=>{
    setProfile({
      ...profile,
      [e.target.name]:e.target.value
    })
  }

  const handleSave = ()=>{
    setEditMode(false)

    // Later connect to backend API
    console.log("Saved profile:",profile)
  }

  const handleLogout = ()=>{
    // later replace with real auth logout
    router.push("/signin")
  }

  return (

    <div className="max-w-3xl mx-auto">

      {/* Title */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-purple-400">
          Profile
        </h1>

        {!editMode && (
          <button
            onClick={()=>setEditMode(true)}
            className="flex items-center gap-2 bg-[#130A24] px-4 py-2 rounded-lg hover:bg-[#1c0f36]"
          >
            <Pencil size={16}/>
            Edit
          </button>
        )}

      </div>


      {/* Profile Card */}

      <div className="bg-[#0B0518] border border-purple-900/30 rounded-xl p-8 space-y-6">

        {/* Avatar */}

        <div className="flex items-center gap-6">

          <div className="w-20 h-20 rounded-full bg-[#130A24] flex items-center justify-center text-3xl text-purple-400">
            {profile.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-400">{profile.email}</p>
          </div>

        </div>


        {/* Name */}

        <div>

          <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
            <User size={16}/>
            Name
          </label>

          <input
            name="name"
            value={profile.name}
            disabled={!editMode}
            onChange={handleChange}
            className="w-full bg-[#130A24] p-3 rounded-lg outline-none border border-purple-900/30 disabled:opacity-50"
          />

        </div>


        {/* Email */}

        <div>

          <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
            <Mail size={16}/>
            Email
          </label>

          <input
            name="email"
            value={profile.email}
            disabled={!editMode}
            onChange={handleChange}
            className="w-full bg-[#130A24] p-3 rounded-lg outline-none border border-purple-900/30 disabled:opacity-50"
          />

        </div>


        {/* Save Button */}

        {editMode && (

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500"
          >
            <Save size={18}/>
            Save Changes
          </button>

        )}

      </div>


      {/* Settings Section */}

      <div className="mt-8 bg-[#0B0518] border border-purple-900/30 rounded-xl p-8">

        <h2 className="text-xl font-semibold text-purple-400 flex items-center gap-2 mb-6">
          <Settings size={18}/>
          Account Settings
        </h2>

        <div className="space-y-4">

          {/* Change Password */}

          <button className="w-full text-left bg-[#130A24] p-4 rounded-lg hover:bg-[#1c0f36] transition">
            Change Password
          </button>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3 rounded-lg"
          >
            <LogOut size={18}/>
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}