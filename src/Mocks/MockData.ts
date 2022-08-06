import _ from 'lodash';
import { faker } from '@faker-js/faker';
import moment from 'moment';

export const handleDateChange = (_: React.MouseEvent<HTMLElement>) => {
  alert('Render data for date change');
};

export const handleActionClick = (_: React.MouseEvent<HTMLElement>) => {
  alert('On Click test');
};

export const handleUserClick = (_: React.MouseEvent<HTMLElement>) => {
  alert('Go to user');
};

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mockActions() {
  return [...Array(randomNumber(0, 3))].map((_) => ({
    id: faker.datatype.uuid(),
    text: faker.random.word(),
    onClick: handleActionClick,
  }));
}

export function mockAssignee() {
  return [...Array(randomNumber(0, 3))].map((_) => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    description: faker.internet.email(),
    image: faker.image.avatar(),
  }));
}
const now = moment()
console.log('now ' + now.toString())
console.log('start ' + now.startOf('day').toString())
console.log('end ' + now.endOf('day').toString())

export function mockTask() {
  return [...Array(randomNumber(1,1))].map((_) => ({
    id: faker.datatype.uuid(),
    startTime:  faker.date.between(now.startOf('day').toString(),now.endOf('day').toString()),
    endTime:  faker.date.between(now.startOf('day').toString(), now.endOf('day').toString()),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    name: faker.company.catchPhrase(),
    isActionEnabled: true,
    assignee: mockAssignee(),
    additionalInfo: faker.lorem.lines(),
    color: faker.color.human(),
  }));
}

export function mockGroup() {
  return [...Array(randomNumber(1,1))].map((_) => ({
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    name: faker.lorem.words(randomNumber(0,10)),
    tasks: mockTask(),
  }));
}

export function mockShit() {
  return [...Array(randomNumber(5, 30))].map((_) => ({
    id: faker.datatype.uuid(),
    startTime: faker.date.past().toString(),
    endTime: faker.date.future().toString(),
    createdAt: faker.date.past().toString(),
    updatedAt: faker.date.past().toString(),
    name: faker.lorem.words(10),
    isActionEnabled: true,
    assignee: mockAssignee(),
    groups: mockGroup(),
  }));
}

export function mockMetaData() {
  return {
    location: faker.address.city(),
    currentDate: '2022-07-13T11:29:47.000Z',
    createdAt: '2022-07-12T11:29:53.885Z',
    updatedAt: '2022-07-12T11:29:53.885Z',
    status: 'NEW',
    rawData: faker.datatype.json(),
  }
}

export function mockServer() {
  return {
    id: faker.datatype.uuid(),
    metaData: mockMetaData(),
    shifts: mockShit(),
  };
}
