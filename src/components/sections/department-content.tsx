"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft, FaDownload, FaExternalLinkAlt, FaPhone, FaEnvelope, FaUsers, FaBook, FaFlask, FaGraduationCap, FaNewspaper, FaFileAlt, FaVideo, FaStar } from "react-icons/fa";
import type { Program, FacultyMember } from "@/lib/content";

interface DepartmentContentProps {
  program: Program;
  faculty?: FacultyMember[];
}

const DEPT_DATA: Record<string, {
  image: string;
  description: string;
  labs: string[];
  labImages: string[];
  alumniImages: string[];
  videos: { title: string; src: string }[];
  syllabus: { title: string; file: string }[];
  notices: { title: string; file: string }[];
  contactHod: { name: string; email: string; phone: string };
  teachingLearning: string;
}> = {
  "cse": {
    image: "/media/general/1-1024x579.jpg",
    description: "Computer Engineering is a dynamic field that bridges the gap between the physical and the elusive realm of software. It equips you with the knowledge and skills to design, develop, and implement the very foundation of modern technology. The Department of Computer Science & Engineering was established in 1999 as one of the founding departments of MBSCET.",
    labs: [
      "Programming Lab",
      "Data Structures Lab",
      "Operating Systems Lab",
      "Database Management Systems Lab",
      "Computer Networks Lab",
      "Software Engineering Lab",
      "Web Technologies Lab",
      "Artificial Intelligence Lab",
      "Machine Learning Lab",
      "Cloud Computing Lab",
    ],
    labImages: ["/media/cse/labs/lab1.jpg", "/media/cse/labs/lab2.jpg"],
    alumniImages: ["/media/cse/alumni/al1.jpg", "/media/cse/alumni/al2.jpg", "/media/cse/alumni/al3.jpg", "/media/cse/alumni/al4.jpg", "/media/cse/alumni/al5.jpg", "/media/cse/alumni/al6.jpg", "/media/cse/alumni/al8.jpg", "/media/cse/alumni/al9.jpg", "/media/cse/alumni/al10.jpg"],
    videos: [
      { title: "FCFS Scheduling Algorithm", src: "/media/cse/innovative/fcfs.mp4" },
      { title: "Process Scheduling Animation", src: "/media/cse/innovative/scheduling.mp4" },
    ],
    syllabus: [
      { title: "Syllabus 3rd & 4th Semester (2022)", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" },
      { title: "Syllabus 5th to 8th Semester (2022)", file: "/docs/cse/syllabus/syllabus-5th-to-8th.pdf" },
    ],
    notices: [
      { title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" },
    ],
    contactHod: {
      name: "Dr. Amrik Singh",
      email: "hod.cse@mbscet.edu.in",
      phone: "+91-9419130161",
    },
    teachingLearning: "/docs/cse/syllabus/syllabus-3rd-4th.pdf",
  },
};

const TABS = [
  { id: "overview", label: "Overview", icon: FaBook },
  { id: "vision", label: "Vision & Mission", icon: FaStar },
  { id: "peos", label: "PEOs/POs/PSOs", icon: FaGraduationCap },
  { id: "faculty", label: "Faculty", icon: FaUsers },
  { id: "labs", label: "Labs", icon: FaFlask },
  { id: "alumni", label: "Alumni", icon: FaUsers },
  { id: "syllabus", label: "Syllabus", icon: FaFileAlt },
  { id: "notices", label: "Notices", icon: FaNewspaper },
  { id: "innovative", label: "Innovative Teaching", icon: FaVideo },
  { id: "contact", label: "Contact HOD", icon: FaPhone },
];

export function DepartmentContent({ program, faculty = [] }: DepartmentContentProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const deptData = DEPT_DATA[program.slug] || DEPT_DATA["cse"];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative aspect-[16/6] md:aspect-[16/4] overflow-hidden">
        <img
          src={deptData.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00274C] via-[#00274C]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-10 md:pb-14">
          <Link href="/academics" className="inline-flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-colors mb-4">
            <FaArrowLeft className="text-[10px]" />
            All Programs
          </Link>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-2">
                {program.degree} Program
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {program.title}
              </h1>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl md:text-3xl font-bold text-[#FFCB05]">{program.intake}</div>
              <div className="text-xs text-white/50">seats</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex overflow-x-auto scrollbar-hide gap-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#FFCB05] text-[#00274C]"
                    : "border-transparent text-[#5C6370] hover:text-[#00274C]"
                }`}
              >
                <tab.icon className="text-xs" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-6">About the Department</h2>
            <p className="text-[#5C6370] leading-relaxed mb-8 max-w-3xl">{deptData.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-[#F9FAFB]">
                <div className="text-2xl font-bold text-[#00274C]">{program.intake}</div>
                <div className="text-sm text-[#5C6370] mt-1">Annual Intake</div>
              </div>
              <div className="p-6 bg-[#F9FAFB]">
                <div className="text-2xl font-bold text-[#00274C]">{faculty.length}+</div>
                <div className="text-sm text-[#5C6370] mt-1">Faculty Members</div>
              </div>
              <div className="p-6 bg-[#F9FAFB]">
                <div className="text-2xl font-bold text-[#00274C]">{deptData.labs.length}</div>
                <div className="text-sm text-[#5C6370] mt-1">Labs</div>
              </div>
              <div className="p-6 bg-[#F9FAFB]">
                <div className="text-2xl font-bold text-[#00274C]">NBA</div>
                <div className="text-sm text-[#5C6370] mt-1">Accredited</div>
              </div>
            </div>

            {/* Related Tabs */}
            {program.relatedTabs && program.relatedTabs.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#00274C] mb-4">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {program.relatedTabs.map((tab, i) => (
                    <a
                      key={i}
                      href={tab.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 text-sm text-[#5C6370] bg-[#F9FAFB] hover:bg-[#00274C] hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[10px] shrink-0" />
                      <span>{tab.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Vision Tab */}
        {activeTab === "vision" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Vision & Mission</h2>
            {program.vision && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#00274C] mb-4">Vision</h3>
                <blockquote className="text-[#5C6370] leading-relaxed border-l-2 border-[#FFCB05] pl-6">
                  {program.vision}
                </blockquote>
              </div>
            )}
            {program.mission && program.mission.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#00274C] mb-4">Mission</h3>
                <ul className="space-y-3">
                  {program.mission.map((m, i) => (
                    <li key={i} className="flex gap-3 text-[#5C6370]">
                      <span className="mt-2 size-1.5 shrink-0 bg-[#FFCB05] rounded-full" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* PEOs Tab */}
        {activeTab === "peos" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">PEOs, POs & PSOs</h2>
            {program.peos && program.peos.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#00274C] mb-4">Program Educational Objectives (PEOs)</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  {program.peos.map((peo, i) => (
                    <li key={i} className="text-[#5C6370] pl-2">
                      <span className="font-bold text-[#00274C]">PEO{i + 1}:</span> {peo}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            <div className="bg-[#F9FAFB] p-6">
              <p className="text-sm text-[#5C6370]">
                For detailed POs and PSOs, please refer to the official curriculum documents.
              </p>
            </div>
          </div>
        )}

        {/* Faculty Tab */}
        {activeTab === "faculty" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Faculty Members</h2>
            {faculty.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E7EB]">
                      <th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Name</th>
                      <th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Designation</th>
                      <th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Qualification</th>
                      <th className="pb-4 text-left font-bold text-[#00274C]">Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.map((f, i) => (
                      <tr key={i} className="border-b border-[#E5E7EB]/50 last:border-b-0">
                        <td className="py-4 pr-6 text-[#00274C] font-medium">{f.name}</td>
                        <td className="py-4 pr-6 text-[#5C6370]">{f.designation}</td>
                        <td className="py-4 pr-6 text-[#5C6370]">{f.qualification}</td>
                        <td className="py-4 text-[#5C6370]">{f.specialization}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-[#5C6370]">Faculty data will be updated soon.</p>
            )}
          </div>
        )}

        {/* Labs Tab */}
        {activeTab === "labs" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Labs & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {deptData.labImages.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden bg-[#F9FAFB]">
                  <img src={img} alt={`CSE Lab ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <h3 className="text-lg font-bold text-[#00274C] mb-4">Available Labs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {deptData.labs.map((lab) => (
                <div key={lab} className="px-4 py-3 bg-[#F9FAFB] text-sm text-[#5C6370]">
                  {lab}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alumni Tab */}
        {activeTab === "alumni" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">CSE Alumni</h2>
            <p className="text-[#5C6370] mb-8 max-w-3xl">
              Our alumni have gone on to work at leading companies and organizations.
              Here are some of our distinguished alumni.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {deptData.alumniImages.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-[#F9FAFB]">
                  <img src={img} alt={`Alumni ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Syllabus Tab */}
        {activeTab === "syllabus" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Syllabus</h2>
            <div className="space-y-4">
              {deptData.syllabus.map((item) => (
                <a
                  key={item.file}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-[#F9FAFB] hover:bg-[#00274C] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <FaFileAlt className="text-[#FFCB05] text-lg" />
                    <div>
                      <h3 className="text-base font-bold text-[#00274C] group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors">PDF Document</p>
                    </div>
                  </div>
                  <FaDownload className="text-[#9CA3AF] group-hover:text-[#FFCB05] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Notices Tab */}
        {activeTab === "notices" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Department Notices</h2>
            <div className="space-y-4">
              {deptData.notices.map((item) => (
                <a
                  key={item.file}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-[#F9FAFB] hover:bg-[#00274C] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <FaNewspaper className="text-[#FFCB05] text-lg" />
                    <div>
                      <h3 className="text-base font-bold text-[#00274C] group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors">PDF Document</p>
                    </div>
                  </div>
                  <FaDownload className="text-[#9CA3AF] group-hover:text-[#FFCB05] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Innovative Teaching Tab */}
        {activeTab === "innovative" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Innovative Teaching Methods</h2>
            <p className="text-[#5C6370] mb-8 max-w-3xl">
              The CSE department uses innovative teaching methods including video lectures,
              animations, and interactive demonstrations to enhance learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deptData.videos.map((video) => (
                <div key={video.src} className="bg-[#F9FAFB] p-4">
                  <video
                    src={video.src}
                    className="w-full aspect-video object-cover rounded"
                    controls
                    preload="metadata"
                  />
                  <p className="text-sm font-bold text-[#00274C] mt-3">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact HOD Tab */}
        {activeTab === "contact" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Contact Head of Department</h2>
            <div className="bg-[#F9FAFB] p-8 max-w-lg">
              <h3 className="text-lg font-bold text-[#00274C] mb-2">{deptData.contactHod.name}</h3>
              <p className="text-sm text-[#5C6370] mb-4">Head of Department, CSE</p>
              <div className="space-y-3 text-sm text-[#5C6370]">
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#FFCB05] text-xs" />
                  <a href={`tel:${deptData.contactHod.phone}`} className="hover:text-[#FFCB05] transition-colors">{deptData.contactHod.phone}</a>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#FFCB05] text-xs" />
                  <a href={`mailto:${deptData.contactHod.email}`} className="hover:text-[#FFCB05] transition-colors">{deptData.contactHod.email}</a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
