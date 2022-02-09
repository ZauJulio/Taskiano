import { TaskController } from ".";
import FireController from "./FireController";

import type { IProject } from "../../../types";
import { ProjectSchema } from "../../../lib/schemas";
import collections from "../../mocks/data";

class Controller extends FireController<IProject> {
  constructor() {
    super({
      ref: "projects",
      schema: ProjectSchema,
      _name: "Project",
      _data: collections.projects,
    });
  }

  public async init(userId: string): Promise<string[]> {
    const projects: string[] = [];

    getInitialProjects().forEach(async (ex) => {
      const { id: projectId } = await super.create({ ...ex.project, userId });

      ex.tasks.forEach((task) => TaskController.create({ ...task, projectId }));

      projectId && projects.push(projectId);
    });

    return projects;
  }

  public async setArchived(id: string, hasArchived: boolean): Promise<void> {
    const project = await super.get(id);

    project && (await super.update(id, { ...project, hasArchived }));
  }
}

const ProjectController = new Controller();

export default ProjectController;

function getInitialProjects() {
  function addTimer(minutes: number = 30) {
    var now = new Date();
    now.setMinutes(now.getMinutes() + minutes);

    return new Date(now);
  }

  return [
    {
      project: {
        name: "Hello World",
        description: "1º Projeto",
        created_at: new Date(),
        closed_in: null,
        color: 11235583, // Purple: #ab70ff
      },
      tasks: [
        {
          title: "Hello World",
          note: "# 1º Task",
          status: "open",
          created_at: new Date(),
          closed_in: null,
          timer: addTimer(61),
        },
        {
          title: "Ops, Tarefa atrasada?",
          note: "# Só um exemplo 😅",
          status: "open",
          created_at: new Date(),
          closed_in: null,
          timer: addTimer(30),
        },
      ],
    },
    {
      project: {
        name: "More One",
        description: "1º Projeto",
        created_at: new Date(),
        closed_in: null,
        color: 16740437, // OrangeDark: #ff7055
      },
      tasks: [],
    },
    {
      project: {
        name: "Sobre",
        description: "Algumas informações :)",
        created_at: new Date(),
        closed_in: null,
        color: 16752697, // Orange: #ffa039
      },
      tasks: [
        {
          title: "Projetos",
          note: require("../../../lib/md/aboutProject.md").default,
          status: "open",
          created_at: new Date(),
          closed_in: null,
          timer: null,
        },
      ],
    },
  ];
}
