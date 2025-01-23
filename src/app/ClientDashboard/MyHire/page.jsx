"use client"

import { CandidateCard } from "@/app/components/ClientDashboard/CandidateCard"
import { useState } from "react"

const candidates = [
  {
    id: "1",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire-tRjtYxytgGGn3GQXEe7nMlsFroWSmV.png",
  },
  {
    id: "2",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire-tRjtYxytgGGn3GQXEe7nMlsFroWSmV.png",
  },
  {
    id: "3",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire-tRjtYxytgGGn3GQXEe7nMlsFroWSmV.png",
  },
  {
    id: "4",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire-tRjtYxytgGGn3GQXEe7nMlsFroWSmV.png",
  },
]

export default function MyHire() {
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            name={candidate.name}
            position={candidate.position}
            skills={candidate.skills}
            salary={candidate.salary}
            avatar={candidate.avatar}
          />
        ))}
      </div>
    </div>
  )
}