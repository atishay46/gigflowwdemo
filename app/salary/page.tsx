import Navbar from "@/components/navbar"
import { Search, Filter, ChevronDown, ArrowRight } from "lucide-react"

export default function Salary() {
  const salaryData = [
    {
      name: "Alicia Shankur",
      email: "alicia.shankur@gmail.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      netSalary: "$2,500",
      status: "Paid",
    },
    {
      name: "James Oyinkan",
      email: "jamesoyinkan@gmail.com",
      jobTitle: "Visual Designer",
      department: "Design",
      netSalary: "$2,100",
      status: "Paid",
    },
    {
      name: "Aresen Vlamadir",
      email: "darioberik@yahoo.com",
      jobTitle: "Sales Manager",
      department: "Product",
      netSalary: "$4,700",
      status: "Pending",
    },
    {
      name: "Kito Ashuth",
      email: "ashuto@gmail.com",
      jobTitle: "Content Writer",
      department: "Content",
      netSalary: "$2,000",
      status: "Paid",
    },
    {
      name: "Diti Shreyas",
      email: "ditishreyas@gmail.com",
      jobTitle: "Backend Engineer",
      department: "Engineering",
      netSalary: "$2,500",
      status: "Paid",
    },
    {
      name: "Alicia Shankur",
      email: "alicia.shankur@gmail.com",
      jobTitle: "Product Manager",
      department: "Product",
      netSalary: "$4,00",
      status: "Pending",
    },
    {
      name: "Dario Berik",
      email: "darioberik@yahoo.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      netSalary: "$1900",
      status: "Paid",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Salary Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">Salary Activities</h1>
                  <div className="flex items-center gap-2">
                    <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                      <option>May 2025</option>
                    </select>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
                    <Filter size={16} />
                    Filter
                  </button>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-sm">Monthly Salary -</span>
                    <span className="font-semibold">$3500</span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">Name</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">Job Title</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">Department</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">Net Salary</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((employee, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <div className="font-medium text-gray-900">{employee.name}</div>
                            <div className="text-sm text-gray-500">{employee.email}</div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-700">{employee.jobTitle}</td>
                        <td className="py-4 px-6 text-gray-700">{employee.department}</td>
                        <td className="py-4 px-6 text-gray-700">{employee.netSalary}</td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              employee.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {employee.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Employee Profile */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg?height=56&width=56')" }}
                  ></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Elizabeth James</h3>
                  <p className="text-blue-100">UI Designer</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Position</span>
                <span className="font-medium">UI lead</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Department</span>
                <span className="font-medium">Design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-medium">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Basic Salary</span>
                <span className="font-medium">$3500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bonus & Overtime</span>
                <span className="font-medium">$500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Deduction</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next Salary</span>
                <span className="font-medium">$3500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bank Details</span>
                <span className="font-medium text-sm">
                  234567890
                  <br />
                  Polaris Bank
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Currency</span>
                <span className="font-medium">$USD</span>
              </div>
            </div>

            <button className="w-full mt-6 text-blue-500 flex items-center justify-center gap-2 hover:underline">
              View Payroll History <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
