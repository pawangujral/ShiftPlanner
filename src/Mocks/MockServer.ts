import {
  createServer,
  Model,
  Factory,
  hasMany,
  belongsTo,
  Serializer,
} from "miragejs";
import { faker } from "@faker-js/faker";

export function mockServer({ environment = "test" }) {
  return createServer({
    environment,
    models: {
      schedule: Model,
    },
    seeds(server) {
      server.createList("schedule", 5);
    },
    factories: {
      schedule: Factory.extend({
        name(i) {
          return `Schedule_Name_Placeholder ${1}`; // Movie 1, Movie 2, etc.
        },
        duration() {
          let min = 10;
          let max = 60;

          return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        start_time: faker.date.past(),
        end_time: faker.date.past(),
        created_at: faker.date.past(),
        updated_at: faker.date.past(),
        assignee: {
          name: faker.name.findName(),
          description: faker.internet.email(),
        },
      }),
    },
    routes() {
      this.namespace = "api";

      this.get("/schedules");
      this.get("/events");
      this.get("/assignments");
      this.get("/assignee");
      this.get("/timeline");

      // resets the namespace to the root
      this.namespace = "";
      this.passthrough();
    },
  });
}
