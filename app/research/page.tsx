"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, Scale, FileText, Star, Download, Copy, Bookmark, History, Brain, Zap } from "lucide-react"
import { Header } from "@/components/header"

const searchResults = [
  {
    id: 1,
    title: "Okonkwo v. Attorney General of Lagos State",
    court: "Supreme Court of Nigeria",
    year: "2019",
    citation: "[2019] LPELR-47892(SC)",
    relevanceScore: 95,
    summary:
      "This landmark case established the principle that fundamental rights under the Constitution cannot be derogated from during states of emergency without following due process...",
    keyPoints: ["Fundamental Rights", "Due Process", "State of Emergency"],
    type: "case",
  },
  {
    id: 2,
    title: "Constitution of the Federal Republic of Nigeria, 1999",
    section: "Section 36 - Right to Fair Hearing",
    year: "1999",
    citation: "Cap C23 LFN 2004",
    relevanceScore: 88,
    summary:
      "Every person shall be entitled to a fair hearing within a reasonable time by a court or other tribunal established by law...",
    keyPoints: ["Fair Hearing", "Due Process", "Constitutional Rights"],
    type: "statute",
  },
  {
    id: 3,
    title: "Adebayo v. Ekiti State Government",
    court: "Court of Appeal",
    year: "2021",
    citation: "[2021] LPELR-55234(CA)",
    relevanceScore: 82,
    summary:
      "The court held that procedural fairness requires that parties be given adequate notice and opportunity to be heard before adverse decisions are made...",
    keyPoints: ["Procedural Fairness", "Natural Justice", "Administrative Law"],
    type: "case",
  },
]

const recentSearches = [
  "fundamental rights enforcement",
  "contract breach remedies",
  "criminal procedure act",
  "land use act provisions",
  "company law regulations",
]

const savedResearches = [
  {
    title: "Constitutional Law Research",
    date: "2024-01-15",
    cases: 12,
    statutes: 5,
  },
  {
    title: "Contract Disputes Analysis",
    date: "2024-01-10",
    cases: 8,
    statutes: 3,
  },
]

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMode, setSearchMode] = useState("all")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="w-5 h-5" />
                  Search Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search In</label>
                  <Select value={searchMode} onValueChange={setSearchMode}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sources</SelectItem>
                      <SelectItem value="cases">Cases Only</SelectItem>
                      <SelectItem value="statutes">Statutes Only</SelectItem>
                      <SelectItem value="regulations">Regulations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Jurisdiction</label>
                  <Select defaultValue="nigeria">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nigeria">Nigeria (Federal)</SelectItem>
                      <SelectItem value="lagos">Lagos State</SelectItem>
                      <SelectItem value="abuja">FCT Abuja</SelectItem>
                      <SelectItem value="kano">Kano State</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Date Range</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="recent">Last 5 Years</SelectItem>
                      <SelectItem value="decade">Last 10 Years</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Court Level</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courts</SelectItem>
                      <SelectItem value="supreme">Supreme Court</SelectItem>
                      <SelectItem value="appeal">Court of Appeal</SelectItem>
                      <SelectItem value="high">High Court</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Recent Searches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <History className="w-5 h-5" />
                  Recent Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="text-sm text-slate-600 hover:text-blue-600 block w-full text-left p-2 rounded hover:bg-slate-50"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Saved Research */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bookmark className="w-5 h-5" />
                  Saved Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {savedResearches.map((research, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                      <div className="font-medium text-sm">{research.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{research.date}</div>
                      <div className="text-xs text-slate-600 mt-1">
                        {research.cases} cases, {research.statutes} statutes
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">AI Legal Research Assistant</h1>
              </div>
              <p className="text-lg text-slate-600 mb-8">
                Powered by advanced AI to help you find relevant case law, statutes, and legal precedents
              </p>
            </div>

            {/* Search Interface */}
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <Tabs defaultValue="simple" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="simple" className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Simple Search
                    </TabsTrigger>
                    <TabsTrigger value="advanced" className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      AI Query
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="simple" className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        placeholder="Search cases, statutes, regulations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-blue-500"
                        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      />
                      <Button
                        onClick={handleSearch}
                        disabled={isSearching}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
                      >
                        {isSearching ? "Searching..." : "Search"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4">
                    <Textarea
                      placeholder="Describe your legal question in natural language. For example: 'What are the requirements for a valid contract under Nigerian law?' or 'Find cases about fundamental rights violations during emergency periods.'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="min-h-[120px] border-2 border-slate-200 focus:border-blue-500"
                    />
                    <Button
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                    >
                      {isSearching ? "AI is analyzing..." : "Ask AI Assistant"}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Search Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Search Results</h2>
                <div className="text-sm text-slate-500">Found {searchResults.length} results in 0.8 seconds</div>
              </div>

              {searchResults.map((result) => (
                <Card key={result.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={result.type === "case" ? "default" : "secondary"}>
                            {result.type === "case" ? (
                              <>
                                <Scale className="w-3 h-3 mr-1" /> Case
                              </>
                            ) : (
                              <>
                                <FileText className="w-3 h-3 mr-1" /> Statute
                              </>
                            )}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{result.relevanceScore}% match</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg text-blue-600 hover:text-blue-800 cursor-pointer">
                          {result.title}
                        </CardTitle>
                        <div className="text-sm text-slate-600 mt-1">
                          {result.court && `${result.court} • `}
                          {result.year} • {result.citation}
                          {result.section && ` • ${result.section}`}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Button variant="ghost" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4 leading-relaxed">{result.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.keyPoints.map((point, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {point}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Load More Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
