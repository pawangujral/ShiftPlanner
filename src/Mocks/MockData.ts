import _ from 'lodash';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import { randomNumber } from './../Utils';

export const handleDateChange = (_: React.MouseEvent<HTMLElement>) => {
  alert('Render data for date change');
};

export const handleActionClick = (event: React.MouseEvent<HTMLElement>) => {
  const id = (event.target as HTMLButtonElement).dataset.id;
  alert('On Click test' + id);
};

export const handleUserClick = (_: React.MouseEvent<HTMLElement>) => {
  alert('Go to user');
};

export const handleFilterValue = (value: any) => {
  console.log(value);
};

export function mockActions() {
  return [...Array(randomNumber(0, 3))].map((_) => ({
    id: faker.datatype.uuid(),
    text: faker.random.word(),
    onClick: handleActionClick,
  }));
}

export function mockAssignee() {
  return [...Array(randomNumber(0, 5))].map((_) => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    description: faker.internet.email(),
    image: faker.image.avatar(),
  }));
}

export function mockTask() {
  return [...Array(randomNumber(1, 1))].map((_) => {
    const now = moment();
    return {
      id: faker.datatype.uuid(),
      startTime: faker.date.between(
        now.startOf('day').toString(),
        now.endOf('day').toString()
      ),
      endTime: faker.date.between(
        now.startOf('day').toString(),
        now.endOf('day').toString()
      ),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.company.catchPhrase(),
      isActionEnabled: true,
      assignee: mockAssignee(),
      additionalInfo: faker.lorem.lines(),
      color: faker.color.human(),
    };
  });
}

export function mockGroup() {
  return [...Array(randomNumber(1, 1))].map((_) => ({
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    name: faker.lorem.words(randomNumber(0, 10)),
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
    name: faker.company.catchPhrase(),
    isActionEnabled: true,
    assignee: mockAssignee(),
    groups: mockGroup(),
  }));
}

export function mockMetaData() {
  return {
    location: faker.address.city(),
    currentDate: faker.date.future().toString(),
    createdAt: faker.date.future().toString(),
    updatedAt: faker.date.future().toString(),
    status: 'NEW',
    rawData: faker.datatype.json(),
  };
}

export function mockServer() {
  return {
    id: faker.datatype.uuid(),
    metaData: mockMetaData(),
    shifts: mockShit(),
  };
}

export function mockFilters() {
  return {
    sortByOptions: [...Array(randomNumber(1, 3))].map((_) => ({
      text: faker.random.word(),
      value: faker.random.word(),
    })),
    filterByOptions: [...Array(randomNumber(2, 4))].map((_) => ({
      text: faker.random.word(),
      value: faker.random.word(),
    })),
  };
}
