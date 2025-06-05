import Navbar from "@/components/navbar"
import { Search, Filter, ChevronDown, Plus } from "lucide-react"

export default function People() {
  const employees = [
    {
      name: "Alicia Shankur",
      email: "alicia.shankur@gmail.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      salary: "$2,500",
      startDate: "Mar 16, 2023",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      name: "James Oyinkan",
      email: "jamesoyinkan@gmail.com",
      jobTitle: "Visual Designer",
      department: "Design",
      salary: "$2,000",
      startDate: "Jan 16, 2023",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      name: "Diti Shreyas",
      email: "ditishreyas@gmail.com",
      jobTitle: "Visual Designer",
      department: "Design",
      salary: "$2,000",
      startDate: "Dec 09, 2024",
      lifeCycle: "Employed",
      status: "Inactive",
    },
    {
      name: "Ishita Bhatgnar",
      email: "ishitabg7@gmail.com",
      jobTitle: "UI/UX Designer",
      department: "Design",
      salary: "$1,500",
      startDate: "Jan 09, 2024",
      lifeCycle: "Employed",
      status: "Active",
    },
    {
      name: "Kito Ashuth",
      email: "ashuto@gmail.com",
      jobTitle: "Content Writer",
      department: "Content",
      salary: "$1,000",
      startDate: "Jan 09, 2024",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      name: "Dario Berik",
      email: "darioberik@yahoo.com",
      jobTitle: "Sales Manager",
      department: "Operation",
      salary: "$4,000",
      startDate: "Feb 21, 2022",
      lifeCycle: "Hired",
      status: "Active",
    },
    {
      name: "Aresen Vlamadir",
      email: "darioberik@yahoo.com",
      jobTitle: "Mobile Assistant",
      department: "Product",
      salary: "$3,000",
      startDate: "Aug 07, 2022",
      lifeCycle: "Employed",
      status: "Inactive",
    },
    {
      name: "Debby Philade",
      email: "debbythegreat@gmail.com",
      jobTitle: "Product Manager",
      department: "Product",
      salary: "$4,500",
      startDate: "Apr 02, 2022",
      lifeCycle: "Hired",
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">List of people</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={16} />
            Add new member
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
              Type <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
              Role <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <Filter size={16} />
              Advanced Filter <ChevronDown size={16} />
            </button>
          </div>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">Export ↗</button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Job Title</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Department</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Salary</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Start Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Life Cycle</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.email}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{employee.jobTitle}</td>
                  <td className="py-3 px-4 text-gray-700">{employee.department}</td>
                  <td className="py-3 px-4 text-gray-700">{employee.salary}</td>
                  <td className="py-3 px-4 text-gray-700">{employee.startDate}</td>
                  <td className="py-3 px-4 text-gray-700">{employee.lifeCycle}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        employee.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
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

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center">1</button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-gray-300">
              2
            </button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-gray-300">
              3
            </button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-gray-300">
              4
            </button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-gray-300">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
