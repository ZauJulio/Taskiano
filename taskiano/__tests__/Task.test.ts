import { TaskController } from "./lib";

const dataTask = {
  title: "Tarefa 666: Welcome to the Hell",
  number: 666,
  remainingTime: 696969,
  note: "# Hello Luci",
  fixed: false,
  priority: 6,
  status: "open",
  created_at: new Date(),
  closed_in: null,
  timer: new Date(new Date().getTime() + 666),
  projectId: "abef7153-742f-4b20-bb42-ae772053050b",
};

describe("TaskController", () => {
  it("Create new Task", async () => {
    const newTask = await TaskController.create(dataTask);

    expect(newTask).toBeTruthy();

    if (newTask.id) {
      const checkTask = await TaskController.get(newTask.id);

      expect(checkTask?.id).toBe(newTask.id);
    }
  });

  it("Read Task", async () => {
    const newTask = await TaskController.create(dataTask);

    expect(newTask).toBeTruthy();

    const checkTask = await TaskController.get(newTask.id!);

    expect(checkTask?.id).toBe(newTask.id);
  });

  it("Update Task", async () => {
    const newTask = await TaskController.create(dataTask);

    expect(newTask).toBeTruthy();

    await TaskController.update(newTask.id!, {
      title: "Tarefa 777: Welcome to haven",
    });

    const updatedTask = await TaskController.get(newTask.id!);

    expect(updatedTask?.title).toBe("Tarefa 777: Welcome to haven");
  });

  it("Delete Task", async () => {
    const newTask = await TaskController.create(dataTask);

    expect(newTask).toBeTruthy();

    await TaskController.delete(newTask.id!);

    const deletedTask = await TaskController.get(newTask.id!);

    expect(deletedTask).toBeFalsy();
  });

  it("Close Task", async () => {
    const newTask = await TaskController.create(dataTask);

    expect(newTask).toBeTruthy();

    await TaskController.setStatus(newTask.id!, "close");

    const closedTask = await TaskController.get(newTask.id!);

    expect(closedTask?.status).toBe("close");
  });

  it("Open Task", async () => {
    const newTask = await TaskController.create(dataTask);

    expect(newTask).toBeTruthy();

    await TaskController.setStatus(newTask.id!, "open");

    const openedTask = await TaskController.get(newTask.id!);

    expect(openedTask?.status).toBe("open");
  });
});
