import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tools from "../../assets/images/tools.png";
import support from "../../assets/images/support.png";
import services from "../../assets/images/services.png";

const HubInfo = ({ category = "travel" }) => {
  const [activeSection, setActiveSection] = useState("Tools");

  const categoryData = {
    travel: {
      Tools: {
        number: "01",
        description:
          "Essential built-in tools to simplify and enhance travel planning and execution.",
        color: "bg-green-50",
        textColor: "text-green-800",
        image: tools,
        subCategories: [
          {
            title: "Travel Planning & Organization",
            items: [
              "Itinerary Builder: Drag-and-drop planners with templates",
              "Budget Calculator: Expense tracking tool",
              "Packing Checklist Generator",
              "Route & Map Planner",
              "Group Travel Organizer",
            ],
          },
          {
            title: "Content Creation & Sharing",
            items: [
              "Photo & Video Editing Tools",
              "Blog & Vlog Templates",
              "Travel Journal & Diary",
            ],
          },
          {
            title: "Safety & Emergency Tools",
            items: [
              "Emergency Contact Shortcut",
              "Safety Checklist Generator",
              "Travel Risk Assessment Tool",
            ],
          },
        ],
      },
      Support: {
        number: "02",
        description:
          "Direct assistance and community-driven support for every stage of travel.",
        color: "bg-blue-50",
        textColor: "text-blue-800",
        image: support,
        subCategories: [
          {
            title: "Planning & Guidance Support",
            items: [
              "Peer Recommendations",
              "Mentorship Programs",
              "Destination Guides",
            ],
          },
          {
            title: "Safety & Well-being Support",
            items: [
              "24/7 Emergency Assistance Chat",
              "Health & Wellness Advice",
              "Travel Insurance Assistance",
            ],
          },
          {
            title: "Academic & Career Support",
            items: [
              "Study Abroad Counseling",
              "Volunteer Project Matching",
              "Internship & Work Abroad Guidance",
            ],
          },
        ],
      },
      Services: {
        number: "03",
        description:
          "Third-party partnerships and offerings with exclusive benefits for student travelers.",
        color: "bg-yellow-50",
        textColor: "text-yellow-800",
        image: services,
        subCategories: [
          {
            title: "Travel & Accommodation Services",
            items: [
              "Discounted Flights & Transportation",
              "Affordable Accommodation Listings",
              "Travel Gear Rentals",
            ],
          },
          {
            title: "Local Experience & Activities",
            items: [
              "Adventure Sports Packages",
              "Guided Tours & Cultural Experiences",
              "Co-working Spaces",
            ],
          },
          {
            title: "Safety & Insurance Services",
            items: [
              "Travel Insurance Providers",
              "Visa & Documentation Services",
            ],
          },
        ],
      },
    },
    entrepreneur: {
      Tools: {
        number: "01",
        description:
          "Comprehensive toolkit for planning, launching, and growing your startup.",
        color: "bg-green-50",
        textColor: "text-green-800",
        image: tools,
        subCategories: [
          {
            title: "Business Planning Tools",
            items: [
              "Business Model Canvas Generator",
              "Lean Canvas Templates",
              "Pitch Deck Builder",
              "Financial Projection Calculator",
              "Market Research Toolkit",
            ],
          },
          {
            title: "Product Development Tools",
            items: [
              "MVP Builder",
              "Wireframing & Prototyping Tools",
              "Agile Project Management Boards",
              "Idea Validation Polls",
            ],
          },
          {
            title: "Marketing & Branding Tools",
            items: [
              "Brand Identity Toolkit",
              "Social Media Content Planner",
              "SEO & Analytics Tools",
              "Growth Hacking Playbook",
            ],
          },
        ],
      },
      Support: {
        number: "02",
        description:
          "Comprehensive guidance and assistance for startup success.",
        color: "bg-blue-50",
        textColor: "text-blue-800",
        image: support,
        subCategories: [
          {
            title: "Mentorship & Coaching",
            items: [
              "Startup Mentorship Programs",
              "Industry Expert Webinars",
              "Peer-to-Peer Mentorship",
              "Idea Validation Clinics",
            ],
          },
          {
            title: "Learning & Development",
            items: [
              "Entrepreneurship Bootcamps",
              "Online Learning Modules",
              "Startup Resource Library",
              "Skill-Building Webinars",
            ],
          },
          {
            title: "Diversity & Inclusion Support",
            items: [
              "Women in Entrepreneurship Programs",
              "Minority-Owned Startup Initiatives",
              "Inclusive Leadership Training",
            ],
          },
        ],
      },
      Services: {
        number: "03",
        description:
          "Third-party partnerships and exclusive resources for startup growth.",
        color: "bg-yellow-50",
        textColor: "text-yellow-800",
        image: services,
        subCategories: [
          {
            title: "Funding & Investment Services",
            items: [
              "Access to Angel Investors & VCs",
              "Startup Grant Programs",
              "Crowdfunding Partnerships",
              "Pitch Event Access",
            ],
          },
          {
            title: "Legal & Compliance Services",
            items: [
              "Business Registration Services",
              "Trademark & Patent Filing Services",
              "Startup Legal Consultations",
            ],
          },
          {
            title: "Product Development & Tech Services",
            items: [
              "Software Development Partnerships",
              "Prototype Manufacturing Partners",
              "Cloud Hosting Discounts",
              "Design Agencies",
            ],
          },
        ],
      },
    },
    media: {
      Tools: {
        number: "01",
        description: "Built-in resources to empower creativity.",
        color: "bg-green-50",
        textColor: "text-green-800",
        image: tools,
        subCategories: [
          {
            title: "Filmmaking & Directing Tools",
            items: [
              "Storyboarding Tool – Visual planning for scripts and scenes",
              "Video Editing Software – Cloud-based basic editing suite",
              "Screenplay Formatter – AI-powered scriptwriting tool",
              "Casting Board – Find actors and crew for film projects",
            ],
          },
          {
            title: "Photography & Visual Arts Tools",
            items: [
              "Photo Editing Suite – Online retouching and enhancement tools",
              "Portfolio Builder – Personal showcase for photographers",
              "Lighting & Composition Guides – Tutorials on framing and lighting",
            ],
          },
          {
            title: "Music & Sound Production Tools",
            items: [
              "Sound Mixing & Mastering Software – Basic DAW for music creation",
              "Music Collaboration Board – Find musicians and composers for projects",
              "Royalty-Free Sound Library – Access to background scores and effects",
            ],
          },
          {
            title: "Podcasting & Audio Storytelling Tools",
            items: [
              "Podcast Recording & Editing Tool – Beginner-friendly audio editor",
              "Distribution Hub – Publish podcasts directly to platforms like Spotify",
              "Voiceover Enhancement Tool – AI-based sound improvement",
            ],
          },
          {
            title: "Graphic Design & Digital Art Tools",
            items: [
              "Illustration & Vector Tool – Online design software for digital artists",
              "Logo & Branding Maker – Templates for personal branding",
              "Typography & Font Library – Free-to-use fonts for designers",
            ],
          },
          {
            title: "Social Media & Content Creation Tools",
            items: [
              "Short Video Editor – Create content for TikTok, Instagram, YouTube Shorts",
              "Hashtag & Trend Analyzer – AI tool for social media marketing",
              "Livestreaming Integration – Connect with YouTube, Instagram, Twitch",
            ],
          },
          {
            title: "Animation & Motion Design Tools",
            items: [
              "2D & 3D Animation Studio – Beginner-friendly animation software",
              "Stop-Motion Toolkit – Frame-by-frame capture software",
              "Motion Graphics & VFX Tool – Online tool for animations and visual effects",
            ],
          },
          {
            title: "Media Journalism & Broadcasting Tools",
            items: [
              "Content Writing & Editing Suite – Tools for article creation",
              "News Aggregator & Research Tool – AI-generated news feeds for journalists",
              "Broadcasting Studio Access – Platform for hosting live news content",
            ],
          },
        ],
      },
      Services: {
        number: "02",
        description: "Third-party partnerships and external resources.",
        color: "bg-yellow-50",
        textColor: "text-yellow-800",
        image: services,
        subCategories: [
          {
            title: "Filmmaking & Directing Services",
            items: [
              "Camera & Equipment Rentals – Discounted rental services for students",
              "Film Festival Submissions – Access to submission discounts",
              "Production Studios Collaboration – Network with industry professionals",
            ],
          },
          {
            title: "Photography & Visual Arts Services",
            items: [
              "Stock Image & Texture Library – Free and discounted stock resources",
              "Studio Rental Discounts – Affordable photography spaces",
              "Printing & Framing Partners – Deals on portfolio printing services",
            ],
          },
          {
            title: "Music & Sound Production Services",
            items: [
              "Instrument & Gear Rentals – Student discounts for musical equipment",
              "Music Licensing & Publishing – Guidance on copyright and royalties",
              "DJ & Sound Engineering Workshops – Certified training programs",
            ],
          },
          {
            title: "Podcasting & Audio Storytelling Services",
            items: [
              "Podcast Hosting & Distribution – Direct platform partnerships",
              "Voiceover & Dubbing Agencies – Affordable voice actors for content",
              "Recording Studio Listings – Exclusive access to recording spaces",
            ],
          },
          {
            title: "Fashion & Modeling Services",
            items: [
              "Runway & Fashion Week Entry – Special passes for student designers",
              "Modeling Agencies Collaboration – Talent scouting for student models",
              "Fashion Show Photography Discounts – Low-cost professional photoshoots",
            ],
          },
          {
            title: "Graphic Design & Digital Art Services",
            items: [
              "Design Software Discounts – Partnerships with Adobe, Canva, Figma",
              "Freelance Job Listings – Paid gigs for student designers",
              "Online Portfolio Hosting – Affordable website hosting for creatives",
            ],
          },
          {
            title: "Social Media & Content Creation Services",
            items: [
              "Influencer Brand Deals – Connect students with social media sponsorships",
              "Ad Revenue & Monetization Services – Guidance on earning from content",
              "YouTube & TikTok Growth Strategy Consultations – 1-on-1 coaching",
            ],
          },
          {
            title: "Theater & Performing Arts Services",
            items: [
              "Stage Rental Partnerships – Affordable theater space for student plays",
              "Casting Agency Deals – Student entry to professional auditions",
              "Voice Acting Jobs & Training – Paid opportunities and workshops",
            ],
          },
          {
            title: "Animation & Motion Design Services",
            items: [
              "Animation Studio Internship Listings – Work opportunities for students",
              "Discounted Software Access – Autodesk, Blender, After Effects partnerships",
              "Crowdfunding Support for Animated Films – Assistance in launching projects",
            ],
          },
          {
            title: "Media Journalism & Broadcasting Services",
            items: [
              "Internships at News Agencies – Work experience programs",
              "Journalism Workshops & Mentorships – Learning from industry professionals",
              "Live Broadcasting Partnership – Opportunities to air student content",
            ],
          },
        ],
      },
      Support: {
        number: "03",
        description: "Mentorship, community, and learning.",
        color: "bg-blue-50",
        textColor: "text-blue-800",
        image: support,
        subCategories: [
          {
            title: "Creative Mentorship Programs",
            items: [
              "1-on-1 Guidance from Industry Experts – Get feedback from professionals",
              "Group Learning & Masterclasses – Live workshops on media topics",
            ],
          },
          {
            title: "Peer Review & Feedback Forums",
            items: [
              "Photography & Video Critique Boards – Peer-based learning spaces",
              "Portfolio Review Sessions – Feedback from professionals and peers",
            ],
          },
          {
            title: "Networking & Community Events",
            items: [
              "Student Film & Art Festivals – Showcase work at exclusive events",
              "Collaboration Forums – Match with creatives for projects",
            ],
          },
          {
            title: "Content Monetization & Business Guidance",
            items: [
              "Freelance & Gig Support – Help setting up paid creative services",
              "Monetization Coaching for Digital Content – Learn how to make money from art",
            ],
          },
          {
            title: "Creative Writing & Media Journalism Support",
            items: [
              "Editorial Feedback Groups – Peer-to-peer content editing",
              "Journalism Scholarships & Fellowships – Support for aspiring reporters",
            ],
          },
        ],
      },
    },
  };

  const sectionData = categoryData[category];

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="h-fit flex flex-col lg:flex-row">
      {/* Sidebar for Large Screens */}
      <div className="hidden h-fit lg:block w-1/4 bg-white/40 backdrop-blur-sm p-8">
        {Object.entries(sectionData).map(([section, data]) => (
          <motion.div
            key={section}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer mb-4 p-4 rounded-lg transition-all duration-300 flex justify-between items-center ${
              activeSection === section
                ? "bg-white shadow-lg "
                : "hover:bg-gray-200"
            }`}
          >
            <div>
              <div
                className={`text-6xl font-bold opacity-20 ${data.textColor}`}
              >
                {data.number}
              </div>
              <h2 className={`text-xl font-semibold mt-2 ${data.textColor}`}>
                {section}
              </h2>
            </div>
            <img src={data.image} className="h-12" alt={`${section} icon`} />
          </motion.div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="lg:hidden">
        {Object.entries(sectionData).map(([section, data]) => (
          <motion.div
            key={section}
            className={`p-4 cursor-pointer border-b ${data.color}`}
          >
            <div
              className="flex justify-between items-center"
              onClick={() =>
                setActiveSection(section === activeSection ? "" : section)
              }
            >
              <div className="flex justify-between items-center w-full">
                <div>
                  <div
                    className={`text-4xl font-bold opacity-20 ${data.textColor}`}
                  >
                    {data.number}
                  </div>
                  <h2 className={`text-xl font-semibold ${data.textColor}`}>
                    {section}
                  </h2>
                </div>
                <img
                  src={data.image}
                  className="h-12 mr-4"
                  alt={`${section} icon`}
                />
              </div>
              <motion.span
                animate={{ rotate: activeSection === section ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {activeSection === section && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  className={`${data.textColor} space-y-4`}
                >
                  <p className="mt-4">{data.description}</p>
                  {data.subCategories.map((category, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg ">
                      <h3 className="font-bold mb-2">{category.title}</h3>
                      <ul className="list-disc list-inside">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Content Area for Large Screens */}
      <div className="hidden lg:block w-3/4 p-8 pt-0">
        <AnimatePresence mode="wait">
          {Object.entries(sectionData).map(
            ([section, data]) =>
              activeSection === section && (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`${data.color} min-h-full p-8 rounded-lg`}
                >
                  <div
                    className={`text-8xl font-bold opacity-20 mb-4 ${data.textColor}`}
                  >
                    {data.number}
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 ${data.textColor}`}>
                    {section}
                  </h2>
                  <p className={`text-xl mb-6 ${data.textColor}`}>
                    {data.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {data.subCategories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg border-2 border-black border-opacity-10"
                      >
                        <h3 className="font-bold mb-2">{category.title}</h3>
                        <ul className="list-disc list-inside">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HubInfo;
