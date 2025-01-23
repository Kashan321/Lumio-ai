import { Nav3 } from "src/app/components/ClientDashboard/Nav3";

export default function EmptyDeveloper() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav3 />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-xl font-semibold mb-8">You haven't hired developers yet</h1>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hire3-9LtB83iDcU8sBY7wXrkzCum468Sgcv.png"
            alt="No developers illustration"
            className="w-64 h-64 mx-auto mb-8"
          />
        </div>
      </main>
    </div>
  )
}

