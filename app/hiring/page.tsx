import Navbar from "@/components/navbar"
import { ChevronDown, Bot } from "lucide-react"

export default function Hiring() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Job Posting Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Posting</h1>
                <p className="text-gray-600">Post Job for free. Add details for your job post</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Fill in Job Details</h2>

                <div className="space-y-4">
                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input
                      type="text"
                      placeholder="e.g UI/UX Designer"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Skills Required */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skill(s) Required</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter required skill(s)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience/Experience Level
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g 0-2 years"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g Full time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Workplace Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Workplace Type</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g Hybrid"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Stipend */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stipend</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter the payment per month"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* No of Opening */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No of Opening (If it is more than 1 one)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g 2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  {/* Job Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                    <textarea
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter job description..."
                    />
                  </div>

                  {/* Relevant Links */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Link(s)</label>
                    <input
                      type="text"
                      placeholder="Enter link"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Manage Posting & AI Assistant */}
          <div className="space-y-6">
            {/* Manage Posting */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Manage Posting</h3>
                <button className="text-blue-500 text-sm">See all</button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-purple-500 rounded flex items-center justify-center text-white font-semibold">
                    N
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">UI Designer Intern (Remote)</h4>
                    <p className="text-xs text-gray-500">4500 Stroke</p>
                    <p className="text-xs text-gray-500">Bangalore, India</p>
                    <p className="text-xs text-gray-500">Last updated: 6 months to 12:00 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">View</p>
                    <p className="text-xs text-gray-500">Applications</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-purple-500 rounded flex items-center justify-center text-white font-semibold">
                    N
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">UI Designer Intern (Remote)</h4>
                    <p className="text-xs text-gray-500">4500 Stroke</p>
                    <p className="text-xs text-gray-500">Bangalore, India</p>
                    <p className="text-xs text-gray-500">Last updated: 6 months to 12:00 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">View</p>
                    <p className="text-xs text-gray-500">Applications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="text-blue-500" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Use AI to write</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Write perfectly and format with AI. If you want help with job description, other fields, or AI suggest
                  for better results.
                </p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Write with AI</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
