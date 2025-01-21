import Link from "next/link"

export default function Footer() {
  const footerSections = [
    {
      title: "AI solutions",
      links: [
        { name: "Generative AI", href: "#" },
        { name: "LLM training", href: "#" },
        { name: "AI & ML", href: "#" },
        { name: "Custom services", href: "#" },
      ],
    },
    {
      title: "On-demand talent",
      links: [
        { name: "AI engineers", href: "#" },
        { name: "Software developers", href: "#" },
        { name: "Teams of developers", href: "#" },
        { name: "Cloud services", href: "#" },
      ],
    },
    {
      title: "For Developers",
      links: [
        { name: "Apply for jobs", href: "#" },
        { name: "Help center", href: "#" },
        { name: "LumioAI certified", href: "#" },
        { name: "Build career", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "#" },
        { name: "Newsletter", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              LumioAI
            </Link>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

