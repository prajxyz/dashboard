import JobDescription from "@/components/job-description";
import JobStats from "@/components/job-stats";
import Tab from "@/components/tab";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Tab />

      <div className="flex items-start">
        <JobDescription />
        <JobStats />
      </div>
    </main>
  );
}
