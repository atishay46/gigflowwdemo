import Navbar from "@/components/navbar"
import { Star, Filter, Search } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      position: "Software Engineer",
      rating: 5,
      date: "March 15, 2025",
      review:
        "Excellent work environment and great team collaboration. The management is very supportive and provides good growth opportunities.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      position: "UI/UX Designer",
      rating: 4,
      date: "March 10, 2025",
      review:
        "Good company culture and work-life balance. The projects are interesting and challenging. Could improve on communication between departments.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      rating: 5,
      date: "March 8, 2025",
      review:
        "Amazing company to work for! Great benefits, supportive colleagues, and excellent leadership. Highly recommend to anyone looking for career growth.",
      avatar: "ER",
    },
    {
      name: "David Kim",
      position: "Backend Developer",
      rating: 4,
      date: "March 5, 2025",
      review:
        "Solid company with good technical challenges. The team is knowledgeable and helpful. Office facilities could be better but overall a positive experience.",
      avatar: "DK",
    },
  ]

  const averageRating = 4.5
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Employee Reviews</h1>
            <p className="text-gray-600">Feedback and reviews from our team members</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={star <= averageRating ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="font-semibold text-lg">{averageRating}</span>
            </div>
            <p className="text-sm text-gray-600">{totalReviews} reviews</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search reviews..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <Filter size={16} />
              Filter by Rating
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white">
              Sort by Date
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.position}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Add Your Review
          </button>
        </div>
      </div>
    </div>
  )
}
