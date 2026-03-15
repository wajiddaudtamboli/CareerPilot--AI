"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const componentMap = {
  Projects: dynamic(() => import("./components/RealCompanyProjects")), // Updated to use new enhanced component
  ToolsCompanyUse: dynamic(() =>
    import("./components/ToolsCompanyUse")
  ),
  DayRemains: dynamic(() => import("./components/Days30Preparation")),
  ResumeExtractor: dynamic(() =>
    import("./components/ResumeExtractor")
  ),
  CreatedCourses: dynamic(() => import("./components/CreateCourse")),
  Courses: dynamic(() => import("./components/CreateCourse")), // Add proper mapping for Courses
  CoursesExplore: dynamic(() => import("./components/CoursesExplore")),
  SoftSkill: dynamic(() => import("./components/SoftSkill")),
  IndustryCertifications: dynamic(() => import("./components/IndustryCertifications")),
  RealCompanyProjects: dynamic(() => import("./components/RealCompanyProjects")),
  CompetitionsHackathons: dynamic(() => import("./components/CompetitionsHackathons")),
  AptitudeLearningPlatforms: dynamic(() => import("./components/AptitudeLearningPlatforms")),
};

const LearnContent = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("../components/Instruction"));
  return (
    <>
      <Component />
    </>
  );
};

const ParamsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LearnContent />
    </Suspense>
  );
};

export default ParamsPage;
