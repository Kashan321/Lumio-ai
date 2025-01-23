import FileUpload from "@/app/components/developer/FileUpload";
import ManualEntry from "@/app/components/developer/ManualEntry";
import Navbar from "@/app/components/developer/Navbar";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-black decoration-sky-400">Welcome to LumioAI, John!</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex items-stretch h-80">
            <FileUpload />
          </div>
          <div className="border-l-2 border-gray-300"></div>
          <div className="flex-1 flex items-stretch h-80">
            <ManualEntry />
          </div>
        </div>
      </main>
    </div>
  )
}