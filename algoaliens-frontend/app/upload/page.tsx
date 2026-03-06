"use client"

import { useState } from "react"

import {
    UploadCloud,
    Video,
    FileText,
    Send,
    FileVideo
} from "lucide-react"

export default function UploadPage() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [fileName, setFileName] = useState("")

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (file) setFileName(file.name)
    }

    return (

        <div className="max-w-3xl mx-auto py-12">

            {/* Title */}

            <h1 className="text-2xl font-semibold mb-2 flex items-center gap-2">

                <Video size={22} className="text-purple-400"/>

                Upload Explanation Video

            </h1>

            <p className="text-gray-400 mb-8">
                Record and upload a video explaining your solution for review
            </p>

            {/* Upload Card */}

            <div className="bg-[#0f0622] border border-purple-700/30 rounded-xl p-8 mb-6">

                {/* Upload Box */}

                <label className="block border border-purple-700/30 bg-[#0a0318] rounded-xl p-10 text-center cursor-pointer hover:border-purple-500 transition">

                    <div className="flex flex-col items-center gap-3">

                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-700/20">

                            <UploadCloud size={22} className="text-purple-400"/>

                        </div>

                        <p className="text-sm text-gray-300">
                            Drop your video here or click to browse
                        </p>

                        <p className="text-xs text-gray-500">
                            Supports MP4, MOV, WebM · Max 500MB
                        </p>

                        {fileName && (

                            <p className="text-xs text-purple-400 mt-2 flex items-center gap-1">

                                <FileVideo size={14}/>

                                {fileName}

                            </p>

                        )}

                    </div>

                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFile}
                        className="hidden"
                    />

                </label>


                {/* Video Title */}

                <div className="mt-6">

                    <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">

                        <Video size={14}/>

                        Video Title *

                    </label>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Two Sum Solution Explanation"
                        className="w-full bg-[#0a0318] border border-purple-700/30 rounded-lg px-4 py-3 text-sm focus:border-purple-500 outline-none"
                    />

                </div>


                {/* Description */}

                <div className="mt-6">

                    <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">

                        <FileText size={14}/>

                        Description / Notes

                    </label>

                    <textarea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Briefly describe your approach and key insights..."
                        className="w-full bg-[#0a0318] border border-purple-700/30 rounded-lg px-4 py-3 text-sm focus:border-purple-500 outline-none"
                    />

                </div>


                {/* Submit Button */}

                <button className="w-full mt-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 hover:opacity-90 transition flex items-center justify-center gap-2">

                    <Send size={18}/>

                    Submit for Review

                </button>

            </div>

        </div>

    )
}