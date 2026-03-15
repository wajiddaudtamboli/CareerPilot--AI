"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function JobPrepHomepage() {
  const router = useRouter();

  const teamMembers = useMemo(
    () => [
      {
        name: "Wajid Daud Tamboli",
        role: "Full Stack Developer",
        content:
          "Passionate about creating AI-powered solutions that transform career preparation and help students achieve their professional goals.",
        rating: 5,
      },
      {
        name: "Laxmi Javalkote",
        role: "Frontend Developer",
        content:
          "Dedicated to building intuitive user experiences that make complex learning processes accessible and engaging for everyone.",
        rating: 5,
      },
      {
        name: "Sakshi Madgundi",
        role: "UI/UX Designer",
        content:
          "Committed to crafting beautiful, user-centered designs that enhance learning outcomes and create meaningful experiences.",
        rating: 5,
      },
      {
        name: "Shaikh Parvej",
        role: "Research",
        content:
          "Focused on developing scalable infrastructure that supports learners in their journey to career success.",
        rating: 5,
      },
      {
        name: "Bagwan Zaid",
        role: "Research",
        content:
          "Advancing ML to provide personalized career guidance and intelligent skill assessment for optimal learning paths.",
        rating: 5,
      },
    ],
    []
  );

  const ecosystemModules = useMemo(
    () => [
      {
        title: "Career Planning",
        description: "Explore departments, job roles, and personalized roadmaps.",
        icon: Target,
        href: "/careerplanning?page=DepartmentJobRoles",
      },
      {
        title: "Learn",
        description: "Courses, certifications, projects, competitions, and aptitude.",
        icon: GraduationCap,
        href: "/learn?page=IndustryCertifications",
      },
      {
        title: "Preparation",
        description: "Mock interviews, soft skills, and coding round practice.",
        icon: BriefcaseBusiness,
        href: "/preparation/mockinterview",
      },
      {
        title: "Company",
        description: "Hiring platforms, internships, challenges, and career portals.",
        icon: Building2,
        href: "/company/hiring-platforms",
      },
    ],
    []
  );

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900"
    >
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm border bg-white/70 border-slate-200 text-slate-700"
              >
                <Sparkles className="w-4 h-4 text-slate-700" />
                <span>CareerPilot Ecosystem</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05]">
                Build your
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  {" "}
                  career path
                </span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed text-gray-700"
              >
                Plan your career, learn skills, build projects, prepare for
                interviews, and explore hiring workflows — in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push("/careerplanning?page=DepartmentJobRoles")}
                  className="group px-8 py-4 rounded-full font-black transition-colors flex items-center justify-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-900 hover:from-blue-200 hover:to-indigo-200"
                >
                  <span className="font-black text-gray-900">Start Career</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => router.push("/learn?page=IndustryCertifications")}
                  className="px-8 py-4 rounded-full font-black border backdrop-blur-sm transition-colors bg-white/90 border-slate-300 text-gray-900 hover:bg-white"
                >
                  <span className="font-black text-gray-900">Explore Learn</span>
                </button>
              </div>

            </div>

            {/* Image panel */}
            <div className="rounded-3xl border backdrop-blur-sm bg-white/70 border-slate-200 shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/duhhsnbwh/image/upload/v1768018787/WhatsApp_Image_2026-01-10_at_9.37.16_AM_cqzhca.jpg"
                alt="CareerPilot AI"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CareerPilot Modules (ecosystem) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              CareerPilot Modules
            </h2>
            <p
              className="mt-2 text-lg text-gray-700 mx-auto"
            >
              Genuine features across planning, learning, preparation, and hiring
              workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemModules.map((mod) => (
              <button
                key={mod.title}
                onClick={() => router.push(mod.href)}
                className="text-left rounded-3xl p-7 border backdrop-blur-sm transition-transform hover:scale-[1.01] bg-white/70 border-slate-200 hover:bg-white shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  <mod.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="text-lg font-black text-gray-900"
                >
                  {mod.title}
                </div>
                <div
                  className="mt-2 text-sm leading-relaxed text-gray-700"
                >
                  {mod.description}
                </div>
                <div
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                >
                  <span>Open</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center">
            Meet Our{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-500"
            >
              Team
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-3xl text-gray-700 mx-auto text-center"
          >
            The people building CareerPilot AI with a student-first mindset.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl p-8 border backdrop-blur-sm bg-white/70 border-slate-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-lg font-black text-gray-900"
                    >
                      {member.name}
                    </div>
                    <div
                      className="text-sm font-semibold text-gray-700"
                    >
                      {member.role}
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: member.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 text-amber-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p
                  className="mt-5 leading-relaxed text-gray-700"
                >
                  {member.content}
                </p>
              </div>
            ))}

            {/* Mentor (Under Guidance) */}
            <div className="rounded-3xl p-8 border backdrop-blur-sm bg-white/70 border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600">
                  PS
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-gray-700">Under Guidance of</div>
                  <div className="text-lg font-black text-gray-900">Prof S.S. Konda</div>
                  <div className="text-sm font-semibold text-gray-700">Mentor</div>
                  <div className="mt-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-amber-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-gray-700">
                Guiding CareerPilot AI with academic and industry-aligned mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
