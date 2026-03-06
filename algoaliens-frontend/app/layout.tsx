// "use client"

// import "./globals.css"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// import {
//   LayoutDashboard,
//   BookOpen,
//   Video,
//   FolderKanban,
//   Award
// } from "lucide-react"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {

//   const pathname = usePathname()

//   const hideSidebar =
//     pathname === "/" ||
//     pathname === "/signup" ||
//     pathname === "/signin"

//   return (

//     <html lang="en">

//       <body className="bg-[#070312] text-white">

//         <div className="flex min-h-screen">

//           {!hideSidebar && (

//             <aside className="w-64 bg-[#0B0518] border-r border-purple-900/30 p-6 hidden md:flex flex-col">

//               {/* Logo */}

//               <Link href="/">
//                 <h1 className="text-xl font-bold text-purple-400 mb-8 cursor-pointer hover:text-purple-300 transition">
//                   AlgoAliens
//                 </h1>
//               </Link>

//               {/* Sidebar Menu */}

//               <nav className="flex flex-col gap-2">

//                 <Link
//                   href="/dashboard"
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${pathname === "/dashboard"
//                       ? "bg-[#130A24] text-purple-400"
//                       : "hover:bg-[#130A24]"
//                     }`}
//                 >
//                   <LayoutDashboard size={18} />
//                   Dashboard
//                 </Link>

//                 <Link
//                   href="/courses"
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${pathname === "/courses"
//                       ? "bg-[#130A24] text-purple-400"
//                       : "hover:bg-[#130A24]"
//                     }`}
//                 >
//                   <BookOpen size={18} />
//                   Courses
//                 </Link>

//                 <Link
//                   href="/upload"
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${pathname === "/upload"
//                       ? "bg-[#130A24] text-purple-400"
//                       : "hover:bg-[#130A24]"
//                     }`}
//                 >
//                   <Video size={18} />
//                   Video Upload
//                 </Link>

//                 <Link
//                   href="/projects"
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${pathname === "/projects"
//                       ? "bg-[#130A24] text-purple-400"
//                       : "hover:bg-[#130A24]"
//                     }`}
//                 >
//                   <FolderKanban size={18} />
//                   Projects
//                 </Link>

//                 <Link
//                   href="/certificates"
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${pathname === "/certificates"
//                       ? "bg-[#130A24] text-purple-400"
//                       : "hover:bg-[#130A24]"
//                     }`}
//                 >
//                   <Award size={18} />
//                   Certificates
//                 </Link>

//               </nav>

//             </aside>

//           )}

//           {/* Page Content */}

//           <main className="flex-1 p-8">
//             {children}
//           </main>

//         </div>

//       </body>

//     </html>

//   )
// }


"use client"

import "./globals.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  BookOpen,
  Video,
  FolderKanban,
  Award
} from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const hideSidebar =
    pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/signin"

  return (

    <html lang="en">

      <body className="text-white">

        {/* GRID BACKGROUND */}
        <div className="grid-bg flex min-h-screen">

          {!hideSidebar && (

            <aside className="w-64 bg-[#0B0518] border-r border-purple-900/30 p-6 hidden md:flex flex-col">

              {/* Logo */}

              <Link href="/">
                <h1 className="text-xl font-bold text-purple-400 mb-8 cursor-pointer hover:text-purple-300 transition">
                  AlgoAliens
                </h1>
              </Link>

              {/* Sidebar Menu */}

              <nav className="flex flex-col gap-2">

                <Link
                  href="/dashboard"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    pathname === "/dashboard"
                      ? "bg-[#130A24] text-purple-400"
                      : "hover:bg-[#130A24]"
                  }`}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                <Link
                  href="/courses"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    pathname === "/courses"
                      ? "bg-[#130A24] text-purple-400"
                      : "hover:bg-[#130A24]"
                  }`}
                >
                  <BookOpen size={18} />
                  Courses
                </Link>

                <Link
                  href="/upload"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    pathname === "/upload"
                      ? "bg-[#130A24] text-purple-400"
                      : "hover:bg-[#130A24]"
                  }`}
                >
                  <Video size={18} />
                  Video Upload
                </Link>

                <Link
                  href="/projects"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    pathname === "/projects"
                      ? "bg-[#130A24] text-purple-400"
                      : "hover:bg-[#130A24]"
                  }`}
                >
                  <FolderKanban size={18} />
                  Projects
                </Link>

                <Link
                  href="/certificates"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    pathname === "/certificates"
                      ? "bg-[#130A24] text-purple-400"
                      : "hover:bg-[#130A24]"
                  }`}
                >
                  <Award size={18} />
                  Certificates
                </Link>

              </nav>

            </aside>

          )}

          {/* PAGE CONTENT */}

          <main className="flex-1 p-8">
            {children}
          </main>

        </div>

      </body>

    </html>

  )
}