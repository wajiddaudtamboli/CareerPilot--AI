"use client";

import React from "react";
import { ExternalLink, Link2 } from "lucide-react";

const COMPETITION_PLATFORMS = [
  { title: "Unstop", href: "https://unstop.com/" },
  { title: "Devpost", href: "https://devpost.com/" },
  { title: "HackerEarth Competitions", href: "https://www.hackerearth.com/challenges/" },
  { title: "CodeChef Contests", href: "https://www.codechef.com/contests" },
  { title: "LeetCode Weekly", href: "https://leetcode.com/contest/" },
  { title: "Codeforces Contests", href: "https://codeforces.com/contests" },
  { title: "Kaggle Competitions", href: "https://www.kaggle.com/competitions" },
  { title: "Smart India Hackathon", href: "https://sih.gov.in/" },
  { title: "Aavishkar Research Festival", href: "https://avishkar.gov.in/" },
  { title: "Aakriti Autodesk Challenge", href: "https://aakruti.autodesk.com/" },
  { title: "Google Hash Code (legacy archives)", href: "https://codingcompetitionsongoogle.com/hashcode" },
  { title: "ICPC", href: "https://icpc.global/" },
  { title: "HackTheBox Challenges", href: "https://www.hackthebox.com/" },
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

export default function CompetitionsHackathons() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold">Competitions & Hackathons</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMPETITION_PLATFORMS.map((p) => (
          <ResourceCard key={p.title} title={p.title} href={p.href} />
        ))}
      </div>
    </div>
  );
}
