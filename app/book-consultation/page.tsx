"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Video, Phone, MapPin, Star, CheckCircle, CreditCard, ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"

const lawyer = {
  id: 1,
  name: "Adebayo Ogundimu",
  title: "Senior Advocate of Nigeria (SAN)",
  specializations: ["Corporate Law", "Commercial Litigation", "Mergers & Acquisitions"],
  location: "Lagos, Nigeria",
  rating: 4.9,
  reviews: 127,
  image: "/placeholder.svg?height=100&width=100",
  consultationTypes: [
    { type: "video", label: "Video Call", price: 50000, duration: 60 },
    { type: "phone", label: "Phone Call", price: 35000, duration: 45 },
    { type: "office", label: "Office Visit", price: 75000, duration: 90 },
  ],
}

const availableSlots = {
  "2024-01-20": ["09:00", "11:00", "14:00", "16:00"],
  "2024-01-21": ["10:00", "13:00", "15:00"],
  "2024-01-22": ["09:00", "11:00", "14:00", "16:00", "17:00"],
  "2024-01-23": ["10:00", "12:00", "15:00"],
  "2024-01-24": ["09:00", "11:00", "13:00", "16:00"],
}

const upcomingDates = Object.keys(availableSlots).map((date) => ({
  date,
  day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
  dayNumber: new Date(date).getDate(),
  month: new Date(date).toLocaleDateString("en-US", { month: "short" }),
}))

export default function BookConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    caseType: "",
    description: "",
    urgency: "",
  })

  const selectedConsultationType = lawyer.consultationTypes.find((type) => type.type === selectedType)
  const totalAmount = selectedConsultationType?.price || 0

  const handleBooking = () => {
    // Simulate booking process
    setTimeout(() => {
      setCurrentStep(4)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-slate-900">Book Consultation</h1>
            <p className="text-lg text-slate-600">Schedule a consultation with a legal professional</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 4 && <div className={`w-16 h-1 mx-2 ${currentStep > step ? "bg-blue-600" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Consultation Type */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 1: Choose Consultation Type</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {lawyer.consultationTypes.map((type) => (
                      <Card
                        key={type.type}
                        className={`cursor-pointer transition-all ${
                          selectedType === type.type ? "border-blue-500 bg-blue-50" : "hover:shadow-md"
                        }`}
                        onClick={() => setSelectedType(type.type)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {type.type === "video" && <Video className="w-5 h-5 text-blue-600" />}
                              {type.type === "phone" && <Phone className="w-5 h-5 text-green-600" />}
                              {type.type === "office" && <MapPin className="w-5 h-5 text-purple-600" />}
                              <div>
                                <div className="font-medium">{type.label}</div>
                                <div className="text-sm text-slate-600">{type.duration} minutes</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">₦{type.price.toLocaleString()}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Button
                      onClick={() => setCurrentStep(2)}
                      disabled={!selectedType}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Continue to Date & Time
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 2: Select Date & Time</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Date Selection */}
                    <div>
                      <Label className="text-base font-medium mb-3 block">Available Dates</Label>
                      <div className="grid grid-cols-5 gap-2">
                        {upcomingDates.map((dateInfo) => (
                          <Card
                            key={dateInfo.date}
                            className={`cursor-pointer text-center transition-all ${
                              selectedDate === dateInfo.date ? "border-blue-500 bg-blue-50" : "hover:shadow-md"
                            }`}
                            onClick={() => setSelectedDate(dateInfo.date)}
                          >
                            <CardContent className="p-3">
                              <div className="text-xs text-slate-600">{dateInfo.day}</div>
                              <div className="text-lg font-bold">{dateInfo.dayNumber}</div>
                              <div className="text-xs text-slate-600">{dateInfo.month}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div>
                        <Label className="text-base font-medium mb-3 block">Available Times</Label>
                        <div className="grid grid-cols-4 gap-2">
                          {availableSlots[selectedDate]?.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              onClick={() => setSelectedTime(time)}
                              className="bg-transparent"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={() => setCurrentStep(3)}
                        disabled={!selectedDate || !selectedTime}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        Continue to Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Personal Details */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 3: Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={bookingData.firstName}
                          onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={bookingData.lastName}
                          onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="caseType">Case Type</Label>
                        <Select
                          value={bookingData.caseType}
                          onValueChange={(value) => setBookingData({ ...bookingData, caseType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select case type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Law</SelectItem>
                            <SelectItem value="family">Family Law</SelectItem>
                            <SelectItem value="criminal">Criminal Law</SelectItem>
                            <SelectItem value="property">Property Law</SelectItem>
                            <SelectItem value="employment">Employment Law</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select
                          value={bookingData.urgency}
                          onValueChange={(value) => setBookingData({ ...bookingData, urgency: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General consultation</SelectItem>
                            <SelectItem value="medium">Medium - Time-sensitive matter</SelectItem>
                            <SelectItem value="high">High - Urgent legal issue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Case Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Please provide a brief description of your legal matter..."
                        className="min-h-[100px]"
                        value={bookingData.description}
                        onChange={(e) => setBookingData({ ...bookingData, description: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={handleBooking}
                        disabled={!bookingData.firstName || !bookingData.email || !bookingData.caseType}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Confirm & Pay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <CardTitle className="text-green-800">Consultation Booked Successfully!</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-green-700">
                      Your consultation has been confirmed. You will receive a confirmation email with meeting details
                      shortly.
                    </p>

                    <div className="bg-white p-4 rounded-lg border">
                      <h3 className="font-medium mb-2">Booking Details:</h3>
                      <div className="space-y-1 text-sm">
                        <div>
                          <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}
                        </div>
                        <div>
                          <strong>Time:</strong> {selectedTime}
                        </div>
                        <div>
                          <strong>Type:</strong> {selectedConsultationType?.label}
                        </div>
                        <div>
                          <strong>Duration:</strong> {selectedConsultationType?.duration} minutes
                        </div>
                        <div>
                          <strong>Amount Paid:</strong> ₦{totalAmount.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View My Bookings</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Book Another Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Lawyer Info */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Consultation with</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} />
                      <AvatarFallback>
                        {lawyer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{lawyer.name}</div>
                      <div className="text-sm text-slate-600">{lawyer.title}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{lawyer.rating}</span>
                        <span className="text-sm text-slate-500">({lawyer.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {lawyer.specializations.slice(0, 2).map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Booking Summary */}
              {currentStep > 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedType && (
                      <div className="flex justify-between">
                        <span>Consultation Type:</span>
                        <span className="font-medium">{selectedConsultationType?.label}</span>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                    )}
                    {selectedConsultationType && (
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{selectedConsultationType.duration} minutes</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>₦{totalAmount.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
