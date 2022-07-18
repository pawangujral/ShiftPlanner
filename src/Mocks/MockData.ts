import _ from "lodash";
import { faker } from "@faker-js/faker";

const handlePrevDate = () => {
  alert("Render data for prev date");
};

const handleNextDate = () => {
  alert("Render data for next date");
};

const handleUserClick = () => {
  alert("Go to user");
};

const handleActionClick = () => {
  alert("On Click working");
};
 

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mockServer() {
  return  {
    id: faker.datatype.uuid(),
    metaData: {
      location: faker.address.city(),
      scheduledDate:  "2022-07-13T11:29:47.000Z",
      createdAt: "2022-07-12T11:29:53.885Z",
      updatedAt: "2022-07-12T11:29:53.885Z",
      status: "NEW",
      rawData: faker.datatype.json(),
      onPrevDateClick: handlePrevDate,
      onNextDateClick: handleNextDate,
    },
    shifts:[...Array(randomNumber(1, 30))].map((_, ) => ({
        id: faker.datatype.uuid(),
        startTime: faker.date.past().toString(),
        endTime: faker.date.future().toString(),
        createdAt: faker.date.past().toString(),
        updatedAt: faker.date.past().toString(),
        name: faker.lorem.words(10), 
        assignee: [...Array(randomNumber(0, 10))].map((_, ) => ({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            description: faker.internet.email(),
            image: faker.image.avatar(),  
            onClick: handleUserClick, 
        })),
        actions: [...Array(randomNumber(0, 3))].map((_, ) => ({
          id: faker.datatype.uuid(),
          text: faker.random.word(),
          onClick: handleActionClick,
        })),
        groups: [...Array(1)].map((_, ) => ({
            id: faker.datatype.uuid(),
            startTime: "2022-07-13T06:00:00.000Z",
            endTime: "2022-07-13T14:12:00.000Z",
            createdAt: "2022-07-12T11:29:53.896Z",
            updatedAt: "2022-07-12T11:29:53.896Z",
            name: faker.company.bsNoun(), 
            tasks:[...Array(1)].map((_, ) => ({
                id: faker.datatype.uuid(),
                startTime: "2022-07-13T06:00:00.000Z",
          endTime: "2022-07-13T10:20:00.000Z",
          createdAt: "2022-07-12T11:29:53.945Z",
          updatedAt: "2022-07-12T11:29:53.945Z",
                name: faker.company.bsNoun(), 
                assignee: [...Array(randomNumber(0, 10))].map(
                    (_, ) => ({
                      id: faker.datatype.uuid(),
                      name: faker.name.findName(),
                      description: faker.internet.email(),
                      image: faker.image.avatar(),
                      onClick: handleUserClick, 
                    })
                  ),
                additionalInfo: faker.lorem.lines(),
                color: faker.color.human(),
                actions:[...Array(randomNumber(0, 3))].map((_, ) => ({
                    id: faker.datatype.uuid(),
                    text: faker.random.word(),
                    onClick: handleActionClick,
                  })),
              })),
          })),
      }))
}
}
