<h1 align="center"> 
  <br>
  Shift Planner
</h1>
 
<p align="center">
  <a href="https://www.npmjs.com/package/shiftplanner" rel="nofollow"><img alt="npm" src="https://img.shields.io/npm/v/shiftplanner"></a> 
</p>

<blockquote align="center">
  <em>Shift Planner</em> is a lightweight React library to plan your shifts/tasks & show them in nice & interactive mode.
</blockquote>

<p align="center"> 
  <a href="#getting-started">Getting started</a>&nbsp;|&nbsp;
  <a href="#theme">Theme</a>&nbsp;|&nbsp;
  <a href="#Contact">Contact</a>&nbsp;|&nbsp;
  <a href="#license">License</a>&nbsp;|&nbsp;
  <a href="https://shiftplanner-pawangujral.herokuapp.com/">Demo</a>
</p> 

## Getting started

Use the package manager yarn/npm to install ShiftPlanner.

```bash
$ npm install shiftplanner 
```

### Usage

#### ES6 modules

```javascript
import ShiftPlanner from 'shiftplanner'; 

 <ShiftPlanner plan={data} /> // Pass value in `plan` prop as per schema below.
```

You can pass following props to `ShiftPlanner` component

| Prop                | Type             | Default Value  | Required     | Description               |
| ------------------- | ---------------- | ---------------|--------------| --------------------------|
| plan                | `IPlanner`       | `undefined`    | true         | Plan values               |
| Actions             | `IPlanActions[]` | `undefined`    | false        | Actions for Shift         |
| handlePrevDateClick | `fn`             | `undefined`    | false        | Change date to previous   |
| handleNextDateClick | `fn`             | `undefined`    | false        | Change date to next       |
| handleAssigneeClick | `fn`             | `undefined`    | false        | Click `fn` for assignee   |
| theme               | `ThemeOptions`   | `defaultTheme` | false        | Customized `MUI` theme    |
| dark                | `boolean`        | `false`        | false        | enable dark theme         |


#### Schema

You can pass your values in `plan` prop. Shift Planner component required data in specific way.

FYI: `duration` of task/shift is figured out by `startTime` & `endTime`.

* `IPlanner`
```ts
{
    id: string; 
    metaData: IMetaData;
    shifts: IShift[];
}
```

* `IMetaData` // (holds basic information about planner)
```ts
{
    currentDate: string;  
    location: string; 
    status?: string; // status of shift
    rawData?: any; // Here you can send your original value as in stringify format & see in UI. 
}
```

* `IShift` // Collection of task Groups
```ts
{
    id: string; 
    name: string;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    groups: IGroup[];
    assignee?: IAssignee[]; 
    isActionEnabled?: boolean;
}
```

* `IGroup` // Collection of Tasks
```ts
{
    id: string;  
    name: string;
    createdAt: string;
    updatedAt: string;
    tasks: ITask[];
}
```

* `ITask` // Collection of Tasks
```ts
{
    id: string; 
    name: string;
    startTime: string;
    endTime: string;
    assignee?: IAssignee[];
    createdAt?: string;
    updatedAt?: string;
    additionalInfo?: string; 
    isActionEnabled?: boolean;
}
```

* `IAssignee` // Action for assignee user
```ts
{
    id: string; 
    name: string;
    image: string; 
    description?: string;
}
```

* `IPlanActions` 
You can attach action to shift & task & even disable is specific shift/task. 
```ts
{
  shift: IAction[],
  task: IAction[], 
}
```

### Action Prop

* `IAction` 
```ts
{
  text: string;
  onClick: (event:  React.MouseEvent<HTMLElement>) => void;
}
```  

You can disable it for specific shift/task by setting boolean value for `isActionEnabled` in payload.

Task of shift/task is already set by data attribute `data-id`. You can access it by using this.

```ts
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  const elem = event.target as HTMLElement; 
  console.log(elem.dataset.id) // This will be the ID of shift/task you have clicked.
};
```

## Config 
coming soon...

## Theme 
Package is build on material UI. You can customize theme as per your choice & pass as prop to component.
Feel free to use these tools.

- [MUI Theme](https://mui.com/material-ui/customization/theming/)
- [mui-theme-creator](https://bareynol.github.io/mui-theme-creator/)
- [Material palette generator](https://material.io/inline-tools/color/)

#### For SSR (e.g: `NextJs`) Project

You need to disable SSR for this component. There are many ways to disable CSS for Non-SSR Friendly component. Simple way is to use `react-no-ssr` package.

```bash
npm i --save react-no-ssr
npm i --save-dev @types/react-no-ssr // for typescript
```

```ts
import NoSSR from 'react-no-ssr';
import ShiftPlanner from 'shiftplanner';

 <NoSSR>
    <ShiftPlanner plan={data} />
</NoSSR>
```

## Contact
Created by [@Pawan Gujral](https://github.com/pawangujral) - feel free to contact me for any issue OR feedback.

## License 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
