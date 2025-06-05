"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Settings, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
}

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "People", href: "/people" },
    { name: "Hiring", href: "/hiring" },
    { name: "Salary", href: "/salary" },
    { name: "Reviews", href: "/reviews" },
  ]

  const getActiveItem = () => {
    const currentItem = navItems.find((item) => pathname === item.href)
    return currentItem?.name || "Dashboard"
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="w-full px-4 py-2 mb-4">
      <nav className="relative flex items-center justify-between w-full px-6 py-2 bg-[#4a90e2] rounded-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center">
            <div className="text-white font-bold text-xl">
              <span className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                GIGFLOWW
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-1 flex-1 mx-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                pathname === item.href ? "bg-white text-[#4a90e2]" : "text-white hover:bg-white/10",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
            <Settings size={20} />
          </button>
          <div className="relative">
            <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </div>
          <div
            className="h-8 w-8 rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/ai_person.jpeg?height=32&width=32')" }}
          ></div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white rounded-lg shadow-lg z-50 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href ? "bg-[#4a90e2] text-white" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
