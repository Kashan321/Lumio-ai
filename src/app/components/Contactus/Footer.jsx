import Link from "next/link";

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
  ];

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
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

        {/* Divider Line */}
        <div className="my-4 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 LumioAI</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Sitemap</Link>
            <Link href="#" className="hover:text-white">Terms & conditions</Link>
            <Link href="#" className="hover:text-white">Language policy</Link>
            <Link href="#" className="hover:text-white">Cookie policy</Link>
            <Link href="#" className="hover:text-white">Privacy policy</Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.643 4.937a9.728 9.728 0 01-2.828.775 4.934 4.934 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.389 4.482A13.978 13.978 0 011.671 3.149a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.214 2.188 4.1a4.904 4.904 0 01-2.228-.616v.061a4.925 4.925 0 003.946 4.829 4.996 4.996 0 01-2.22.084 4.937 4.937 0 004.604 3.42A9.873 9.873 0 010 19.539a13.965 13.965 0 007.548 2.211c9.142 0 14.307-7.721 14.307-14.417 0-.219-.004-.438-.013-.653A10.2 10.2 0 0024 4.548a9.72 9.72 0 01-2.357.648z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.8 20h-2.4v-10h2.4v10zm-1.2-11.4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm13.8 11.4h-2.4v-5.4c0-1.3-.5-2.2-1.6-2.2-.9 0-1.3.6-1.5 1.2-.1.2-.1.4-.1.7v5.7h-2.4v-10h2.4v1.4c.3-.5.9-1.2 2.2-1.2 1.6 0 2.8 1.1 2.8 3.5v6.3z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
