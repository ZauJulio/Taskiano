import { isTargetLikeServerless } from "next/dist/server/config";
import { ProjectController } from "./lib";

const data = {
    name: "Projeto teste de software",
    created_at: new Date(),
    closed_in: new Date(),
    description: "Projeto criado com o objetivo de aplicar as técnicas aprendidas na disciplina",
    color: 2310708,
    hasArchived: false,
    tasks: [],
    userId: "7fd18545-8054-45f5-9d76-9addd179d13c"
}

describe("ProjectController", () => {
    it("New Project", async () => {
        const newProject = await ProjectController.create(data);

        expect(newProject).toBeTruthy();

        const checkProject = await ProjectController.get(newProject.id!);

        expect(checkProject?.id).toBe(newProject.id);
    });

    it("Update Project", async () => {
        const createProject = await ProjectController.create(data);

        expect(createProject).toBeTruthy();

        const updatedProject = await ProjectController.update(createProject.id!, {
            name: "Projeto teste de software com TDD",
            description: "Projeto criado com o objetivo de aplicar as técnicas de TDD aprendidas na disciplina"
        });

        expect(updatedProject?.name).toBe("Projeto teste de software com TDD");
        expect(updatedProject?.description).toBe("Projeto criado com o objetivo de aplicar as técnicas de TDD aprendidas na disciplina");
    });

    it("Delete Project", async () => {
        const createProject = await ProjectController.create(data);

        expect(createProject).toBeTruthy();

        await ProjectController.delete(createProject.id!);

        const checkProject = await ProjectController.get(createProject.id!);

        expect(checkProject).toBeFalsy();
    });

    it("Archived Project", async () => {
        const createProject = await ProjectController.create(data);

        console.log(createProject);

        expect(createProject).toBeTruthy();

        await ProjectController.setArchived(createProject.id!, true);        

        const checkProject = await ProjectController.get(createProject.id!);
        
        expect(checkProject).toBeTruthy();

        expect(checkProject?.hasArchived).toBeTruthy();
    });
});