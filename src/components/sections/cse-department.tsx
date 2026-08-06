"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt, FaPhone, FaEnvelope, FaBook, FaFlask, FaUsers, FaNewspaper, FaFileAlt, FaVideo, FaGraduationCap } from "react-icons/fa";
import type { Program, FacultyMember } from "@/lib/content";

interface CSEDepartmentProps {
  program: Program;
  faculty: FacultyMember[];
}

type TabId = "overview" | "vision" | "peos" | "faculty" | "labs" | "alumni" | "syllabus" | "notices" | "innovative" | "contact";

const TABS: { id: TabId; label: string; icon: typeof FaBook }[] = [
  { id: "overview", label: "Overview", icon: FaBook },
  { id: "vision", label: "Vision & Mission", icon: FaGraduationCap },
  { id: "peos", label: "PEOs", icon: FaGraduationCap },
  { id: "faculty", label: "Faculty", icon: FaUsers },
  { id: "labs", label: "Labs", icon: FaFlask },
  { id: "alumni", label: "Alumni", icon: FaUsers },
  { id: "syllabus", label: "Syllabus", icon: FaFileAlt },
  { id: "notices", label: "Notices", icon: FaNewspaper },
  { id: "innovative", label: "Innovation", icon: FaVideo },
  { id: "contact", label: "Contact", icon: FaPhone },
];

const LABS = [
  "Programming Lab", "Data Structures Lab", "Operating Systems Lab",
  "Database Management Systems Lab", "Computer Networks Lab",
  "Software Engineering Lab", "Web Technologies Lab",
  "Artificial Intelligence Lab", "Machine Learning Lab", "Cloud Computing Lab"
];

const ALUMNI_IMAGES = [
  "/media/cse/alumni/al1.jpg", "/media/cse/alumni/al2.jpg", "/media/cse/alumni/al3.jpg",
  "/media/cse/alumni/al4.jpg", "/media/cse/alumni/al5.jpg", "/media/cse/alumni/al6.jpg",
  "/media/cse/alumni/al8.jpg", "/media/cse/alumni/al9.jpg", "/media/cse/alumni/al10.jpg"
];

const VIDEOS = [
  { title: "FCFS Scheduling Algorithm", src: "/media/cse/innovative/fcfs.mp4" },
  { title: "Process Scheduling Animation", src: "/media/cse/innovative/scheduling.mp4" }
];

const SYLLABUS = [
  { title: "1st & 2nd Semester (2022)", file: "/docs/cse/syllabus/syllabus-1st-2nd.pdf" },
  { title: "3rd & 4th Semester (2022)", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" },
  { title: "5th to 8th Semester (2022)", file: "/docs/cse/syllabus/syllabus-5th-to-8th.pdf" }
];

const NOTICES = [
  { title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }
];

export function CSEDepartmentContent({ program, faculty }: CSEDepartmentProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="/media/general/1-1024x579.jpg"
          alt="CSE Department"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00274C] via-[#00274C]/70 to-[#00274C]/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 pb-12">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <FaArrowLeft className="text-xs" />
              All Programs
            </Link>
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-[#FFCB05] mb-3">
                  {program.degree} Program
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  {program.title}
                </h1>
                <p className="text-lg text-white/80 mt-4 max-w-2xl">
                  Department of Computer Science & Engineering
                </p>
              </div>
              <div className="hidden md:block text-right shrink-0">
                <div className="text-5xl font-bold text-[#FFCB05]">{program.intake}</div>
                <div className="text-sm text-white/60 mt-1">Annual Intake</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#00274C] text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFCB05]">{program.intake}</div>
              <div className="text-sm text-white/70 mt-1">Seats</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFCB05]">{faculty.length}+</div>
              <div className="text-sm text-white/70 mt-1">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFCB05]">{LABS.length}</div>
              <div className="text-sm text-white/70 mt-1">Labs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFCB05]">NBA</div>
              <div className="text-sm text-white/70 mt-1">Accredited</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide gap-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#FFCB05] text-[#00274C]"
                    : "border-transparent text-gray-500 hover:text-[#00274C]"
                }`}
              >
                <tab.icon className="text-xs opacity-60" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#00274C] mb-6">About the Department</h2>
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
                {program.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#00274C] mb-4">Program Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-gray-50 border border-gray-100">
                  <span className="text-sm text-gray-500">Duration</span>
                  <p className="text-lg font-semibold text-[#00274C]">{program.duration}</p>
                </div>
                <div className="p-5 bg-gray-50 border border-gray-100">
                  <span className="text-sm text-gray-500">Eligibility</span>
                  <p className="text-lg font-semibold text-[#00274C]">{program.eligibility}</p>
                </div>
                <div className="p-5 bg-gray-50 border border-gray-100">
                  <span className="text-sm text-gray-500">Established</span>
                  <p className="text-lg font-semibold text-[#00274C]">{program.established}</p>
                </div>
                <div className="p-5 bg-gray-50 border border-gray-100">
                  <span className="text-sm text-gray-500">Accreditation</span>
                  <p className="text-lg font-semibold text-[#00274C]">NBA Accredited</p>
                </div>
              </div>
            </div>

            {program.highlights && program.highlights.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[#00274C] mb-4">Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-[#FFCB05]/10 border border-[#FFCB05]/20">
                      <div className="w-2 h-2 bg-[#FFCB05] rounded-full shrink-0" />
                      <span className="text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {program.relatedTabs && program.relatedTabs.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[#00274C] mb-4">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {program.relatedTabs.map((tab, i) => (
                    <a
                      key={i}
                      href={tab.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-4 text-gray-600 bg-gray-50 hover:bg-[#00274C] hover:text-white transition-colors border border-gray-100"
                    >
                      <FaExternalLinkAlt className="text-xs opacity-50 shrink-0" />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Vision & Mission */}
        {activeTab === "vision" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#00274C] mb-6">Vision</h2>
              {program.vision && (
                <blockquote className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#FFCB05] pl-6 italic">
                  {program.vision}
                </blockquote>
              )}
            </div>

            {program.mission && program.mission.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-[#00274C] mb-6">Mission</h2>
                <ul className="space-y-4">
                  {program.mission.map((m, i) => (
                    <li key={i} className="flex gap-4 text-gray-600">
                      <span className="mt-2 w-2 h-2 shrink-0 bg-[#FFCB05] rounded-full" />
                      <span className="text-lg leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* PEOs */}
        {activeTab === "peos" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#00274C] mb-6">Program Educational Objectives</h2>
              {program.peos && program.peos.length > 0 ? (
                <ol className="space-y-6 list-decimal list-inside">
                  {program.peos.map((peo, i) => (
                    <li key={i} className="text-gray-600 pl-2">
                      <span className="font-bold text-[#00274C]">PEO{i + 1}:</span>{" "}
                      <span className="text-lg leading-relaxed">{peo}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-gray-500">PEOs will be updated soon.</p>
              )}
            </div>

            <div className="p-6 bg-gray-50 border border-gray-100">
              <p className="text-gray-600">
                For detailed Program Outcomes (POs) and Program Specific Outcomes (PSOs), please refer to the official curriculum documents available on the{" "}
                <a href="https://www.mbscet.edu.in/computer-science/peos-psos-pos-cse/" target="_blank" rel="noopener noreferrer" className="text-[#00274C] underline hover:text-[#FFCB05]">
                  department website
                </a>.
              </p>
            </div>
          </div>
        )}

        {/* Faculty */}
        {activeTab === "faculty" && (
          <div>
            <h2 className="text-3xl font-bold text-[#00274C] mb-8">Faculty Members</h2>
            {faculty.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#00274C]">
                      <th className="py-4 pr-6 text-left font-bold text-[#00274C]">Name</th>
                      <th className="py-4 pr-6 text-left font-bold text-[#00274C]">Designation</th>
                      <th className="py-4 pr-6 text-left font-bold text-[#00274C]">Qualification</th>
                      <th className="py-4 text-left font-bold text-[#00274C]">Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.map((f, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 pr-6 text-[#00274C] font-medium">{f.name}</td>
                        <td className="py-4 pr-6 text-gray-600">{f.designation}</td>
                        <td className="py-4 pr-6 text-gray-600">{f.qualification}</td>
                        <td className="py-4 text-gray-600">{f.specialization}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">Faculty data will be updated soon.</p>
            )}
          </div>
        )}

        {/* Labs */}
        {activeTab === "labs" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#00274C] mb-8">Labs & Infrastructure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src="/media/cse/labs/lab1.jpg" alt="CSE Lab 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src="/media/cse/labs/lab2.jpg" alt="CSE Lab 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#00274C] mb-4">Available Labs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {LABS.map((lab) => (
                  <div key={lab} className="px-5 py-4 bg-gray-50 border border-gray-100 text-gray-700">
                    {lab}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Alumni */}
        {activeTab === "alumni" && (
          <div>
            <h2 className="text-3xl font-bold text-[#00274C] mb-8">Alumni</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {ALUMNI_IMAGES.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-gray-100">
                  <img src={img} alt={`Alumni ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Syllabus */}
        {activeTab === "syllabus" && (
          <div>
            <h2 className="text-3xl font-bold text-[#00274C] mb-8">Syllabus</h2>
            <div className="space-y-6">
              {SYLLABUS.map((item) => (
                <div key={item.file} className="bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FaFileAlt className="text-[#FFCB05] text-xl" />
                      <div>
                        <h3 className="text-base font-bold text-[#00274C]">{item.title}</h3>
                        <p className="text-sm text-gray-500">PDF Document</p>
                      </div>
                    </div>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#00274C] bg-white border border-[#00274C] hover:bg-[#00274C] hover:text-white transition-colors"
                    >
                      <FaDownload className="text-xs" />
                      Download
                    </a>
                  </div>
                  {/* Inline PDF Viewer */}
                  <div className="border-t border-gray-100">
                    <iframe
                      src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-[600px]"
                      title={item.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notices */}
        {activeTab === "notices" && (
          <div>
            <h2 className="text-3xl font-bold text-[#00274C] mb-8">Department Notices</h2>
            <div className="space-y-6">
              {NOTICES.map((item) => (
                <div key={item.file} className="bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <FaNewspaper className="text-[#FFCB05] text-xl" />
                      <div>
                        <h3 className="text-base font-bold text-[#00274C]">{item.title}</h3>
                        <p className="text-sm text-gray-500">PDF Document</p>
                      </div>
                    </div>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#00274C] bg-white border border-[#00274C] hover:bg-[#00274C] hover:text-white transition-colors"
                    >
                      <FaDownload className="text-xs" />
                      Download
                    </a>
                  </div>
                  {/* Inline PDF Viewer */}
                  <div className="border-t border-gray-100">
                    <iframe
                      src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-[600px]"
                      title={item.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Innovative Teaching */}
        {activeTab === "innovative" && (
          <div>
            <h2 className="text-3xl font-bold text-[#00274C] mb-8">Innovative Teaching Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VIDEOS.map((video) => (
                <div key={video.src} className="bg-gray-50 border border-gray-100 p-4">
                  <video
                    src={video.src}
                    className="w-full aspect-video object-cover"
                    controls
                    preload="metadata"
                  />
                  <p className="text-sm font-bold text-[#00274C] mt-3">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact HOD */}
        {activeTab === "contact" && (
          <div>
            <h2 className="text-3xl font-bold text-[#00274C] mb-8">Contact Head of Department</h2>
            <div className="bg-gray-50 border border-gray-100 p-8 max-w-lg">
              <h3 className="text-xl font-bold text-[#00274C] mb-2">Dr. Amrik Singh</h3>
              <p className="text-gray-500 mb-6">Head of Department, CSE</p>
              <div className="space-y-4">
                <a href="tel:+919419130161" className="flex items-center gap-3 text-gray-600 hover:text-[#FFCB05] transition-colors">
                  <FaPhone className="text-[#FFCB05]" />
                  +91-9419130161
                </a>
                <a href="mailto:hod.cse@mbscet.edu.in" className="flex items-center gap-3 text-gray-600 hover:text-[#FFCB05] transition-colors">
                  <FaEnvelope className="text-[#FFCB05]" />
                  hod.cse@mbscet.edu.in
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
}