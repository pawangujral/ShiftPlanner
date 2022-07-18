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

const Users = [
  {
    id: "1",
    name: "Pman",
    image: "https://source.unsplash.com/random/50×50/?portrait",
    description: "Product Manager",
    onClick: handleUserClick,
  },
  {
    id: "2",
    name: "Pawan",
    image: "https://source.unsplash.com/random/50×50/?portrait",
    description: "Product Manager",
  },
];

const ActionData = [
  {
    text: "Edit",
    onClick: handleActionClick,
  },
  {
    text: "Delete",
    onClick: handleActionClick,
  },
];

export const data = {
  id: "e628eac1-13cc-4616-b691-cb455ca77483",
  metaData: {
    location: "Stockholm, Sweden",
    scheduledDate: "2022-06-08T16:06:30.000Z",
    status: "NEW",
    createdAt: "2022-06-07T16:06:34.544Z",
    updatedAt: "2022-06-07T16:06:34.544Z",
    onPrevDateClick: handlePrevDate,
    onNextDateClick: handleNextDate 
  },
  schedules: [
    {
      id: "297639f5-9f4f-4e82-87b3-7715662ee327",
      startTime: "2022-06-08T13:15:38.000Z",
      endTime: "2022-06-08T20:34:06.000Z",
      createdAt: "2022-06-07T16:06:34.549Z",
      updatedAt: "2022-06-07T16:06:34.549Z",
      name: "schedule_name_placeholder",
      duration: 26308,
      assignee: Users,
      actions: ActionData,
      events: [
        {
          id: "fc45c448-22c1-4a57-995d-3421bba6fd30",
          startTime: "2022-06-08T03:15:38.000Z",
          endTime: "2022-06-08T20:34:06.000Z",
          duration: 26308,
          name: "event_name_placeholder",
          createdAt: "2022-06-07T16:06:34.582Z",
          updatedAt: "2022-06-15T14:26:27.247Z",
 
          assignments: [
            {
              id: "0e8c0bac-cf8c-46a6-aa0d-eec41d3bde8d",
              name: "Assignment_Name_Placeholder",
              duration: 20310,
              startTime: "2022-06-08T13:15:38.000Z",
              endTime: "2022-06-08T13:36:09.000Z",
              assignee: Users,
              createdAt: "2022-06-07T16:06:34.594Z",
              updatedAt: "2022-06-07T16:06:34.594Z",
              additionalInfo: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
              Icon: "",
              color: "#000",
              actions: ActionData,
            },
          ],
        },
        {
          id: "fc45c448-22c1-4a57-995d-3421bba6fd31",
          startTime: "2022-06-08T13:15:38.000Z",
          endTime: "2022-06-08T20:34:06.000Z",
          duration: 26308,
          name: "event_name_placeholder",
          createdAt: "2022-06-07T16:06:34.582Z",
          updatedAt: "2022-06-15T14:26:27.247Z",
 
          assignments: [
            {
              id: "0e8c0bac-cf8c-46a6-aa0d-eec41d3bde8d",
              name: "Assignment_Name_Placeholder",
              duration: 20310,
              startTime: "2022-06-08T13:15:38.000Z",
              endTime: "2022-06-08T13:36:09.000Z",
              assignee: Users,
              createdAt: "2022-06-07T16:06:34.594Z",
              updatedAt: "2022-06-07T16:06:34.594Z",
              additionalInfo: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
              Icon: "",
              color: "#000",
              actions: ActionData,
            },
          ],
        },
      ],
    },
    {
      id: "297639f5-9f4f-4e82-87b3-7715662ee329",
      name: "schedule_name_placeholder",
      startTime: "2022-06-08T13:15:38.000Z",
      endTime: "2022-06-08T20:34:06.000Z",
      duration: 26308,
      assignee: Users,
      createdAt: "2022-06-07T16:06:34.549Z",
      updatedAt: "2022-06-07T16:06:34.549Z",
      actions: ActionData,
      events: [
        {
          id: "fc45c448-22c1-4a57-995d-3421bba6fd31",
          startTime: "2022-06-08T13:15:38.000Z",
          endTime: "2022-06-08T20:34:06.000Z",
          duration: 26308,
          name: "event_name_placeholder",
          createdAt: "2022-06-07T16:06:34.582Z",
          updatedAt: "2022-06-15T14:26:27.247Z",
          assignments: [
            {
              id: "0e8c0bac-cf8c-46a6-aa0d-eec41d3bde8d",
              name: "Assignment_Name_Placeholder",
              duration: 20310,
              startTime: "2022-06-08T13:15:38.000Z",
              endTime: "2022-06-08T13:36:09.000Z",
              assignee: Users,
              createdAt: "2022-06-07T16:06:34.594Z",
              updatedAt: "2022-06-07T16:06:34.594Z",
              additionalInfo: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
              Icon: "",
              color: "#000",
              actions: ActionData,
            },
          ],
        },
      ],
    },
    {
      id: "297639f5-9f4f-4e82-87b3-7715662ee310",
      name: "schedule_name_placeholder",
      startTime: "2022-06-08T13:15:38.000Z",
      endTime: "2022-06-08T20:34:06.000Z",
      duration: 26308,
      assignee: Users,
      createdAt: "2022-06-07T16:06:34.549Z",
      updatedAt: "2022-06-07T16:06:34.549Z",
      events: [
        {
          id: "fc45c448-22c1-4a57-995d-3421bba6fd31",
          startTime: "2022-06-08T13:15:38.000Z",
          endTime: "2022-06-08T20:34:06.000Z",
          duration: 26308,
          name: "event_name_placeholder",
          createdAt: "2022-06-07T16:06:34.582Z",
          updatedAt: "2022-06-15T14:26:27.247Z",
          assignments: [
            {
              id: "0e8c0bac-cf8c-46a6-aa0d-eec41d3bde8d",
              name: "Assignment_Name_Placeholder",
              duration: 20310,
              startTime: "2022-06-08T13:15:38.000Z",
              endTime: "2022-06-08T13:36:09.000Z",
              assignee: Users,
              createdAt: "2022-06-07T16:06:34.594Z",
              updatedAt: "2022-06-07T16:06:34.594Z",
              additionalInfo: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
              Icon: "",
              color: "#000",
              actions: ActionData,
            },
          ],
        },
      ],
    },
  ],
};
