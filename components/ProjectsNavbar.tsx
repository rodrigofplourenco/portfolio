import { FunctionComponent } from "react";
import NavItemProjects from "./NavItemProjects";

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function,
  active: string
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItemProjects value="all" {...props} />
      <NavItemProjects value="utilities" {...props} />
      <NavItemProjects value="react" {...props} />
      <NavItemProjects value="node" {...props} />
      <NavItemProjects value="express" {...props} />
      <NavItemProjects value="nestjs" {...props} />
    </div>
  )
};

export default ProjectsNavbar;
