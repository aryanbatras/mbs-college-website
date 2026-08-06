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
}> = {
  "cse": {
    image: "/media/general/1-1024x579.jpg",
    description: "Computer Engineering is a dynamic field that bridges the gap between the physical and the elusive realm of software. It equips you with the knowledge and skills to design, develop, and implement the very foundation of modern technology. The Department of Computer Science & Engineering was established in 1999 as one of the founding departments of MBSCET.",
    labs: ["Programming Lab", "Data Structures Lab", "Operating Systems Lab", "Database Management Systems Lab", "Computer Networks Lab", "Software Engineering Lab", "Web Technologies Lab", "Artificial Intelligence Lab", "Machine Learning Lab", "Cloud Computing Lab"],
    labImages: ["/media/cse/labs/lab1.jpg", "/media/cse/labs/lab2.jpg"],
    alumniImages: ["/media/cse/alumni/al1.jpg", "/media/cse/alumni/al2.jpg", "/media/cse/alumni/al3.jpg", "/media/cse/alumni/al4.jpg", "/media/cse/alumni/al5.jpg", "/media/cse/alumni/al6.jpg", "/media/cse/alumni/al8.jpg", "/media/cse/alumni/al9.jpg", "/media/cse/alumni/al10.jpg"],
    videos: [{ title: "FCFS Scheduling Algorithm", src: "/media/cse/innovative/fcfs.mp4" }, { title: "Process Scheduling Animation", src: "/media/cse/innovative/scheduling.mp4" }],
    syllabus: [{ title: "Syllabus 3rd & 4th Semester (2022)", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }, { title: "Syllabus 5th to 8th Semester (2022)", file: "/docs/cse/syllabus/syllabus-5th-to-8th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Dr. Amrik Singh", email: "hod.cse@mbscet.edu.in", phone: "+91-9419130161" },
  },
  "ee": {
    image: "/media/general/10-1024x768.jpeg",
    description: "The Department of Electrical Engineering, established in 1999, addresses power systems, electrical machine design, and Industry 4.0 technological innovations. The department has been NBA accredited, recognizing its commitment to quality education. Till date 21 batches of Electrical Engineering Graduates have been awarded degrees.",
    labs: ["Electrical Machines Lab", "Power Electronics Lab", "Control Systems Lab", "Power Systems Lab", "Measurements & Instrumentation Lab", "Network Analysis Lab", "Project Lab"],
    labImages: ["/media/ee/labs/lab1.png", "/media/ee/labs/lab2.png", "/media/ee/labs/lab3.png"],
    alumniImages: ["/media/ee/alumni/e1.png", "/media/ee/alumni/e2.png", "/media/ee/alumni/e3.png", "/media/ee/alumni/e4.png", "/media/ee/alumni/e6.png", "/media/ee/alumni/e7.png", "/media/ee/alumni/karamdeep.jpg", "/media/ee/alumni/prabjyot.jpg"],
    videos: [],
    syllabus: [{ title: "EE Syllabus", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Dr. Nitin Langer", email: "hod.ee@mbscet.edu.in", phone: "+91-9419130161" },
  },
  "ece": {
    image: "/media/general/1-1-1024x579.jpeg",
    description: "Electronics & Communication Engineering applies science and math to practical communication problems, involving research, design, development, and testing of electronic equipment used in various communication systems. The department focuses on creating professionals with strong technical foundations in core electronics, signal processing, embedded systems, and interdisciplinary workshops including nanotechnology.",
    labs: ["Analog Electronics Lab", "Digital Electronics Lab", "Communication Systems Lab", "Signal Processing Lab", "VLSI Design Lab", "Microprocessor & Microcontroller Lab", "Project Lab"],
    labImages: ["/media/general/10-1024x768.jpeg"],
    alumniImages: [],
    videos: [],
    syllabus: [{ title: "ECE Syllabus", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Dr. Sanjeev Singh", email: "hod.ece@mbscet.edu.in", phone: "+91-9419130161" },
  },
  "me": {
    image: "/media/general/11-1024x768.jpg",
    description: "The Department of Mechanical Engineering was established in 1999. It offers B.Tech in Mechanical Engineering with an intake of 30 students. The department has been NBA accredited, recognizing its commitment to quality education. The department covers manufacturing processes, additive manufacturing, thermal engineering, and mechanical design.",
    labs: ["CAD/CAM Lab", "Fluid Mechanics Lab", "Thermal Engineering Lab", "Manufacturing Processes Lab", "Strength of Materials Lab", "Theory of Machines Lab", "Project Lab"],
    labImages: ["/media/general/11-1024x768.jpg"],
    alumniImages: [],
    videos: [],
    syllabus: [{ title: "ME Syllabus", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Dr. Ritesh Sharma", email: "hod.me@mbscet.edu.in", phone: "+91-9419130161" },
  },
  "civil": {
    image: "/media/general/2-1-1024x576.jpg",
    description: "Civil Engineering Department started in MBS College of Engineering and Technology, Jammu in the year 2023 with an intake of 60 students. The main areas of the course includes Environmental Engineering, Structure analysis, Building Construction and Materials, Surveying, Engineering Geology, Water Supply Engineering, Fluid Mechanics, Geotechnical Engineering, Construction Planning & Management, Design of Steel Structures, Design of Hydraulic Structures and Disaster Management and Mitigations.",
    labs: ["Survey Lab", "Fluid Mechanics Lab", "Strength of Materials Lab", "Geotechnical Engineering Lab", "Transportation Engineering Lab", "Environmental Engineering Lab"],
    labImages: ["/media/general/2-1-1024x576.jpg"],
    alumniImages: [],
    videos: [],
    syllabus: [{ title: "Civil Syllabus", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Mr. Gurmeet Singh", email: "hod.civil@mbscet.edu.in", phone: "+91-9419130161" },
  },
  "it": {
    image: "/media/general/2-1024x768.jpeg",
    description: "The Department of Information Technology in MBS College of Engineering and Technology was established in 1999. We are one of the best among few institutions growing in the state in the field of Information Technology. Our students are placed in reputed companies like Google, Microsoft, Intel, Adobe, TCS, Infosys, Wipro, HCL, Banking Sector, Government Sector etc. The IT Department aims at IT based Learning, Development of Entrepreneurship among student and become a Centre of Excellence.",
    labs: ["Programming Lab", "Web Technologies Lab", "Database Lab", "Network Lab", "Software Engineering Lab", "Cloud Computing Lab"],
    labImages: ["/media/general/2-1024x768.jpeg"],
    alumniImages: [],
    videos: [],
    syllabus: [{ title: "IT Syllabus", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Mr. Surinder Kumar", email: "hod.it@mbscet.edu.in", phone: "+91-9419130161" },
  },
  "mca": {
    image: "/media/general/3-1024x576.jpeg",
    description: "The MCA program at MBSCET provides comprehensive education in computer applications. The program prepares students for careers in software development, system analysis, and IT management.",
    labs: ["Programming Lab", "Web Technologies Lab", "Database Lab", "Network Lab"],
    labImages: ["/media/general/3-1024x576.jpeg"],
    alumniImages: [],
    videos: [],
    syllabus: [{ title: "MCA Syllabus", file: "/docs/cse/syllabus/syllabus-3rd-4th.pdf" }],
    notices: [{ title: "B.Tech Additional Form 2024", file: "/docs/cse/notices/btech-add-form-2024.pdf" }],
    contactHod: { name: "Dr. Amrik Singh", email: "hod.mca@mbscet.edu.in", phone: "+91-9419130161" },
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
        <img src={deptData.image} alt={program.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00274C] via-[#00274C]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pb-10 md:pb-14">
          <Link href="/academics" className="inline-flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-colors mb-4">
            <FaArrowLeft className="text-[10px]" />
            All Programs
          </Link>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFCB05] mb-2">{program.degree} Program</p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">{program.title}</h1>
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
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id ? "border-[#FFCB05] text-[#00274C]" : "border-transparent text-[#5C6370] hover:text-[#00274C]"}`}>
                <tab.icon className="text-xs" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-6">About the Department</h2>
            <p className="text-[#5C6370] leading-relaxed mb-8 max-w-3xl">{deptData.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-[#F9FAFB]"><div className="text-2xl font-bold text-[#00274C]">{program.intake}</div><div className="text-sm text-[#5C6370] mt-1">Annual Intake</div></div>
              <div className="p-6 bg-[#F9FAFB]"><div className="text-2xl font-bold text-[#00274C]">{faculty.length}+</div><div className="text-sm text-[#5C6370] mt-1">Faculty Members</div></div>
              <div className="p-6 bg-[#F9FAFB]"><div className="text-2xl font-bold text-[#00274C]">{deptData.labs.length}</div><div className="text-sm text-[#5C6370] mt-1">Labs</div></div>
              <div className="p-6 bg-[#F9FAFB]"><div className="text-2xl font-bold text-[#00274C]">NBA</div><div className="text-sm text-[#5C6370] mt-1">Accredited</div></div>
            </div>
            {program.relatedTabs && program.relatedTabs.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#00274C] mb-4">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {program.relatedTabs.map((tab, i) => (
                    <a key={i} href={tab.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 text-sm text-[#5C6370] bg-[#F9FAFB] hover:bg-[#00274C] hover:text-white transition-colors">
                      <FaExternalLinkAlt className="text-[10px] shrink-0" />
                      <span>{tab.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "vision" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Vision & Mission</h2>
            {program.vision && (<div className="mb-8"><h3 className="text-lg font-bold text-[#00274C] mb-4">Vision</h3><blockquote className="text-[#5C6370] leading-relaxed border-l-2 border-[#FFCB05] pl-6">{program.vision}</blockquote></div>)}
            {program.mission && program.mission.length > 0 && (<div><h3 className="text-lg font-bold text-[#00274C] mb-4">Mission</h3><ul className="space-y-3">{program.mission.map((m, i) => (<li key={i} className="flex gap-3 text-[#5C6370]"><span className="mt-2 size-1.5 shrink-0 bg-[#FFCB05] rounded-full" />{m}</li>))}</ul></div>)}
          </div>
        )}

        {activeTab === "peos" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">PEOs, POs & PSOs</h2>
            {program.peos && program.peos.length > 0 && (<div className="mb-8"><h3 className="text-lg font-bold text-[#00274C] mb-4">Program Educational Objectives (PEOs)</h3><ol className="space-y-4 list-decimal list-inside">{program.peos.map((peo, i) => (<li key={i} className="text-[#5C6370] pl-2"><span className="font-bold text-[#00274C]">PEO{i + 1}:</span> {peo}</li>))}</ol></div>)}
            <div className="bg-[#F9FAFB] p-6"><p className="text-sm text-[#5C6370]">For detailed POs and PSOs, please refer to the official curriculum documents.</p></div>
          </div>
        )}

        {activeTab === "faculty" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Faculty Members</h2>
            {faculty.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[#E5E7EB]"><th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Name</th><th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Designation</th><th className="pb-4 pr-6 text-left font-bold text-[#00274C]">Qualification</th><th className="pb-4 text-left font-bold text-[#00274C]">Specialization</th></tr></thead>
                  <tbody>{faculty.map((f, i) => (<tr key={i} className="border-b border-[#E5E7EB]/50 last:border-b-0"><td className="py-4 pr-6 text-[#00274C] font-medium">{f.name}</td><td className="py-4 pr-6 text-[#5C6370]">{f.designation}</td><td className="py-4 pr-6 text-[#5C6370]">{f.qualification}</td><td className="py-4 text-[#5C6370]">{f.specialization}</td></tr>))}</tbody>
                </table>
              </div>
            ) : (<p className="text-[#5C6370]">Faculty data will be updated soon.</p>)}
          </div>
        )}

        {activeTab === "labs" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Labs & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">{deptData.labImages.map((img, i) => (<div key={i} className="aspect-[4/3] overflow-hidden bg-[#F9FAFB]"><img src={img} alt={`Lab ${i + 1}`} className="w-full h-full object-cover" loading="lazy" /></div>))}</div>
            <h3 className="text-lg font-bold text-[#00274C] mb-4">Available Labs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{deptData.labs.map((lab) => (<div key={lab} className="px-4 py-3 bg-[#F9FAFB] text-sm text-[#5C6370]">{lab}</div>))}</div>
          </div>
        )}

        {activeTab === "alumni" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Alumni</h2>
            {deptData.alumniImages.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">{deptData.alumniImages.map((img, i) => (<div key={i} className="aspect-square overflow-hidden bg-[#F9FAFB]"><img src={img} alt={`Alumni ${i + 1}`} className="w-full h-full object-cover" loading="lazy" /></div>))}</div>
            ) : (<p className="text-[#5C6370]">Alumni photos will be updated soon.</p>)}
          </div>
        )}

        {activeTab === "syllabus" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Syllabus</h2>
            <div className="space-y-4">{deptData.syllabus.map((item) => (<a key={item.file} href={item.file} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-[#F9FAFB] hover:bg-[#00274C] transition-colors group"><div className="flex items-center gap-4"><FaFileAlt className="text-[#FFCB05] text-lg" /><div><h3 className="text-base font-bold text-[#00274C] group-hover:text-white transition-colors">{item.title}</h3><p className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors">PDF Document</p></div></div><FaDownload className="text-[#9CA3AF] group-hover:text-[#FFCB05] transition-colors" /></a>))}</div>
          </div>
        )}

        {activeTab === "notices" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Department Notices</h2>
            <div className="space-y-4">{deptData.notices.map((item) => (<a key={item.file} href={item.file} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-[#F9FAFB] hover:bg-[#00274C] transition-colors group"><div className="flex items-center gap-4"><FaNewspaper className="text-[#FFCB05] text-lg" /><div><h3 className="text-base font-bold text-[#00274C] group-hover:text-white transition-colors">{item.title}</h3><p className="text-xs text-[#9CA3AF] group-hover:text-white/50 transition-colors">PDF Document</p></div></div><FaDownload className="text-[#9CA3AF] group-hover:text-[#FFCB05] transition-colors" /></a>))}</div>
          </div>
        )}

        {activeTab === "innovative" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Innovative Teaching Methods</h2>
            {deptData.videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{deptData.videos.map((video) => (<div key={video.src} className="bg-[#F9FAFB] p-4"><video src={video.src} className="w-full aspect-video object-cover rounded" controls preload="metadata" /><p className="text-sm font-bold text-[#00274C] mt-3">{video.title}</p></div>))}</div>
            ) : (<p className="text-[#5C6370]">Innovative teaching videos will be updated soon.</p>)}
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 className="text-2xl font-bold text-[#00274C] mb-8">Contact Head of Department</h2>
            <div className="bg-[#F9FAFB] p-8 max-w-lg">
              <h3 className="text-lg font-bold text-[#00274C] mb-2">{deptData.contactHod.name}</h3>
              <p className="text-sm text-[#5C6370] mb-4">Head of Department</p>
              <div className="space-y-3 text-sm text-[#5C6370]">
                <p className="flex items-center gap-2"><FaPhone className="text-[#FFCB05] text-xs" /><a href={`tel:${deptData.contactHod.phone}`} className="hover:text-[#FFCB05] transition-colors">{deptData.contactHod.phone}</a></p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-[#FFCB05] text-xs" /><a href={`mailto:${deptData.contactHod.email}`} className="hover:text-[#FFCB05] transition-colors">{deptData.contactHod.email}</a></p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
}