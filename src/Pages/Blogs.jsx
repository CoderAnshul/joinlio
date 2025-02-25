import React, { useState } from 'react';
import { Search, MoreHorizontal, ChevronRight, Bell, BookOpen, Users, Mail, Heart, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tavelblog from "../assets/images/Travel.jpg";
import Entrepreneurshipblog from "../assets/images/Entrepreneurship.jpg";
import Mediablog from "../assets/images/Media.jpg";
import BlogDp from "/fav.png"

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  
  const categories = ['All', 'Media', 'Entrepreneurship', 'Travel'];
  
  const blogPosts = [
    {
      id: 1,
      title: "Transform Your Creative Ideas into Reality with JOINLIO!",
      excerpt: "Are you a student who wants to share your vision to the world through films, photos, musical compositions, or digital products? JOINLIO's Media Hub offers the perfect platform.",
      category: "Media",
      author: "JOINLIO Team",
      date: "Feb 15, 2025",
      readTime: "8 min read",
      likes: 423,
      imageSrc: Mediablog,
      content: "Transform Your Creative Ideas into Reality with JOINLIO!\n\nAre you a student who wants to share your vision to the world through films, photos, musical compositions, or digital products? Are you eager to transform creative concepts into socially relevant projects?...",
      fullContent: [
        { type: 'paragraph', content: "Transform Your Creative Ideas into Reality with JOINLIO!\n\nAre you a student who wants to share your vision to the world through films, photos, musical compositions, or digital products? Are you eager to transform creative concepts into socially relevant projects? If you are looking for some inspiration, time to develop yourself, and a place to be inspired and inspire others, JOINLIO has created something for you namely Media Hub." },
        { type: 'paragraph', content: "Creativity in today's generation is no longer just a passion but a platform and an investment in your future. The Media Hub of JOINLIO offers students the resources, connections, and environment for transforming one's concepts into reality. It is now time to see why creativity is important and how JOINLIO can make your dreams come true with Media Hub." },
        { type: 'heading', content: "Why Creativity Matters as a Student" },
        { type: 'subheading', content: "1. Express Yourself" },
        { type: 'paragraph', content: "Creativity gives you the capability of narrating your story in a dynamically different and relevant manner. Whether in the form of image, voice, or content, media is an effective way of communicating one's self, beliefs, and personality. People can be motivated by your ideas to engage in discussions and leave a definite imprint on them." },
        { type: 'paragraph', content: "For example, Emma, a college student in Manchester, United Kingdom, used JOINLIO's Media Hub, to compose a short movie related to climate change. Apart from creating awareness, she engaged in storytelling that elicited positive feedback and earned her an award at a national film festival. I think she is a great example of how creativity can help to change the world." },
        { type: 'subheading', content: "2. Build a Strong Portfolio" },
        { type: 'paragraph', content: "College years are the best time when you can start building up an impressive portfolio that would highlight your strengths. The portfolio is not only a gallery of selected works but rather an announcement of the skills and commitment level. As collaborators or employers, people search for creative performers with an actual record of creative work." },
        { type: 'paragraph', content: "For example, John, an aspiring photographer from National University of Singapore used professional tools such as the Media Hub to enhance his photos. He was able to land a great internship with the top media company which brought him more opportunities in the future." },
        { type: 'subheading', content: "3. Collaborate and Grow" },
        { type: 'paragraph', content: "It is for this reason that collaboration remains the centerpiece of creativity. What I find interesting is that working in a team with co-workers from different fields improves your skills and at the same time gives you a different perception altogether. It is common for creative solutions to occur when multiple individuals work towards finding a solution or building something." },
        { type: 'paragraph', content: "For instance, Lara, the musician, found a videographer from Harvard University, United States and a graphic designer Ella, and the trio worked toward making a music video. This project converged their creativity and the performance went viral on social networks to highlight the importance of synergy." },
        { type: 'heading', content: "How JOINLIO's Media Hub Can Help" },
        { type: 'paragraph', content: "The Media Hub of JOINLIO isn't just a platform; It is a place for students' fraternity and resources that aim to assist them to be successful in their artistic pursuits. Here's how it can support you:" },
        { type: 'subheading', content: "1. Find Creative Collaborators" },
        { type: 'paragraph', content: "Media Hub is an active platform, which includes filmmakers, editors, musicians, and other digital content designers. It is a platform where you are surrounded by like-minded people and can work on interesting projects together. If you need a scriptwriter, an editor, or an independent musician the Media Hub contains a database to help you." },
        { type: 'paragraph', content: "For example, Ethan who is a scriptwriter in the United Kingdom got a team through JOINLIO for his first web series. It was very successful and got them many thousand hits online while building the foundation for future works." },
        { type: 'subheading', content: "2. Access Exclusive Tools" },
        { type: 'paragraph', content: "Whether you are creating original content, editing, storyboarding, or developing content templates, JOINLIO has the tools you need to get the job done. These tools are expected to be versatile enough that even the inexperienced types of users can find something to enjoy while allowing more experienced creators to have a good time as well." },
        { type: 'paragraph', content: "For example, Sophia, the graphic design student from Australia used the Media Hub exclusive tools to develop a set of digital art masterpieces. What she painted next was her entry to an exhibition, where she not only received accolades but most importantly linkages to the world of art." },
        { type: 'subheading', content: "3. Showcase Your Work" },
        { type: 'paragraph', content: "Presenting your completed projects to the JOINLIO community creates a means through which you gain feedback and acknowledgment. This exposure not only makes you learn to improve but also enhances your confidence and brings credibility." },
        { type: 'paragraph', content: "For example, there is Jack, a podcaster from University of Canada, Toronto who posted his first episode on the Media Hub. The messages he got from the audience were encouraging, and the suggestions given also contradicted his perception, as he increasingly attracted and developed an audience." },
        { type: 'heading', content: "Why JOINLIO's Media Hub is Different" },
        { type: 'paragraph', content: "In contrast with other platforms, JOINLIO's Media Hub is designed for students. It knows what you are going through, from lack of funds to the struggle of looking for the right partner. The platform is created with these issues in mind to ensure that creativity can thrive in a given platform." },
        { type: 'subheading', content: "Key Benefits of JOINLIO's Media Hub:" },
        { type: 'list', items: [
          "Affordable Access: Students can work with professional tools and use resources available online for a relatively much lower amount.",
          "Community Support: Join a community of like-minded individuals who will nurture your ideas and help you to grow professionally.",
          "Recognition Opportunities: Get noticed by sharing your work with a larger crowd of people inclusive of people in the work niche.",
          "Real-World Impact: The Media Hub of JOINLIO has already given a new life to hundreds of students, allowing them to achieve their dream of becoming creative individuals."
        ]},
        { type: 'paragraph', content: "For instance, Lucy, a journalism student from the United States, used JOINLIO to make a documentary about the local artisans. Having gained access to professional utensils and with support from people The Artisan Project received a lot of attention, encouraging everyone to stand for artisans. Her work has been even presented in more exhibitions that show that the creativity of students can be used." },
        { type: 'paragraph', content: "Likewise, Rahul, a videographer from Kolkata, India worked on a short film message about mental health with other students. Not only did their project become recognized by a great number of people but also it was the beginning of a discussion of an extremely important issue." },
        { type: 'heading', content: "Start Your Creative Journey with JOINLIO" },
        { type: 'paragraph', content: "Whether it's your first time directing a short film creating digital art or starting a podcast, JOINLIO's Media Hub is the ideal starting point. It is not just a place to post your ideas, it is a place to launch and share your creativity." },
        { type: 'paragraph', content: "This is the right time to begin the great journey. When you're with JOINLIO you will of course have the means, like-minded people, and chances to bring your ideas to life! If you've been waiting to unleash your artistic side, then you shouldn't miss the chance to become a part of JOINLIO's Media Hub! Shall we build something out of the ordinary?" },
        { type: 'quote', content: "Don't wait, ignite your creativity today with JOINLIO!" }
      ]
    },
    {
      id: 2,
      title: "Why Student Entrepreneurship is the Key to Future Success",
      excerpt: "Campus life is not only limited to classroom experience and good performance; it is also one of the best chances to make your dream come true.",
      category: "Entrepreneurship",
      author: "JOINLIO Team",
      date: "Feb 12, 2025",
      readTime: "7 min read",
      likes: 287,
      imageSrc: Entrepreneurshipblog,
      content: "Where Ideas Ignite and Future Begin!\n\nCampus life is not only limited to classroom experience and good performance; it is also one of the best chances to make your dream come true...",
      fullContent: [
        { type: 'heading', content: "Why Student Entrepreneurship is the Key to Future Success" },
        { type: 'subheading', content: "Where Ideas Ignite and Future Begin!" },
        { type: 'paragraph', content: "Campus life is not only limited to classroom experience and good performance; it is also one of the best chances to make your dream come true. Many famous entrepreneurs around the globe, starting with the creators of Facebook, Mark Zuckerberg and Elon Musk, began their enterprises at a very young age. Why not seize the moment and start your journey today?" },
        { type: 'heading', content: "Why Entrepreneurship Matters for Students" },
        { type: 'subheading', content: "Real-World Learning" },
        { type: 'paragraph', content: "It indeed feels like a lot of knowledge taught in the classroom is more theoretical until it is implemented to solve practical issues. This gap can be filled by student entrepreneurship because it gives practical experience to the students. For instance, Alex Taylor, who is an engineering student in London started her project of developing an app that works to connect small farmers to urban households that require fresh produce delivery. This experience not only reflected what she learned in her classes about programming and market analysis but also helped to address the problem of the inadequate supply chain in the food industry." },
        { type: 'paragraph', content: "That way, students get to understand how businesses work, from marketing to customer acquisition, from financial management to problem-solving, things that cannot be taught in classrooms." },
        { type: 'subheading', content: "Creative Freedom" },
        { type: 'paragraph', content: "University time is a special time in a person's life when he or she can try out new concepts and ideas not restricted by a company's organizational structure. For instance, Jamie Carter, a student of MBA at Manchester, began a business of eco-friendly packaging during his course. Ideas of replacing plastic bags with biodegradable materials can be traced back to the flexible environment that is offered at his university for its students." },
        { type: 'paragraph', content: "With the help of professors and friends, Jamie transformed his concept into a business and developed profitable prototypes. The freedom enables students to experiment, fail, learn, and reinvent themselves, something they hardly enjoy once they join the corporate world." },
        { type: 'subheading', content: "Leadership Development" },
        { type: 'paragraph', content: "The challenge of starting a business brings up leadership attributes such as decision-making, working in a team, and determination among others. For instance, Priya Nair who is a current student at a university in Bengaluru was involved in starting a tutoring service company while studying in college. The exercise of supervising ten tutors and at the same time being a student gave her an orientation on delegation, negotiation, and time management." },
        { type: 'paragraph', content: "As we speak, Priya attributes all her success to her small business management training that helped her groom into a confident businesswoman who does not give up in the face of adversity.\nTo this extent, entrepreneurship fosters ownership responsibility to ensure students develop, both as individuals and employees." },
        { type: 'heading', content: "How JOINLIO's Entrepreneurship Hub Can Help" },
        { type: 'paragraph', content: "Given this, JOINLIO is in a perfect position to grasp what specific problems and opportunities student entrepreneurs face. Here's how it provides the support you need to succeed:" },
        { type: 'subheading', content: "Collaborate with Like-Minded Peers" },
        { type: 'paragraph', content: "Hiring the correct team is very important for any modern-day start-up enterprise. At JOINLIO students can find co-founders, designers, marketers, and developers, who are interested in the same idea as you are." },
        { type: 'paragraph', content: "For instance, Alex Farkas, a business student from the University of Arizona, co-founded UGallery with partners Stephen Tanenbaum and Greg Rosborough. They established an online platform where independent artists can showcase and sell their original artworks directly to collectors worldwide. This collaboration exemplifies how individuals with diverse skills can transform a simple idea into a thriving venture." },
        { type: 'subheading', content: "Access to Resources" },
        { type: 'paragraph', content: "Some of the most valuable features of JOINLIO are free business plan samples, business pitch deck ideas, and specific market research materials for student entrepreneurs. These tools make it easier for students to begin new ventures and contribute towards their efficient implementation." },
        { type: 'paragraph', content: "For instance, when the media student in Berlin, Anna Müller, chose to start a podcast on mental health, she used JOINLIO's information to prepare her business plan and marketing plan. These structured tools developed her confidence to go out and get sponsors as well as enhance her followership." },
        { type: 'subheading', content: "Mentorship Opportunities" },
        { type: 'paragraph', content: "It is always helpful to seek advice from people who have some level of experience in practice. JOINLIO brings successful entrepreneurs and industry professionals who advise them and give their opinions." },
        { type: 'paragraph', content: "A software engineering student from Sydney, Liam Johnson has invented an artificial intelligence career counseling application. By joining JOINLIO, he was in a position to learn from an experienced businessman regarding the improvement of his product as well as acquiring funds for it. Not only did the mentorship positively impact Liam's confidence levels but it manifested in positive changes to his business results." },
        { type: 'heading', content: "Take the Leap Today!" },
        { type: 'paragraph', content: "When it comes to Entrepreneurship Hub at JOINLIO it is not just a place; it is the starting point for future executives. Whether it is your first time coming up with a business idea, or you have already established your startup, JOINLIO avails resources, encouragement, and network." },
        { type: 'list', items: [
          "Low-Risk Environment: Since you are a student, you don't have as many monetary and family commitments so you have the opportunity to try things and make mistakes.",
          "Networking Opportunities: JOINLIO provides an opportunity to communicate with investors, mentors, and like-minded people through regular events.",
          "Recognition and Growth: Many student entrepreneurs get recognized on campus and in other places, creating more avenues for them."
        ]},
        { type: 'heading', content: "Conclusion" },
        { type: 'paragraph', content: "Entrepreneurship is not easy, but it is worthwhile. This empowers students by making them skillful, and confident and adopt a 'can do' attitude that makes them fit in the world market. Thus, JOINLIO's platform and community will help turn your dreams into valuable initiatives and projects." },
        { type: 'paragraph', content: "Please recall that many of the biggest players in the world's economic market were once students themselves. So why not you? Sign up and be part of JOINLIO's Entrepreneurship Hub now and start your journey to a better tomorrow, for yourself and society." },
        { type: 'quote', content: "It is time to begin your entrepreneurial experience. Welcome to JOINLIO! Welcome to growth and success!" }
      ]
    },
    {
      id: 3,
      title: "Wanderlust for Growth: How Travel Transforms Your Life",
      excerpt: "Travel has the unique ability to transform us in ways we never imagined. It's not just about getting away, but finding who we are.",
      category: "Travel",
      author: "JOINLIO Team",
      date: "Feb 10, 2025",
      readTime: "9 min read",
      likes: 356,
      imageSrc: tavelblog,
      content: "Travel has the unique ability to transform us in ways we never imagined. Well noted by the American author Mark Twain this goes to say, \"Travel is fatal to prejudice, bigotry, and narrow-mindedness.\"...",
      fullContent: [
        { type: 'heading', content: "Wanderlust for Growth: How Travel Transforms Your Life" },
        { type: 'paragraph', content: "Travel has the unique ability to transform us in ways we never imagined. Well noted by the American author Mark Twain this goes to say, \"Travel is fatal to prejudice, bigotry, and narrow-mindedness.\" It is not just the way to get away from it all but the chance to find out who we are and the reality we are in. Whether it is a two-day journey or a journey to an unknown territory, traveling makes us grow beyond our daily routines. They know that more than just fun it is an instrument that helps to open the world to those who have no chance to explore it." },
        { type: 'heading', content: "Personal Growth Through New Experiences" },
        { type: 'subheading', content: "Developing Adaptability and Problem-Solving Skills" },
        { type: 'paragraph', content: "Can you imagine that after arriving in a certain country, one cannot understand a word of the local language? Something as simple as ordering food or getting to your hotel is a quest. All these challenges prepare you to be able to handle situations that you have never encountered before. For instance, a tourist in Japan who has no experience with the language has to use sign language and the latest technologies such as the translator's applications. Escaping these hurdles builds a positive outlook, which is not limited to the act of traveling." },
        { type: 'subheading', content: "Building Confidence and Independence" },
        { type: 'paragraph', content: "Travel sets you out of your comfort zone and this makes the trip extraordinary. Traveling is interesting; walking through a foreign city or climbing a rough trail develops confidence. For instance, Maria was traveling alone with a backpack across South America. It also helped her gain a lot of confidence and a feeling of self-sufficiency she had never felt ever before. Unexpected situations like delayed or lost baggage at the airport or having to find a way around a subway system can cause you to rely on your instincts and skills." },
        { type: 'heading', content: "Broadening Perspectives" },
        { type: 'subheading', content: "Enhancing Cultural Understanding" },
        { type: 'paragraph', content: "A taste of different cultures gives one a different perception of life. A visit to India during Diwali may help you find out the true feel of celebrating cultural traditions and celebrating togetherness. Experiences such as these make you understand other people, and cultures and make you more conscious of the world. Cooking local meals, experiencing tea ceremonies from Japan or storytelling from Africa, can help to understand both the common features of people and their differences." },
        { type: 'subheading', content: "Breaking Stereotypes" },
        { type: 'paragraph', content: "Engaging with different individuals from diverse cultural spheres will inevitably lead the way towards breaking misconceptions. For instance, a person who is traveling to the Middle East for the first time may find politeness and friendliness that he or she did not expect. These encounters alter points of view and promote the spirit of tolerance. Observing people in their different social contexts illuminates the fullness of their lives against the stereotyped image some persons may be fed from the media or informed by others." },
        { type: 'heading', content: "Enhancing Life Skills" },
        { type: 'subheading', content: "Mastering Communication" },
        { type: 'paragraph', content: "Whether it's asking for directions in Paris or bargaining at a market in Marrakech, travel can help to develop people's verbal and non-verbal communication skills. Coping skills learned in occupational therapy formats are generally beneficial and used in the workplace and social environments. Being able to express information regardless of language development helps you to embrace people and situations at large." },
        { type: 'subheading', content: "Improving Planning and Organizational Abilities" },
        { type: 'paragraph', content: "Organization can be done through setting budgets, timetables, and resource allocation in a trip. Achieving a European tour that involves several countries for instance hones one's organizational abilities. Time management is another skill that tourists undergo the process of learning as they try to organize the activities or events they wish to attend in the course of the journey." },
        { type: 'subheading', content: "Building Resilience and Patience" },
        { type: 'paragraph', content: "There are always some mishaps like delayed trains or missed flights that are inevitable. Stress management also helps develop resilience and ability to maintain and respond calmly and appropriately in such situations. This is because, say, if you missed a train in Italy, there is always a possibility that you will stumble upon a lovely village that you did not intend to visit, in the first place. Managing risks: Business travelers are more adept at converting adversities into strengths which prepares and ready them to face life's hitches" },
        { type: 'heading', content: "Building Meaningful Connections" },
        { type: 'subheading', content: "Expanding Networks" },
        { type: 'paragraph', content: "Traveling provides an opportunity to come across people that you would otherwise never come across. For instance, a number of professionals from other organizations might be encountered when working from Bali; such encounters lead to business partnerships or new friendships. Many times these global links open up avenues for adventure, growth, or employment thereby changing your spaces in a positive way." },
        { type: 'subheading', content: "Creating Shared Experiences" },
        { type: 'paragraph', content: "People go on several group events such as the Mount Kilimanjaro climb for a lifetime friendship. When people are faced with a challenge and then they overcome it together, people become friends, friends for a lifetime. Whether it is a random drive or planning a trip in a group, every moment and connection you make with people on the trip is valuable." },
        { type: 'heading', content: "Discovering Passions and Interests" },
        { type: 'subheading', content: "Unlocking Hidden Talents" },
        { type: 'paragraph', content: "As it is rightly said, 'traveling sparks passion'. For example, Alex realized the hobby of photography while on a safari in Africa and made a satisfying occupation out of it. Likewise, frequent hikers could find they have writing ability, ability to survive in the wild, and much more while enjoying their favorite pastime." },
        { type: 'subheading', content: "Encouraging Exploration" },
        { type: 'paragraph', content: "You may attempt new things such as going snorkeling within the Maldives or taking cooking lessons in Thailand and find that you have dormant hobbies which you never suspected to exist. The act of travel becomes a means of getting in touch with one's self and making oneself even better. Cooking foods, writing diaries, poetry, singing, dancing, painting, sketching, learning languages and other melodies are some of the activities and new hobbies that many travelers take home with them." },
        { type: 'heading', content: "Creating a Positive Impact" },
        { type: 'subheading', content: "Supporting Local Communities" },
        { type: 'paragraph', content: "There are many exciting ways to travel responsibly and help save the environment, by combining volunteering with tours. Volunteering to help plant trees in Costa Rica or to teach English in Vietnam is not forgotten soon. Responsible tourism will enhance the positive development of an area so that areas of interest attract people for future generations." },
        { type: 'subheading', content: "Embracing Self-Reflection" },
        { type: 'paragraph', content: "Travel creates environments that allow for opportunities for reflection and quietness. Staring at the dawn on Machu Picchu may potentially give an individual perspective of what is important in life and what needs to be achieved. Each of us has to find time for introspection for self-realization as well as for solving the broader issues of life's path and planning during a journey or a trekking trip in the unspoiled scenery of nature." },
        { type: 'heading', content: "Transformative Outcomes" },
        { type: 'subheading', content: "Real-Life Transformations" },
        { type: 'paragraph', content: "Take for instance Rahul from Mumbai who worked for a corporate organization but later resigned, dumped his corporate car, and became a travel writer after touching Southeast Asia. Such as his case shows that travel can bring about dramatic changes in the occupation and the quality of life. Some, for instance, Sneha from Bengaluru, secured the confidence and ideas from their traveling to start up their own businesses." },
        { type: 'subheading', content: "Inspiring Success Stories" },
        { type: 'paragraph', content: "Some travelers said their travels inspired new projects in art, technology, or business or new philanthropic initiatives. For example, one of the participants in mountain trekking in Nepal has founded a non-profit organization that supports education in villages of Nepal. These experiences reveal the change that results from travel together with the waves it produces in individual and social environments." },
        { type: 'heading', content: "Inspire Action" },
        { type: 'paragraph', content: "Are you now prepared to go through your change process? JOINLIO's Travel Hub is kicking off where your next adventure will take you. With JOINLIO, every member of a traveling group will find something interesting, be it an itinerary planner, collaboration tools, student special features, and more. You can also use the site to encourage others by writing articles based on your experiences, ideas, and pictures." },
        { type: 'paragraph', content: "It does not matter if you are looking for excitement in your life, career Progress, or friends, the world is your classroom. Every time you travel you acquire experiences that make life better and create inspiration for others. We invite you to follow JOINLIO to learn, develop, and get connected by the power of traveling." },
        { type: 'quote', content: "Pack your bags because the next chapter in life is waiting for you, so why not start planning now?" }
      ]
    }
  ];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleReadMore = (post) => {
    // Pass the complete post object including fullContent
    navigate(`/blog-detail/${post.id}`, { 
      state: { 
        post: {
          ...post,
          content: post.fullContent || [], // Pass fullContent as content
          mainImage: post.imageSrc,
          authorImage: "/api/placeholder/80/80", // Default author image
          relatedArticles: [], // Add related articles if you have them
          commentList: [] // Add comments if you have them
        } 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      {/* Decorative circles for background effect */}
      {/* <div className="fixed top-20 left-20 w-72 h-72 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-40 right-40 w-80 h-80 bg-[#e6d5b3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 left-1/3 w-96 h-96 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero section with search */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Joinlio Blogs
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover how JOINLIO helps students transform their ideas into reality through Media, Entrepreneurship, and Travel.
          </p>
          
          {/* Search bar with glassmorphism */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#2CA2FB] focus:border-transparent text-gray-700 placeholder-gray-500"
              placeholder="Search for articles, topics, or authors..."
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#2CA2FB] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Search
            </button>
          </div>
        </div>
        
        {/* Category filters with glassmorphism */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4 md:justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full ${
                  activeCategory === category 
                    ? 'bg-[#2CA2FB] text-white' 
                    : 'bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm text-gray-700 hover:bg-opacity-50'
                } transition-all whitespace-nowrap font-medium`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts grid with glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredPosts.map(post => (
  <article
    key={post.id}
    onClick={() => handleReadMore(post)}
    className="group bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 border-2 border-black border-opacity-30 cursor-pointer"
  >
    <div className="relative overflow-hidden">
      <img 
        src={post.imageSrc} 
        alt={post.title} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white text-sm font-medium border border-white border-opacity-30">
        {post.category}
      </span>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#2CA2FB] transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={BlogDp} className='h-8 ' alt="blogAvatar" />
          {/* <div className="w-8 h-8 rounded-full bg-[#2CA2FB] flex items-center justify-center text-white text-xs font-medium">
            JT
          </div> */}
          <div>
            <p className="text-sm font-medium text-gray-800">{post.author}</p>
            <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-500">
          <span className="flex items-center space-x-1">
            <Heart size={16} className="text-[#e0b3c1]" />
            <span className="text-xs">{post.likes}</span>
          </span>
          {/* <span className="flex items-center space-x-1">
            <MessageSquare size={16} className="text-[#e6d5b3]" />
            <span className="text-xs">{post.comments}</span>
          </span> */}
        </div>
      </div>
    </div>
    
    {/* <div className="px-6 pb-6 pt-0">
      <div className="flex items-center space-x-1 text-[#e0b3c1] group-hover:text-[#d49dab] transition-colors group-hover:translate-x-1 transform transition-transform">
        <span className="text-sm font-medium">Read more</span>
        <ChevronRight size={16} />
      </div>
    </div> */}
  </article>
))}
        </div>
        
        {/* View more button with glassmorphism */}
        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-800 group-hover:text-[#2CA2FB] transition-colors">View more articles</span>
              <div className="w-6 h-6 rounded-full bg-[#2CA2FB] flex items-center justify-center text-white transform group-hover:rotate-90 transition-transform">
                <MoreHorizontal size={16} />
              </div>
            </div>
          </button>
        </div>
        
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

export default Blogs;