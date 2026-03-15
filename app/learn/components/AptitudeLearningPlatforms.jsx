"use client";
import React from "react";
import {
  ExternalLink,
  Link2,
} from "lucide-react";

const PLATFORMS = [
  { title: "IndiaBix", href: "https://www.indiabix.com/" },
  { title: "FreshersWorld Aptitude", href: "https://www.freshersworld.com/aptitude-questions-and-answers" },
  { title: "PrepInsta", href: "https://prepinsta.com/" },
  { title: "Testbook", href: "https://testbook.com/" },
  { title: "BYJU’S Exam Prep", href: "https://byjusexamprep.com/" },
  { title: "Unacademy", href: "https://unacademy.com/" },
  { title: "CareerRide", href: "https://www.careerride.com/" },
  { title: "Lofoya Aptitude", href: "https://www.lofoya.com/" },
  { title: "M4Maths", href: "https://www.m4maths.com/" },
  { title: "TCY Online", href: "https://www.tcyonline.com/" },
  { title: "Youth4Work Aptitude", href: "https://www.youth4work.com/" },
  { title: "Oliveboard", href: "https://www.oliveboard.in/" },
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

export default function AptitudeLearningPlatforms() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold">Aptitude Learning Platforms</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLATFORMS.map((p) => (
          <ResourceCard key={p.title} title={p.title} href={p.href} />
        ))}
      </div>
    </div>
  );
}
