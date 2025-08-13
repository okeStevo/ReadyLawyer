"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  MapPin,
  Star,
  Phone,
  Mail,
  Calendar,
  Users,
  Award,
  Heart,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { Header } from "@/components/header"

const lawyers = [
  {
    id: 1,
    name: "Adebayo Ogundimu",
    title: "Senior Advocate of Nigeria (SAN)",
    specializations: ["Corporate Law", "Commercial Litigation", "Mergers & Acquisitions"],
    location: "Lagos, Nigeria",
    experience: 15,
    rating: 4.9,
    reviews: 127,
    hourlyRate: "₦50,000 - ₦100,000",
    availability: "Available",
    proBono: false,
    image: "/placeholder.svg?height=100&width=100",
    education: "University of Lagos (LL.B), Nigerian Law School",
    barAdmission: "2009",
    languages: ["English", "Yoruba"],
    description:
      "Experienced corporate lawyer with extensive expertise in commercial transactions and dispute resolution. Successfully handled over 200 corporate deals worth billions of naira.",
  },
  {
    id: 2,
    name: "Fatima Abdullahi",
    title: "Barrister & Solicitor",
    specializations: ["Family Law", "Human Rights", "Criminal Defense"],
    location: "Abuja, Nigeria",
    experience: 8,
    rating: 4.8,
    reviews: 89,
    hourlyRate: "₦25,000 - ₦50,000",
    availability: "Available",
    proBono: true,
    image: "/placeholder.svg?height=100&width=100",
    education: "Ahmadu Bello University (LL.B), Nigerian Law School",
    barAdmission: "2016",
    languages: ["English", "Hausa", "Arabic"],
    description:
      "Passionate advocate for human rights and family law matters. Dedicated to providing accessible legal services and pro bono representation for indigent clients.",
  },
  {
    id: 3,
    name: "Chukwuemeka Okafor",
    title: "Barrister & Solicitor",
    specializations: ["Real Estate Law", "Property Disputes", "Land Law"],
    location: "Port Harcourt, Nigeria",
    experience: 12,
    rating: 4.7,
    reviews: 156,
    hourlyRate: "₦30,000 - ₦60,000",
    availability: "Busy",
    proBono: false,
    image: "/placeholder.svg?height=100&width=100",
    education: "University of Nigeria, Nsukka (LL.B), Nigerian Law School",
    barAdmission: "2012",
    languages: ["English", "Igbo"],
    description:
      "Specialist in real estate transactions and property law with deep knowledge of land acquisition processes across Nigeria. Trusted advisor to major real estate developers.",
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    title: "Barrister & Solicitor",
    specializations: ["Employment Law", "Labor Relations", "Immigration Law"],
    location: "Kano, Nigeria",
    experience: 6,
    rating: 4.6,
    reviews: 73,
    hourlyRate: "₦20,000 - ₦40,000",
    availability: "Available",
    proBono: true,
    image: "/placeholder.svg?height=100&width=100",
    education: "Bayero University (LL.B), Nigerian Law School",
    barAdmission: "2018",
    languages: ["English", "Hausa", "French"],
    description:
      "Employment law specialist helping both employers and employees navigate workplace issues. Strong advocate for workers' rights and fair employment practices.",
  },
  {
    id: 5,
    name: "Olumide Adeyemi",
    title: "Senior Advocate of Nigeria (SAN)",
    specializations: ["Constitutional Law", "Public Interest Litigation", "Administrative Law"],
    location: "Lagos, Nigeria",
    experience: 20,
    rating: 4.9,
    reviews: 203,
    hourlyRate: "₦75,000 - ₦150,000",
    availability: "Limited",
    proBono: true,
    image: "/placeholder.svg?height=100&width=100",
    education: "University of Ibadan (LL.B), Harvard Law School (LL.M)",
    barAdmission: "2004",
    languages: ["English", "Yoruba"],
    description:
      "Constitutional law expert and human rights advocate. Leading voice in public interest litigation with numerous landmark cases before the Supreme Court of Nigeria.",
  },
  {
    id: 6,
    name: "Grace Okwu",
    title: "Barrister & Solicitor",
    specializations: ["Intellectual Property", "Technology Law", "Entertainment Law"],
    location: "Lagos, Nigeria",
    experience: 9,
    rating: 4.8,
    reviews: 94,
    hourlyRate: "₦35,000 - ₦70,000",
    availability: "Available",
    proBono: false,
    image: "/placeholder.svg?height=100&width=100",
    education: "University of Lagos (LL.B), London School of Economics (LL.M)",
    barAdmission: "2015",
    languages: ["English", "Igbo"],
    description:
      "Tech-savvy lawyer specializing in intellectual property and digital rights. Helping startups and creative professionals protect their innovations and artistic works.",
  },
]

const specializations = [
  "All Specializations",
  "Corporate Law",
  "Family Law",
  "Criminal Law",
  "Real Estate Law",
  "Employment Law",
  "Constitutional Law",
  "Intellectual Property",
  "Immigration Law",
  "Tax Law",
]

const locations = ["All Locations", "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Kaduna"]

export default function LawyersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [showProBonoOnly, setShowProBonoOnly] = useState(false)
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null)

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch =
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.specializations.some((spec) => spec.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesSpecialization =
      selectedSpecialization === "All Specializations" || lawyer.specializations.includes(selectedSpecialization)
    const matchesLocation = selectedLocation === "All Locations" || lawyer.location.includes(selectedLocation)
    const matchesProBono = !showProBonoOnly || lawyer.proBono

    return matchesSearch && matchesSpecialization && matchesLocation && matchesProBono
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Find Legal Professionals</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect with verified lawyers across Nigeria. Find the right legal expertise for your needs.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search lawyers or specializations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant={showProBonoOnly ? "default" : "outline"}
                onClick={() => setShowProBonoOnly(!showProBonoOnly)}
                className="flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Pro Bono Only
              </Button>
            </div>
            <div className="text-sm text-slate-600">
              Showing {filteredLawyers.length} of {lawyers.length} lawyers
            </div>
          </CardContent>
        </Card>

        {/* Lawyers Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredLawyers.map((lawyer) => (
            <Card key={lawyer.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} />
                    <AvatarFallback>
                      {lawyer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{lawyer.name}</CardTitle>
                    <p className="text-sm text-slate-600 mb-2">{lawyer.title}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{lawyer.rating}</span>
                        <span className="text-sm text-slate-500">({lawyer.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      {lawyer.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={lawyer.availability === "Available" ? "default" : "secondary"}
                      className={
                        lawyer.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : lawyer.availability === "Busy"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                      }
                    >
                      {lawyer.availability}
                    </Badge>
                    {lawyer.proBono && (
                      <Badge className="mt-1 bg-pink-100 text-pink-700 block">
                        <Heart className="w-3 h-3 mr-1" />
                        Pro Bono
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {lawyer.specializations.slice(0, 2).map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                      {lawyer.specializations.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{lawyer.specializations.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span>{lawyer.experience} years</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-slate-400" />
                      <span>Since {lawyer.barAdmission}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-2">{lawyer.description}</p>

                  <div className="text-sm font-medium text-slate-900">Consultation: {lawyer.hourlyRate}</div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => setSelectedLawyer(lawyer.id)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No lawyers found</h3>
            <p className="text-slate-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Featured Lawyers Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Featured Legal Professionals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-700">Senior Advocate</Badge>
                </div>
                <CardTitle>Looking for Senior Advocates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Connect with Nigeria's most experienced Senior Advocates of Nigeria (SAN) for complex legal matters.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  View All SANs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-100">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  <Badge className="bg-pink-100 text-pink-700">Pro Bono</Badge>
                </div>
                <CardTitle>Need Free Legal Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Find lawyers offering pro bono services for those who cannot afford legal representation.
                </p>
                <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent">
                  Find Pro Bono Lawyers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
