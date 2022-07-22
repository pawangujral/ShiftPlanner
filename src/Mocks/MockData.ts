import _ from "lodash";
import { faker } from "@faker-js/faker";

export const handleDateChange =(_: React.MouseEvent<HTMLElement>) => {
  alert("Render data for date change");
}; 

export const handleActionClick = (_: React.MouseEvent<HTMLElement>) => { 
  alert("On Click test");
};
 

export const handleUserClick = (_: React.MouseEvent<HTMLElement>) => {
  alert("Go to user");
};

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mockActions() {
  return [...Array(randomNumber(0, 3))].map((_, ) => ({
    id: faker.datatype.uuid(),
    text: faker.random.word(),
    onClick: handleActionClick,
  }))
}; 


export function mockServer() {
  return  {
    id: faker.datatype.uuid(),
    metaData: {
      location: faker.address.city(),
      currentDate:  "2022-07-13T11:29:47.000Z",
      createdAt: "2022-07-12T11:29:53.885Z",
      updatedAt: "2022-07-12T11:29:53.885Z",
      status: "NEW",
      rawData: faker.datatype.json() 
    },
    shifts:[...Array(randomNumber(5, 30))].map((_, ) => ({
        id: faker.datatype.uuid(),
        startTime: faker.date.past().toString(),
        endTime: faker.date.future().toString(),
        createdAt: faker.date.past().toString(),
        updatedAt: faker.date.past().toString(),
        name: faker.lorem.words(10), 
        isActionEnabled: true,
        assignee: [...Array(randomNumber(0, 10))].map((_, ) => ({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            description: faker.internet.email(),
            image: faker.image.avatar(),  
            onClick: handleUserClick, 
        })),
       
        groups: [...Array(1)].map((_, ) => ({
            id: faker.datatype.uuid(),
            startTime: "2022-07-13T06:00:00.000Z",
            endTime: "2022-07-13T10:20:00.000Z",
            createdAt: "2022-07-12T11:29:53.945Z",
            updatedAt: "2022-07-12T11:29:53.945Z",
            name: faker.lorem.words(10), 
            tasks:[...Array(1)].map((_, ) => ({
                id: faker.datatype.uuid(),
                startTime: "2022-07-13T06:00:00.000Z",
                endTime: "2022-07-13T10:20:00.000Z",
                createdAt: "2022-07-12T11:29:53.945Z",
                updatedAt: "2022-07-12T11:29:53.945Z",
                name: faker.lorem.words(10), 
                isActionEnabled: true,
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
                color: faker.color.human()
              })),
          })),
      }))
}
}
