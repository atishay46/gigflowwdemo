import Navbar from "@/components/navbar"
import { Users, Briefcase, FolderOpen, Calendar, ArrowRight, Filter } from "lucide-react"
import PerformanceChart from "@/components/performance-chart"

export default function Dashboard() {
  const upcomingActions = [
    {
      time: "03:30 pm",
      type: "Internal Meeting",
      description: "Internal Meeting with Jade Sapphire - UI Designer",
      date: "06:30 pm",
    },
    { time: "05:00 pm", type: "Internal Meeting", description: "Internal Meeting with Content team", date: "06:30 pm" },
    { time: "07:00 pm", type: "Interview", description: "Interview with Achyut - UI Intern", date: "06:30 pm" },
    { time: "06:00 pm", type: "Internal Meeting", description: "Internal Meeting with Content team", date: "06:30 pm" },
    { time: "05:00 pm", type: "Internal Meeting", description: "Internal Meeting with Content team", date: "06:30 pm" },
    { time: "05:00 pm", type: "Internal Meeting", description: "Internal Meeting with Content team", date: "06:30 pm" },
  ]

  const candidates = [
    {
      name: "Elizabeth Flade",
      experience: "3 years in Software Development",
      skills: "React, Node.js",
      color: "bg-pink-500",
    },
    {
      name: "Andre Suares",
      experience: "3 years in Software Development",
      skills: "React, Node.js",
      color: "bg-orange-500",
    },
    {
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      skills: "React, Node.js",
      color: "bg-blue-500",
    },
    {
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      skills: "React, Node.js",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Info Banner */}
      <div className="mx-4 mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          i
        </div>
        <p className="text-gray-700">
          Optimize your experience on Gigfloww - track your job post, manage teams and streamline hr operations
          effortlessly today!
        </p>
      </div>

      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back, Nuraj group</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            <span>Wed 23, May 2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-medium">Employees</h3>
                  <Users className="text-purple-500" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">24</div>
                <button className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
                  View Details <ArrowRight size={14} />
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-medium">Hiring</h3>
                  <Briefcase className="text-blue-500" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">5</div>
                <button className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
                  View Details <ArrowRight size={14} />
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-medium">Projects</h3>
                  <FolderOpen className="text-green-500" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">1</div>
                <button className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Performance Report */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <PerformanceChart />
            </div>

            {/* Incoming Applications */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Incoming Application</h3>
                  <p className="text-gray-600 text-sm">Manage application for your job posting</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded text-sm">
                    <Filter size={14} />
                    Filter
                  </button>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">See all</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {candidates.map((candidate, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 ${candidate.color} rounded-full flex items-center justify-center text-white font-semibold`}
                      >
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{candidate.name}</h4>
                        <p className="text-xs text-gray-500">{candidate.experience}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs text-gray-600 mb-1">Latest Experience</p>
                      <p className="text-xs font-medium">{candidate.skills}</p>
                    </div>
                    <button className="text-blue-500 text-xs flex items-center gap-1 hover:underline">
                      View Resume <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Upcoming Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={20} />
              <h3 className="text-lg font-semibold">Upcoming Actions</h3>
            </div>
            <div className="space-y-4">
              {upcomingActions.map((action, index) => (
                <div key={index} className="flex gap-3">
                  <div className="text-xs text-gray-500 w-16">{action.time}</div>
                  <div className="flex-1">
                    <div className="text-xs text-blue-500 mb-1">{action.type}</div>
                    <div className="text-sm text-gray-700">{action.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
