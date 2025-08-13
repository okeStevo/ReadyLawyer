import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, Users, Home, Briefcase, Shield, Heart, Car, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"

const legalCategories = [
  {
    id: "family",
    title: "Family Law",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    description: "Marriage, divorce, child custody, and family disputes",
    articles: 24,
  },
  {
    id: "property",
    title: "Property Law",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
    description: "Real estate, tenancy, land disputes, and property rights",
    articles: 18,
  },
  {
    id: "business",
    title: "Business Law",
    icon: Briefcase,
    color: "bg-green-100 text-green-600",
    description: "Company registration, contracts, and commercial disputes",
    articles: 32,
  },
  {
    id: "criminal",
    title: "Criminal Law",
    icon: Shield,
    color: "bg-red-100 text-red-600",
    description: "Criminal charges, bail, and legal defense rights",
    articles: 15,
  },
  {
    id: "employment",
    title: "Employment Law",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
    description: "Workers' rights, wrongful termination, and workplace issues",
    articles: 21,
  },
  {
    id: "traffic",
    title: "Traffic & Motor Law",
    icon: Car,
    color: "bg-orange-100 text-orange-600",
    description: "Traffic violations, vehicle registration, and road accidents",
    articles: 12,
  },
]

const featuredArticles = [
  {
    title: "Understanding Your Rights as a Tenant in Nigeria",
    category: "Property Law",
    readTime: "8 min read",
    excerpt: "Learn about your legal protections, what landlords can and cannot do, and how to handle disputes.",
    isNew: true,
  },
  {
    title: "How to Register Your Business in Nigeria: A Complete Guide",
    category: "Business Law",
    readTime: "12 min read",
    excerpt:
      "Step-by-step process for business registration with CAC, required documents, and common pitfalls to avoid.",
    isNew: false,
  },
  {
    title: "What to Do When Arrested: Know Your Rights",
    category: "Criminal Law",
    readTime: "6 min read",
    excerpt: "Essential information about your constitutional rights during arrest and police detention.",
    isNew: true,
  },
  {
    title: "Marriage Laws in Nigeria: Traditional vs. Statutory",
    category: "Family Law",
    readTime: "10 min read",
    excerpt: "Understanding the different types of marriages recognized in Nigeria and their legal implications.",
    isNew: false,
  },
]

const faqs = [
  {
    question: "How much does it cost to hire a lawyer in Nigeria?",
    answer:
      "Legal fees vary widely depending on the complexity of the case and the lawyer's experience. Simple consultations can range from ₦10,000 to ₦50,000, while complex litigation can cost hundreds of thousands or millions of naira. Many lawyers offer free initial consultations.",
  },
  {
    question: "Can I represent myself in court?",
    answer:
      "Yes, you have the right to represent yourself in Nigerian courts. However, legal representation is highly recommended for complex matters. For simple cases like small claims or traffic violations, self-representation may be feasible with proper preparation.",
  },
  {
    question: "What should I do if I can't afford a lawyer?",
    answer:
      "Nigeria's constitution guarantees legal aid for indigent persons in criminal cases. You can apply for free legal aid through the Legal Aid Council of Nigeria, or seek help from pro bono programs run by bar associations and NGOs.",
  },
  {
    question: "How long do court cases typically take in Nigeria?",
    answer:
      "Court cases in Nigeria can take anywhere from several months to several years, depending on the complexity and court backlog. Simple matters may be resolved in 6-12 months, while complex commercial or criminal cases can take 2-5 years or longer.",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Legal Awareness Hub</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Empowering Nigerians with accessible legal knowledge. Find easy-to-understand guides, articles, and
              resources on common legal issues.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search legal topics, guides, or questions..."
                className="pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-blue-500"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Browse by Legal Area</h2>
            <p className="text-lg text-slate-600">
              Find resources organized by the most common legal topics in Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{category.articles} articles</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="articles" className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Featured Resources</h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="articles">Latest Articles</TabsTrigger>
                <TabsTrigger value="faqs">Common FAQs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="articles" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        {article.isNew && <Badge className="text-xs bg-green-100 text-green-700">New</Badge>}
                        <div className="flex items-center gap-1 text-slate-500 text-sm ml-auto">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">{article.title}</CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                        Read Article →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div className="grid gap-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  View All FAQs
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Need More Help?</h2>
            <p className="text-lg text-slate-600">
              Can't find what you're looking for? We're here to help you navigate your legal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Find a Lawyer</CardTitle>
                <CardDescription>Connect with qualified legal professionals in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Browse Lawyers</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-100 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>AI Legal Research</CardTitle>
                <CardDescription>Use our AI-powered tool to research case law and statutes</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">Start Research</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Ask a Question</CardTitle>
                <CardDescription>Submit your legal question and get guidance from experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Ask Question</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the latest legal updates, new resources, and important changes in Nigerian law delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
