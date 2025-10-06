import React from 'react'


const BlogCards = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Four Ways to Make CSR Drive Real Business Value",
      description: "CSR is not just a responsibility-it's an investment in long-term business growth. While many see CSR as a compliance or goodwill exercise, the most effective leaders embrace it with clear",
      author: "Sonal Arora",
      image: "/blog-csr-business.jpg", // You'll need to add this image
      readMoreLink: "/blog/four-ways-csr-business-value"
    },
    {
      id: 2,
      title: "5 Reasons Why Soft Skills are Now a Hard Business Metric?",
      description: "HR: \"You were one of our best performers... why are you leaving?\" Employee: \"I never felt heard. My ideas were brushed aside. My manager didn't know how to talk, only",
      author: "Sonal Arora", 
      image: "/blog-soft-skills.jpg", // You'll need to add this image
      readMoreLink: "/blog/soft-skills-business-metric"
    },
    {
      id: 3,
      title: "The Future is Skill-Based: 3 CSR-Driven Shifts from Degrees to Digital Badges.",
      description: "The traditional four-year degree, once the undisputed gold standard of employability, is experiencing a profound transformation. In an era demanding agility, specialized skills, and continuous learning, a new currency is",
      author: "Sonal Arora",
      image: "/blog-skill-based-future.jpg", // You'll need to add this image
      readMoreLink: "/blog/skill-based-future-digital-badges"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Blog Tag */}
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#E75B4D] text-white px-3 py-1 rounded-full text-sm font-medium">
                      BLOG
                    </span>
                  </div>
                  
                  {/* Featured Image */}
                  <div className="relative h-48 w-full">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      {/* Placeholder for blog image */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm">Blog Image</p>
                      </div>
                    </div>
                    
                    {/* Author Profile Picture */}
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                      <div className="w-12 h-12 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-600">SA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-8">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <a
                      href={post.readMoreLink}
                      className="text-[#E75B4D] hover:text-[#D54A3A] font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      READ MORE
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    {/* Author */}
                    <span className="text-[#E75B4D] text-sm font-medium">
                      {post.author}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements for Third Card */}
                {post.id === 3 && (
                  <>
                    <div className="absolute top-20 right-4 flex flex-col gap-1">
                      <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-32 left-4 flex flex-col gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCards