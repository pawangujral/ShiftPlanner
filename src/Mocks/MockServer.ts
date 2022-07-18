import {
  createServer,
  Model,
  Factory, 
  RestSerializer,
} from "miragejs";
import _ from "lodash";
import { faker } from "@faker-js/faker";

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mockServer({ environment = "test" }) {
  return createServer({
    environment,
    serializers: {
      application: RestSerializer.extend({
        keyForAttribute(attr) {
          return _.camelCase(attr);
        },
      }),
    },
    models: {
      shift: Model,
    },
    seeds(server) {
      server.create("shift"); 
    },
    factories: {
      shift: Factory.extend({
        metaData: {
          location: faker.address.city(),
          scheduledDate: faker.date.past(),
          status: "NEW",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past(),
          rawData: faker.datatype.json(),
          onPrevDateClick:() => {
           //  alert("Button clicked!"); 
          },
          onNextDateClick:    () => {
           //  alert("Button clicked!");
          }, 
        },
        schedules() {
          return [...Array(randomNumber(0, 10))].map((_, ) => ({
            startTime: faker.date.past(),
            endTime: faker.date.past(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
            name: faker.lorem.words(10),
            duration: randomNumber(10, 60),
            assignee: [...Array(randomNumber(0, 10))].map((_, ) => ({
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                description: faker.internet.email(),
                image: faker.image.avatar(),   
            })),
            actions: [...Array(randomNumber(0, 3))].map((_, ) => ({
              id: faker.datatype.uuid(),
              text: faker.random.word(),
              onClick: () => {
               //  alert("Button clicked!");
              },
            })),
            events: [...Array(randomNumber(1, 5))].map((_, ) => ({
                id: faker.datatype.uuid(),
                startTime: faker.date.past(),
                endTime: faker.date.past(),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past(),
                name: faker.company.bsNoun(),
                duration: randomNumber(10, 60),
                assignments:[...Array(randomNumber(1, 5))].map((_, ) => ({
                    id: faker.datatype.uuid(),
                    startTime: faker.date.past(),
                    endTime: faker.date.past(),
                    createdAt: faker.date.past(),
                    updatedAt: faker.date.past(),
                    name: faker.company.bsNoun(),
                    duration: randomNumber(10, 60),
                    assignee: [...Array(randomNumber(0, 10))].map(
                        (_, ) => ({
                          id: faker.datatype.uuid(),
                          name: faker.name.findName(),
                          description: faker.internet.email(),
                          image: faker.image.avatar(),
                        })
                      ),
                    additionalInfo: faker.lorem.lines(),
                    color: faker.color.human(),
                    actions:[...Array(randomNumber(0, 3))].map((_, ) => ({
                        id: faker.datatype.uuid(),
                        text: faker.random.word(),
                        onClick: () => {
                         //  alert("Button clicked!");
                        },
                      })),
                  })),
              })),
          }))
      
        },
      }),
    },
    routes() {
      this.namespace = "api";

      this.get("/shifts");

      // resets the namespace to the root
      this.namespace = "";
      this.passthrough();
    },
  });
}
