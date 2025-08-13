"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-slate-900">ReadyLawyer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/resources" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Legal Resources
            </Link>
            <Link href="/research" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              AI Research
            </Link>
            <Link href="/documents" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Document Generator
            </Link>
            <Link href="/lawyers" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              Find Lawyers
            </Link>
            <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 font-medium">
              About
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/signin">
              <Button variant="ghost" className="text-sm text-slate-600 hover:text-slate-900">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="text-sm bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-3">
            <nav className="flex flex-col gap-3">
              <Link
                href="/resources"
                className="text-sm text-slate-600 hover:text-slate-900 font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Legal Resources
              </Link>
              <Link
                href="/research"
                className="text-sm text-slate-600 hover:text-slate-900 font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Research
              </Link>
              <Link
                href="/documents"
                className="text-sm text-slate-600 hover:text-slate-900 font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Document Generator
              </Link>
              <Link
                href="/lawyers"
                className="text-sm text-slate-600 hover:text-slate-900 font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Lawyers
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-600 hover:text-slate-900 font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col gap-2 pt-3 border-t border-slate-200">
                <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="text-sm justify-start text-slate-600 hover:text-slate-900 w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="text-sm bg-blue-600 hover:bg-blue-700 text-white w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
