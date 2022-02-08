import { FireRepository, ProjectRef, ProjectSchema } from "../../Firestore";
import { IProject } from "../../../../types";

export const ProjectRepository = new FireRepository<IProject>({
  ref: ProjectRef,
  schema: ProjectSchema,
  _name: "Project",
});
