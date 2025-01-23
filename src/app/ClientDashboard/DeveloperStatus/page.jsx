// "use client"

// import { useState } from "react"
// import { TopNav } from "@/components/top-nav"
// import { DeveloperCard } from "@/components/developer-card"

// const developers = [
//   {
//     id: "1",
//     name: "John D. Rockefeller",
//     position: "Senior AI Engineer",
//     skills: ["React", "JavaScript", "Python"],
//     salary: "$7,500",
//     avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire2-twbrCcTE5DHQV3Vd5rfga6dSEb3yjO.png",
//     status: "HIRED",
//   },
//   {
//     id: "2",
//     name: "John D. Rockefeller",
//     position: "Senior AI Engineer",
//     skills: ["React", "JavaScript", "Python"],
//     salary: "$7,500",
//     avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire2-twbrCcTE5DHQV3Vd5rfga6dSEb3yjO.png",
//     status: "ENDED",
//   },
// ]

// export default function DeveloperStatus() {
//   const [selectedDeveloper, setSelectedDeveloper] = useState(null)

//   const handleOptions = (developer) => {
//     setSelectedDeveloper(developer)
//     // Add dropdown menu logic here
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <TopNav />
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           {developers.map((developer) => (
//             <DeveloperCard key={developer.id} {...developer} onOptionsClick={() => handleOptions(developer)} />
//           ))}
//         </div>
//       </main>
//     </div>
//   )
// }

