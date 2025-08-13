import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Search, FileText, Users, BookOpen, Gavel } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gray-200 text-gray-700 border-gray-300">
              Revolutionizing Nigeria's Legal System
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Justice Made <span className="text-gray-600">Accessible</span> for All Nigerians
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
              Bridging the gap between legal expertise and everyday Nigerians through AI-powered tools, comprehensive
              resources, and affordable legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-8 py-3 bg-white"
              >
                Find a Lawyer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Comprehensive Legal Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From legal education to AI-powered research tools, ReadyLawyer provides everything you need to navigate
              Nigeria's legal landscape with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Legal Awareness Hub</CardTitle>
                <CardDescription>
                  Easy-to-understand guides and resources on common legal issues in Nigeria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 p-0">
                  Explore Resources →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">AI Legal Research</CardTitle>
                <CardDescription>Powerful search engine for case law, statutes, and legal precedents</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 p-0">
                  Start Research →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Document Generator</CardTitle>
                <CardDescription>AI-powered tool to generate legal briefs and documents automatically</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 p-0">
                  Generate Documents →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Lawyer Directory</CardTitle>
                <CardDescription>Find and connect with verified legal professionals across Nigeria</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 p-0">
                  Find Lawyers →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Gavel className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Consultation Booking</CardTitle>
                <CardDescription>Schedule appointments with lawyers for professional legal advice</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 p-0">
                  Book Consultation →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Justice for All</CardTitle>
                <CardDescription>Special support for indigent individuals seeking legal representation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-slate-700 hover:text-slate-900 p-0">
                  Get Help →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">10,000+</div>
              <div className="text-lg text-slate-600">Registered Users</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">500+</div>
              <div className="text-lg text-slate-600">Verified Lawyers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">1,000+</div>
              <div className="text-lg text-slate-600">Cases Resolved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Legal Experience?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of Nigerians who are already using ReadyLawyer to access justice more efficiently and
            affordably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-700 hover:bg-gray-600 px-8 py-3">
              Start Your Legal Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-6 h-6 text-slate-400" />
                <span className="text-xl font-bold">ReadyLawyer</span>
              </div>
              <p className="text-slate-400">
                Revolutionizing Nigeria's legal system through technology and accessibility.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/research" className="hover:text-white">
                    Legal Research
                  </Link>
                </li>
                <li>
                  <Link href="/documents" className="hover:text-white">
                    Document Generator
                  </Link>
                </li>
                <li>
                  <Link href="/lawyers" className="hover:text-white">
                    Find Lawyers
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">
                    Legal Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ReadyLawyer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
