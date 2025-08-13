"use client"

import { CardDescription } from "@/components/ui/card"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  Wand2,
  Download,
  Eye,
  Copy,
  Save,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react"
import { Header } from "@/components/header"

const documentTypes = [
  {
    id: "brief",
    title: "Legal Brief",
    description: "Court briefs, motions, and legal arguments",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    templates: ["Motion to Dismiss", "Appeal Brief", "Summary Judgment Motion"],
  },
  {
    id: "contract",
    title: "Contract",
    description: "Business agreements and legal contracts",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    templates: ["Service Agreement", "Employment Contract", "NDA"],
  },
  {
    id: "letter",
    title: "Legal Letter",
    description: "Demand letters and legal correspondence",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
    templates: ["Demand Letter", "Cease and Desist", "Legal Notice"],
  },
  {
    id: "pleading",
    title: "Court Pleading",
    description: "Complaints, answers, and court filings",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
    templates: ["Complaint", "Answer", "Counterclaim"],
  },
]

const recentDocuments = [
  {
    title: "Employment Contract - Tech Startup",
    type: "Contract",
    date: "2024-01-15",
    status: "completed",
  },
  {
    title: "Motion to Dismiss - Civil Case",
    type: "Legal Brief",
    date: "2024-01-12",
    status: "draft",
  },
  {
    title: "Demand Letter - Breach of Contract",
    type: "Legal Letter",
    date: "2024-01-10",
    status: "completed",
  },
]

export default function DocumentsPage() {
  const [selectedType, setSelectedType] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    parties: "",
    jurisdiction: "",
    caseNumber: "",
    description: "",
    keyPoints: "",
  })

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setCurrentStep(3)
    }, 3000)
  }

  const generatedDocument = `
MOTION TO DISMISS

IN THE HIGH COURT OF LAGOS STATE
IN THE LAGOS JUDICIAL DIVISION
HOLDEN AT IKEJA

BETWEEN:

JOHN ADEBAYO                                                    PLAINTIFF
AND
LAGOS STATE GOVERNMENT                                          DEFENDANT

SUIT NO: LD/123/2024

MOTION TO DISMISS FOR LACK OF JURISDICTION

TO THE HONOURABLE COURT:

The Defendant, through the undersigned counsel, respectfully moves this Honourable Court for an order dismissing the Plaintiff's action for lack of jurisdiction, and in support thereof, states as follows:

1. BACKGROUND
The Plaintiff filed this action seeking damages for alleged breach of contract. However, upon careful examination of the pleadings and the nature of the dispute, it is clear that this Honourable Court lacks jurisdiction to entertain this matter.

2. GROUNDS FOR DISMISSAL
a) The contract in question contains a specific arbitration clause requiring all disputes to be resolved through arbitration.
b) The Plaintiff has failed to exhaust the mandatory arbitration process as required by the contract.
c) This Court lacks jurisdiction to hear matters that are subject to mandatory arbitration under the Arbitration and Conciliation Act.

3. LEGAL AUTHORITIES
The following authorities support this application:
- Section 4 of the Arbitration and Conciliation Act, Cap A18 LFN 2004
- MRS Oil & Gas Co. Ltd v. Addax Petroleum Development (Nig.) Ltd (2018) LPELR-45234(SC)

4. PRAYER
WHEREFORE, the Defendant respectfully prays this Honourable Court to:
a) Dismiss the Plaintiff's action for lack of jurisdiction;
b) Award costs in favor of the Defendant;
c) Make such other orders as this Honourable Court may deem fit.

DATED this _____ day of _______, 2024.

_________________________
[Counsel's Name]
[Bar Number]
Counsel for the Defendant
  `

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5" />
                  Recent Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDocuments.map((doc, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                      <div className="font-medium text-sm">{doc.title}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        {doc.type} • {doc.date}
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        {doc.status === "completed" ? (
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        ) : (
                          <AlertCircle className="w-3 h-3 text-orange-500" />
                        )}
                        <span className="text-xs capitalize">{doc.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Wand2 className="w-6 h-6 text-purple-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">AI Document Generator</h1>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Create professional legal documents with AI assistance in minutes
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${currentStep > step ? "bg-blue-600" : "bg-slate-200"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Choose Document Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {documentTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <Card
                          key={type.id}
                          className={`cursor-pointer transition-all ${
                            selectedType === type.id ? "border-blue-500 bg-blue-50" : "hover:shadow-md"
                          }`}
                          onClick={() => setSelectedType(type.id)}
                        >
                          <CardHeader>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${type.color}`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg">{type.title}</CardTitle>
                            <CardDescription>{type.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-1">
                              {type.templates.slice(0, 2).map((template, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {template}
                                </Badge>
                              ))}
                              {type.templates.length > 2 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{type.templates.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  {selectedType && (
                    <div className="space-y-4">
                      <Separator />
                      <div>
                        <Label className="text-base font-medium mb-3 block">Choose Template</Label>
                        <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a template" />
                          </SelectTrigger>
                          <SelectContent>
                            {documentTypes
                              .find((type) => type.id === selectedType)
                              ?.templates.map((template) => (
                                <SelectItem key={template} value={template}>
                                  {template}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        onClick={() => setCurrentStep(2)}
                        disabled={!selectedTemplate}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Continue to Details
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Document Details</CardTitle>
                  <p className="text-sm text-slate-600">
                    Provide the information needed to generate your {selectedTemplate}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Document Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter document title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="jurisdiction">Jurisdiction</Label>
                      <Select
                        value={formData.jurisdiction}
                        onValueChange={(value) => setFormData({ ...formData, jurisdiction: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select jurisdiction" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="federal">Federal High Court</SelectItem>
                          <SelectItem value="lagos">Lagos State High Court</SelectItem>
                          <SelectItem value="abuja">FCT High Court</SelectItem>
                          <SelectItem value="kano">Kano State High Court</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parties">Parties Involved</Label>
                      <Input
                        id="parties"
                        placeholder="Plaintiff vs Defendant"
                        value={formData.parties}
                        onChange={(e) => setFormData({ ...formData, parties: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="caseNumber">Case Number (if applicable)</Label>
                      <Input
                        id="caseNumber"
                        placeholder="e.g., LD/123/2024"
                        value={formData.caseNumber}
                        onChange={(e) => setFormData({ ...formData, caseNumber: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Case Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a brief description of the case or matter"
                      className="min-h-[100px]"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="keyPoints">Key Legal Points</Label>
                    <Textarea
                      id="keyPoints"
                      placeholder="List the main legal arguments or points to be addressed"
                      className="min-h-[100px]"
                      value={formData.keyPoints}
                      onChange={(e) => setFormData({ ...formData, keyPoints: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating || !formData.title || !formData.description}
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      {isGenerating ? (
                        <>
                          <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Generate Document
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Document Generated Successfully
                    </CardTitle>
                    <p className="text-sm text-slate-600">
                      Your {selectedTemplate} has been generated. Review and customize as needed.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-6">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Text
                      </Button>
                      <Button variant="outline">
                        <Save className="w-4 h-4 mr-2" />
                        Save Draft
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Generated Document</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-50 p-6 rounded-lg border">
                      <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">{generatedDocument}</pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button
                    onClick={() => {
                      setCurrentStep(1)
                      setSelectedType("")
                      setSelectedTemplate("")
                      setFormData({
                        title: "",
                        parties: "",
                        jurisdiction: "",
                        caseNumber: "",
                        description: "",
                        keyPoints: "",
                      })
                    }}
                    variant="outline"
                  >
                    Generate Another Document
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
