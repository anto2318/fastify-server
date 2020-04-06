const faker = require("faker");
const Controller = require("./controller");

const obj = {
  name: 'Obj1',
  createdAt: Date.now(),
  updatedAt: Date.now()
};

describe("Main Controller", () => {
  describe("List objs", () => {
    it("It should list all objs", async () => {
      const controllerService = {
        get: jest.fn().mockResolvedValue(obj)
      };

      const reply = {
        send: jest.fn()
      };

      const controller = new Controller({ controllerService });

      await controller.get(null, reply);

      expect(reply.send).toHaveBeenNthCalledWith(1, obj);
    });
    it("It should send an empty object if no name", async () => {
      const controllerService = {
        get: jest
          .fn()
          .mockResolvedValue({ name: obj.name })
      };

      const reply = {
        send: jest.fn()
      };

      const controller = new Controller({ controllerService });

      await controller.get(null, reply);

      expect(reply.send).toHaveBeenNthCalledWith(1, {
        name: "Obj1"
      });
    });
  });
});
