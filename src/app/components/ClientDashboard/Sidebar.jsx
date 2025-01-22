"use client"
import React from "react"
import { LayoutDashboard, Search, Users, Wallet, Settings } from "lucide-react"
import { usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Search talent",
    icon: Search,
    href: "/search",
  },
  {
    title: "My hires",
    icon: Users,
    href: "/hires",
  },
  {
    title: "Payroll",
    icon: Wallet,
    href: "/payroll",
  },
  {
    title: "Options",
    icon: Settings,
    href: "/options",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-56 border-r bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-black">LumioAI</span>
          </link>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <nav className="flex flex-1 flex-col gap-2">
            {sidebarItems.map((item) => (
              <link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </link>
            ))}
          </nav>
          <div className="border-t pt-4">
            <div className="flex flex-col gap-2">
              <button className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Support
              </button>
              <button className="text-sm font-medium text-blue-600 hover:underline">See FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

