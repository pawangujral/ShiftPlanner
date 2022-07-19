# Shift Planner

A react package to plan your shifts/tasks & show them in nice & interactive mode.

## Installation

Use the package manager yarn/npm to install ShiftPlanner.

```bash
npm i shiftplanner
```

Now include it in your project.

```bash
import ShiftPlanner from 'shiftplanner';

<ShiftPlanner plan={}/> // Pass value in `plan` prop as per schema below.
```

#### For `NextJs` Project

You need to disable SSR for this component. There are many ways to disable CSS for Non-SSR Friendly component. Simple way is to use `react-no-ssr` package.

```bash
npm i --save react-no-ssr
npm i --save-dev @types/react-no-ssr // for typescript

& than wrap this component with 
 <NoSSR>
    <ShiftPlanner plan={DummyData} />
</NoSSR>
```

## Example:
coming soon...

### init

You can pass your values in `plan` prop. Shift Planner component required data in specific way. Planner is divided into 4 Parts.

FYI: `duration` of task/shift is figured out by `startTime` & `endTime`.

1. Tasks (individual task)
```bash
{
    id: string; // UUID of task
    name: string; // name of the task
    startTime: string; // start time of task
    endTime: string; // end time of task
    createdAt?: string; // task created timestamp
    updatedAt?: string; // task updated timestamp
    assignee?: IAssignee[]; // To whom the task is assigned
    actions?: IActions[]; // Action to be taking on the task
}
```

2. Groups // (collection of tasks)
```bash
{
    id: string;  
    name: string;  
    startTime: string;
    endTime: string; 
    createdAt?: string;  
    updatedAt?: string;
    tasks: ITask[]; // Collection of tasks
}
```

3. Shifts // (collection of groups per day)
```bash
{
    id: string; 
    name: string; 
    startTime: string;
    endTime: string; 
    createdAt?: string; 
    updatedAt?: string; 
    groups: IGroup[]; // Collection of task group
    assignee?: IAssignee[];  // To whom the shift is assigned
    actions?: IActions[]; // Action to be taking on the shift
}
```

4. MetaData // (holds basic information about planner)
```bash
{
    scheduledDate: string;  
    location: string; 
    status?: string; // status of shift
    rawData?: any; // Here you can send your original value as in stringify format & see in UI. 
    onPrevDateClick?: () => void; // Change to prev date callback
    onNextDateClick?: () => void;// Change to next date callback
}
```

5. Planner
```bash
{
    id: string; // UUID 
    metaData: IMetaData;
    shifts: IShift[];
}
```

You can also add assignee to each Shift & individual.
```bash
{
    name: string;
    image: string;
    onClick?: () => void;
    description?: string;
}
```

### Config 
coming soon...

### Theme 
coming soon...

Hit me up on [GitHub](https://github.com/pawangujral) for any issue OR feedback. 