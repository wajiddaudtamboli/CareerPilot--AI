"use client";

import React from "react";
import { ExternalLink, Link2 } from "lucide-react";

const SOURCES = [
  { title: "GitHub Issues", href: "https://github.com/issues" },
  { title: "Google Summer of Code", href: "https://summerofcode.withgoogle.com/" },
  { title: "Kaggle", href: "https://www.kaggle.com/" },
  { title: "DevPost Projects", href: "https://devpost.com/" },
  { title: "Unstop Projects", href: "https://unstop.com/projects" },
  { title: "HackerEarth Challenges", href: "https://www.hackerearth.com/challenges/" },
  { title: "Codeforces Gym", href: "https://codeforces.com/gyms" },
  { title: "Dribbble (UI/UX projects)", href: "https://dribbble.com/" },
  { title: "Behance (UI/UX projects)", href: "https://www.behance.net/" },
  { title: "Coderbyte Projects", href: "https://coderbyte.com/" },
  { title: "IEEE Project Bank", href: "https://ieee-dataport.org/" },
  { title: "Major League Hacking", href: "https://mlh.io/" },
  { title: "Open Source Projects", href: "https://opensource.guide/" },
  { title: "Smart India Hackathon Problem Statements", href: "https://sih.gov.in/" },
  { title: "AAKRUTI Autodesk Challenge", href: "https://aakruti.autodesk.com/" },
  { title: "NPTEL/AICTE Project Bank", href: "https://internship.aicte-india.org/" },
];

function ResourceCard({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl shadow-md p-4 hover:scale-[1.01] transition bg-card dark:bg-card-dark"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0">
            <Link2 className="h-6 w-6" />
          </span>
          <span className="font-semibold truncate">{title}</span>
        </div>
        <ExternalLink className="h-4 w-4 opacity-70" />
      </div>
    </a>
  );
}

export default function RealCompanyProjects() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold">Projects – Real-World Problem Statements</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOURCES.map((s) => (
          <ResourceCard key={s.title} title={s.title} href={s.href} />
        ))}
      </div>
    </div>
  );
}
