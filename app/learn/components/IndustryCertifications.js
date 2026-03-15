"use client";

import React from "react";
import { ExternalLink, Link2 } from "lucide-react";

const CERTIFICATION_PLATFORMS = [
  { title: "Coursera", href: "https://www.coursera.org/" },
  { title: "Udemy", href: "https://www.udemy.com/" },
  { title: "edX", href: "https://www.edx.org/" },
  { title: "Google Career Certificates", href: "https://grow.google/certificates/" },
  { title: "AWS Certification", href: "https://aws.amazon.com/certification/" },
  { title: "Microsoft Certifications", href: "https://learn.microsoft.com/en-us/certifications/" },
  { title: "IBM SkillsBuild", href: "https://skillsbuild.org/" },
  { title: "Oracle University", href: "https://education.oracle.com/" },
  { title: "Red Hat Certifications", href: "https://www.redhat.com/en/services/certification" },
  { title: "CompTIA Certifications", href: "https://www.comptia.org/certifications" },
  { title: "Meta Learning Certifications", href: "https://www.meta.com/learn/certifications/" },
  { title: "Salesforce Trailhead", href: "https://trailhead.salesforce.com/" },
  { title: "Cisco Networking Academy", href: "https://www.netacad.com/" },
  { title: "HubSpot Academy", href: "https://academy.hubspot.com/" },
  { title: "Unity Learn", href: "https://learn.unity.com/" },
  { title: "Google Cloud Certification", href: "https://cloud.google.com/certification" },
  { title: "Azure Certification", href: "https://learn.microsoft.com/en-us/certifications/" },
  { title: "LinkedIn Learning Certifications", href: "https://www.linkedin.com/learning/" },
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

export default function IndustryCertifications() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold">Industry-Based Certifications</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATION_PLATFORMS.map((p) => (
          <ResourceCard key={p.title} title={p.title} href={p.href} />
        ))}
      </div>
    </div>
  );
}
