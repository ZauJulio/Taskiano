import { ReactNode, useCallback, useEffect, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { ProjectsContext } from "./Provider";
import { ProjectController } from "../../lib";

import type { IProject } from "../../types";

interface IProjectsContextProvider {
  children: ReactNode;
}

export function ProjectsContextProvider(props: IProjectsContextProvider) {
  const [projects, setProjects] = useState<IProject[]>([]);

  const user = useAuth((ctx) => ctx.user);
  const authenticated = useAuth((ctx) => ctx.authenticated);

  const fetchProjects = useCallback(async () => {
    setProjects(await ProjectController.filter("userId", "==", user?.id));
  }, [user]);

  const updateProjects = useCallback((changedProject: IProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === changedProject.id ? changedProject : project
      )
    );
  }, []);

  const get = useCallback(
    (id?: string) => projects.find((project) => project.id === id),
    [projects]
  );

  const create = useCallback(async (data: IProject) => {
    const project = await ProjectController.create(data);
    project && setProjects((prev) => [...prev, project]);
  }, []);

  const update = useCallback(
    async (id: string, data: IProject) => {
      const project = await ProjectController.update(id, data);
      project && updateProjects(project);
    },
    [updateProjects]
  );

  const archive = useCallback(async (id: string) => {
    await ProjectController.setArchived(id, true);
  }, []);

  const unArchive = useCallback(async (id: string) => {
    await ProjectController.setArchived(id, false);
  }, []);

  const getProjectColor = useCallback(
    (id: string) => {
      const project = projects.find((_project) => _project.id === id);

      return `#${project?.color?.toString(16)}`;
    },
    [projects]
  );

  const deleteProject = useCallback(async (id: string) => {
    await ProjectController.delete(id);
    setProjects((prev) => prev.filter((project) => project.id !== id));
  }, []);

  /**
   * Auto update tasks when project is updated
   */
  useEffect(() => {
    if (user && user.id && authenticated) fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, authenticated]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        get,
        create,
        update,
        deleteProject,
        archive,
        unArchive,
        getProjectColor,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}
