const empolyee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1.1",
        description: "Task 1.1 description",
        taskDate: "2023-11-22",
        category: "Category 1.1",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1.2",
        description: "Task 1.2 description",
        taskDate: "2023-12-01",
        category: "Category 1.2",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 1.3",
        description: "Task 1.3 description",
        taskDate: "2023-12-15",
        category: "Category 1.3",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 2.1",
        description: "Task 2.1 description",
        taskDate: "2023-11-25",
        category: "Category 2.1",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2.2",
        description: "Task 2.2 description",
        taskDate: "2023-12-05",
        category: "Category 2.2",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 2.3",
        description: "Task 2.3 description",
        taskDate: "2023-12-20",
        category: "Category 2.3",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3.1",
        description: "Task 3.1 description",
        taskDate: "2023-11-28",
        category: "Category 3.1",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 3.2",
        description: "Task 3.2 description",
        taskDate: "2023-12-08",
        category: "Category 3.2",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 3.3",
        description: "Task 3.3 description",
        taskDate: "2023-12-25",
        category: "Category 3.3",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 4.1",
        description: "Task 4.1 description",
        taskDate: "2023-11-30",
        category: "Category 4.1",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 4.2",
        description: "Task 4.2 description",
        taskDate: "2023-12-10",
        category: "Category 4.2",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 4.3",
        description: "Task 4.3 description",
        taskDate: "2023-12-30",
        category: "Category 4.3",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 5.1",
        description: "Task 5.1 description",
        taskDate: "2023-12-02",
        category: "Category 5.1",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 5.2",
        description: "Task 5.2 description",
        taskDate: "2023-12-12",
        category: "Category 5.2",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Task 5.3",
        description: "Task 5.3 description",
        taskDate: "2024-01-05",
        category: "Category 5.3",
      },
    ],
  },
];

const Admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(empolyee));
  localStorage.setItem("admin", JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
