import { UserController } from "./lib";


describe("UserController", () => {
  it("Should create new user", async () => {
    const newUser = await UserController.create(
      {
        id: "7fd18545-8054-45f5-9d76-9addd179d13c",
        username: "Roberto",
        name: "Roberto",
        avatar: "https://github.com/roberto.png",
        birthday: new Date("1902-12-23"),
        email: "robertotupinamba@ufrn.br",
      },
      "7fd18545-8054-45f5-9d76-9addd179d13c"
    );

    expect(newUser).toBeTruthy();

    if (newUser.id) {
      const checkUser = await UserController.get(newUser.id);

      expect(checkUser?.id).toBe(newUser.id);
    }
  });

  it("Should delete user", async () => {
    const id = "7fd18545-8054-45f5-9d76-9addd179d13b";

    await UserController.delete(id);

    const checkUser = await UserController.get(id);

    expect(checkUser).toBeFalsy();
  });

  it("Should update user", async () => {
    const id = "7fd18545-8054-45f5-9d76-9addd179d13b";

    const updatedUser = await UserController.update(id, { username: "Roberto" });

    expect(updatedUser).toBeTruthy();

    if (updatedUser!.id) {
      const checkUser = await UserController.get(id);

      expect(updatedUser).toEqual(checkUser);
    }
  });
});