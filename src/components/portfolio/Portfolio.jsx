import PortfolioHire from "./PortfolioHire";
import ProjectList from "./ProjectList";
// import { getAllProjects } from "@/lib/db";
export default function Portfolio() {
  // const projects = db.prepare("SELECT * FROM projects").all();

  return (
    <>
      <ProjectList />
      <PortfolioHire />
    </>
  );
}
