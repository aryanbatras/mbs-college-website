import { getPrograms } from "@/lib/content";
import { ProgramsClient } from "./programs-client";

export async function ProgramsSection() {
  const programs = getPrograms();
  return <ProgramsClient programs={programs} />;
}
