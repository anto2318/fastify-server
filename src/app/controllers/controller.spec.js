const faker = require("faker");
const PlaylistsController = require("./playlists.controller");

const incidence = {
  generadoPara: Date.now(),
  notificacionesActivas: [
    {
      id: faker.random.number(),
      creacion: Date.now() - 30 * 60 * 1000,
      caducidad: Date.now() + 90 * 60 * 1000,
      contenido: "Líneas T1 normalizada",
      lineas: ["T1"],
      tipo: "Notificacion"
    }
  ]
};

describe("Incidences Controller", () => {
  describe("List incidences", () => {
    it("It should list all incidences", async () => {
      const playlistsService = {
        list: jest.fn().mockResolvedValue(incidence)
      };

      const reply = {
        send: jest.fn()
      };

      const controller = new PlaylistsController({ playlistsService });

      await controller.list(null, reply);

      expect(reply.send).toHaveBeenNthCalledWith(1, incidence);
    });
    it("It should send an empty array if no notifications", async () => {
      const playlistsService = {
        list: jest
          .fn()
          .mockResolvedValue({ generadoPara: incidence.generadoPara })
      };

      const reply = {
        send: jest.fn()
      };

      const controller = new PlaylistsController({ playlistsService });

      await controller.list(null, reply);

      expect(reply.send).toHaveBeenNthCalledWith(1, {
        generadoPara: incidence.generadoPara,
        notificacionesActivas: []
      });
    });
  });
});
