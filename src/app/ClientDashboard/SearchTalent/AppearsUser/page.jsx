import { DevCard } from "@/app/components/ClientDashboard/DevCard";

export default function AppearsUser() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="mb-8 text-center text-xl font-semibold text-gray-900">
          Design for developer&apos;s tab when it appears in &quot;Search talent&quot; page
        </h1>
        <DevCard
          name="J.D."
          title="Senior AI Engineer"
          experience="5+ years of experience"
          location="United States"
          rate="$7,500 mo."
          verified={true}
          expertise={[
            { icon: "💻", label: "JavaScript" },
            { icon: "🐍", label: "Python" },
            { icon: "⚛️", label: "React" },
          ]}
          avatarUrl={"/assets"}
        />
      </div>
    </div>
  )
}

