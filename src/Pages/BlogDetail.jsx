import React from 'react';
import { ArrowLeft, Heart, MessageSquare, Share2, Bookmark, BookOpen, Users, Mail } from 'lucide-react';

const BlogDetail = ({ post = {} }) => {
  // Default values for when post data is not provided or incomplete
  const {
    id = 1,
    title = "Wanderlust for Growth: How Travel Transforms Your Life",
    author = "Michelle Santos",
    date = "Feb 16, 2025",
    readTime = "12 min read",
    likes = 487,
    comments = 63,
    mainImage = "/api/placeholder/1200/600",
    authorImage = "/api/placeholder/80/80",
    category = "Lifestyle",
    authorBio = "Travel Blogger & Photographer",
    authorDescription = "Michelle is a passionate traveler who has visited over 50 countries across 6 continents. She believes in the transformative power of travel and shares her experiences to inspire others to explore the world.",
    content = [],
    relatedArticles = []
  } = post;

  // Sample related articles if none are provided
  const defaultRelatedArticles = [
    {
      id: 101,
      title: "Solo Travel: Finding Yourself in Unfamiliar Places",
      description: "Discover how traveling alone can lead to profound personal growth and unexpected adventures.",
      category: "Travel",
      image: "/api/placeholder/400/225"
    },
    {
      id: 102,
      title: "Budget Travel: Seeing the World on a Shoestring",
      description: "Learn how to maximize your travel experiences while minimizing your expenses.",
      category: "Travel",
      image: "/api/placeholder/400/225"
    },
    {
      id: 103,
      title: "Sustainable Tourism: Protecting the Places We Love",
      description: "How to reduce your environmental impact while still enjoying amazing travel experiences.",
      category: "Travel",
      image: "/api/placeholder/400/225"
    }
  ];

  // Sample comments if none are provided
  const defaultComments = [
    {
      id: 201,
      username: "Sarah Johnson",
      userImage: "/api/placeholder/100/100",
      timeAgo: "2 days ago",
      text: "This article resonated with me so much! I recently returned from my first solo trip to Thailand, and I completely agree about the confidence-building aspect. Can't wait to plan my next adventure!",
      likes: 12
    },
    {
      id: 202,
      username: "David Wang",
      userImage: "/api/placeholder/100/100",
      timeAgo: "3 days ago",
      text: "Thank you for sharing these insights! I've been hesitant about traveling to unfamiliar places, but your article has given me the motivation to step outside my comfort zone.",
      likes: 8
    },
    {
      id: 203,
      username: "Emma Rodriguez",
      userImage: "/api/placeholder/100/100",
      timeAgo: "5 days ago",
      text: "Your point about breaking stereotypes through travel is so important. I've had similar experiences in the Middle East - the hospitality I encountered completely changed my perspective.",
      likes: 15
    }
  ];

  // Actual related articles to use (provided or default)
  const articlesToShow = relatedArticles.length > 0 ? relatedArticles : defaultRelatedArticles;
  
  // Determine if we should use the default blog content
  const useDefaultContent = content.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fbd4e0] to-[#fff5e1] p-6 md:p-10">
      {/* Decorative circles for background effect */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-40 right-40 w-80 h-80 bg-[#e6d5b3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 left-1/3 w-96 h-96 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back button */}
        <a href="#" className="inline-flex items-center space-x-2 text-gray-700 hover:text-[#e0b3c1] mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span>Back to all articles</span>
        </a>
        
        {/* Article header */}
        <header className="mb-12">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white border-opacity-30">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={mainImage} 
                alt={title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#e0b3c1] text-white text-sm font-medium">
                    {category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {title}
                </h1>
                <div className="flex flex-wrap items-center text-sm md:text-base text-gray-200 space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex items-center justify-center text-white text-xs font-medium overflow-hidden">
                      <img src={authorImage} alt={author} className="w-full h-full object-cover" />
                    </div>
                    <span>{author}</span>
                  </div>
                  <span>{date}</span>
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Article content */}
        <main className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white border-opacity-30 mb-12">
          {/* Article text */}
          <div className="prose prose-lg max-w-none">
            {useDefaultContent ? (
              <>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Travel has the unique ability to transform us in ways we never imagined. Well noted by the American author Mark Twain this goes to say, "Travel is fatal to prejudice, bigotry, and narrow-mindedness." It is not just the way to get away from it all but the chance to find out who we are and the reality we are in. Whether it is a two-day journey or a journey to an unknown territory, traveling makes us grow beyond our daily routines. They know that more than just fun it is an instrument that helps to open the world to those who have no chance to explore it.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Personal Growth Through New Experiences</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Developing Adaptability and Problem-Solving Skills</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Can you imagine that after arriving in a certain country, one cannot understand a word of the local language? Something as simple as ordering food or getting to your hotel is a quest. All these challenges prepare you to be able to handle situations that you have never encountered before. For instance, a tourist in Japan who has no experience with the language has to use sign language and the latest technologies such as the translator's applications. Escaping these hurdles builds a positive outlook, which is not limited to the act of traveling.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Building Confidence and Independence</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Travel sets you out of your comfort zone and this makes the trip extraordinary. Traveling is interesting; walking through a foreign city or climbing a rough trail develops confidence. For instance, Maria was traveling alone with a backpack across South America. It also helped her gain a lot of confidence and a feeling of self-sufficiency she had never felt ever before. Unexpected situations like delayed or lost baggage at the airport or having to find a way around a subway system can cause you to rely on your instincts and skills.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Broadening Perspectives</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Enhancing Cultural Understanding</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A taste of different cultures gives one a different perception of life. A visit to India during Diwali may help you find out the true feel of celebrating cultural traditions and celebrating togetherness. Experiences such as these make you understand other people, and cultures and make you more conscious of the world. Cooking local meals, experiencing tea ceremonies from Japan or storytelling from Africa, can help to understand both the common features of people and their differences.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Breaking Stereotypes</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Engaging with different individuals from diverse cultural spheres will inevitably lead the way towards breaking misconceptions. For instance, a person who is traveling to the Middle East for the first time may find politeness and friendliness that he or she did not expect. These encounters alter points of view and promote the spirit of tolerance. Observing people in their different social contexts illuminates the fullness of their lives against the stereotyped image some persons may be fed from the media or informed by others.
                </p>
                
                {/* Insert a relevant image between sections */}
                <div className="my-10 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/api/placeholder/1000/500" 
                    alt="People from different cultures connecting" 
                    className="w-full h-auto"
                  />
                  <p className="italic text-sm text-gray-600 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm p-3">
                    Building meaningful connections with people from diverse backgrounds is one of travel's greatest gifts
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Enhancing Life Skills</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Mastering Communication</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether it's asking for directions in Paris or bargaining at a market in Marrakech, travel can help to develop people's verbal and non-verbal communication skills. Coping skills learned in occupational therapy formats are generally beneficial and used in the workplace and social environments. Being able to express information regardless of language development helps you to embrace people and situations at large.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Improving Planning and Organizational Abilities</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Organization can be done through setting budgets, timetables, and resource allocation in a trip. Achieving a European tour that involves several countries for instance hones one's organizational abilities. Time management is another skill that tourists undergo the process of learning as they try to organize the activities or events they wish to attend in the course of the journey.
                </p>
                
                <blockquote className="border-l-4 border-[#e0b3c1] pl-4 italic my-8 text-gray-700">
                  "Travel is the only thing you buy that makes you richer." — Anonymous
                </blockquote>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Inspire Action</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Are you now prepared to go through your change process? JOINLIO's Travel Hub is kicking off where your next adventure will take you. With JOINLIO, every member of a traveling group will find something interesting, be it an itinerary planner, collaboration tools, student special features, and more. You can also use the site to encourage others by writing articles based on your experiences, ideas, and pictures.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  It does not matter if you are looking for excitement in your life, career Progress, or friends, the world is your classroom. Every time you travel you acquire experiences that make life better and create inspiration for others. We invite you to follow JOINLIO to learn, develop, and get connected by the power of traveling.
                </p>
                
                <p className="text-xl font-semibold text-[#e0b3c1] mb-6">
                  Pack your bags because the next chapter in life is waiting for you, so why not start planning now?
                </p>
              </>
            ) : (
              // Render dynamic content when available
              content.map((section, index) => {
                switch (section.type) {
                  case 'paragraph':
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-6">
                        {section.content}
                      </p>
                    );
                  case 'heading':
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-10">
                        {section.content}
                      </h2>
                    );
                  case 'subheading':
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                        {section.content}
                      </h3>
                    );
                  case 'image':
                    return (
                      <div key={index} className="my-10 rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={section.url || "/api/placeholder/1000/500"} 
                          alt={section.alt || "Blog illustration"} 
                          className="w-full h-auto"
                        />
                        {section.caption && (
                          <p className="italic text-sm text-gray-600 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm p-3">
                            {section.caption}
                          </p>
                        )}
                      </div>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-[#e0b3c1] pl-4 italic my-8 text-gray-700">
                        {section.content}
                      </blockquote>
                    );
                  default:
                    return null;
                }
              })
            )}
          </div>
          
          {/* Article actions */}
          <div className="border-t border-gray-200 mt-10 pt-8">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <Heart size={20} />
                  <span>{likes} likes</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <MessageSquare size={20} />
                  <span>{comments} comments</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <Bookmark size={20} />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </main>
        
        {/* Author info */}
        <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white border-opacity-30 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex-shrink-0">
              <img 
                src={authorImage} 
                alt={author} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{author}</h3>
              <p className="text-gray-600 mb-4">{authorBio}</p>
              <p className="text-gray-700 mb-4">
                {authorDescription}
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="px-4 py-2 bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] text-white rounded-full font-medium hover:shadow-lg transition-all">
                  Follow
                </button>
                <button className="px-4 py-2 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-opacity-50 transition-all">
                  View all articles
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">You might also enjoy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesToShow.map((article) => (
              <article
                key={article.id}
                className="group bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 border border-white border-opacity-30"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image || "/api/placeholder/400/225"} 
                    alt={article.title || "Related article"} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white text-sm font-medium border border-white border-opacity-30">
                    {article.category || "Travel"}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#e0b3c1] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {article.description}
                  </p>
                  
                  <a 
                    href={`/article/${article.id}`} 
                    className="flex items-center space-x-1 text-[#e0b3c1] hover:text-[#d49dab] transition-colors group-hover:translate-x-1 transform transition-transform text-sm"
                  >
                    <span className="font-medium">Read article</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl border border-white border-opacity-30 mb-12 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#e6d5b3] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Get more travel inspiration</h2>
            <p className="text-gray-700 mb-8">Subscribe to our newsletter and receive weekly updates on exciting destinations, travel tips, and exclusive content.</p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#e0b3c1] focus:border-transparent placeholder-gray-500 text-gray-700"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] text-white rounded-full font-medium hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <div className="mt-4 text-xs text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </div>
          </div>
        </section>
        
        {/* Comments section */}
        <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white border-opacity-30 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Comments ({post.comments || 0})</h2>
          
          {/* Comment form */}
          <div className="mb-10">
            <div className="flex space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex-shrink-0"></div>
              <div className="flex-grow">
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#e0b3c1] focus:border-transparent placeholder-gray-500 text-gray-700 h-32 resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] text-white rounded-full font-medium hover:shadow-lg transition-all">
                Post Comment
              </button>
            </div>
          </div>
          
          {/* Sample or actual comments */}
          {(post.commentList || defaultComments).map((comment) => (
            <div key={comment.id} className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex-shrink-0 overflow-hidden">
                  <img 
                    src={comment.userImage || "/api/placeholder/100/100"} 
                    alt={comment.username || "Commenter"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{comment.username}</h4>
                    <span className="text-sm text-gray-500">{comment.timeAgo}</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    {comment.text}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="text-gray-600 hover:text-[#e0b3c1] transition-colors">Reply</button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-[#e0b3c1] transition-colors">
                      <Heart size={14} />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Load more comments button */}
          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-opacity-50 transition-all">
              Load more comments
            </button>
          </div>
        </section>
        
      </div>
    </div>
  );
};

// Define CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: scale(1) translate(0px, 0px);
    }
    33% {
      transform: scale(1.1) translate(30px, -50px);
    }
    66% {
      transform: scale(0.9) translate(-20px, 20px);
    }
    100% {
      transform: scale(1) translate(0px, 0px);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default BlogDetail;