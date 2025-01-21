import Header from "@/app/components/client/Header"
import ContactForm from "@/app/components/Contactus/ContactForm"
import Footer from "@/app/components/Contactus/Footer"
import { MapPin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="min-h-screen flex flex-col bg-white text-black">
        <main className="flex-grow">
          <ContactForm />

          <div className="w-full max-w-xl p-6 mt-8 ml-auto">
            <div className="bg-blue-600 text-white rounded-lg p-8 space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <p>
                  Unit 3, 1st Floor 6/7 St Mary At Hill,
                  <br />
                  London, England, EC3R 8EE
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <a href="mailto:info@lumioai.io" className="hover:underline">
                  info@lumioai.io
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}