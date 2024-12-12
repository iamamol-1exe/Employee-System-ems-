const arr = ["amol", "rohan", "sahil", "alice", "sam", "virat"];

arr.forEach(function (value) {
  console.log(value);
});

let newarr = arr.map((value) => {
  return value + " ji";
});
console.log(newarr);

let newfilter = arr.filter(function (value) {
  return value.startsWith("a");
});

console.log(newfilter);

const user = {
  id: "12345", // Unique identifier
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    dateOfBirth: "1990-05-15",
    contact: {
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
    },
  },
  preferences: {
    language: "English",
    currency: "USD",
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  },
  accountDetails: {
    username: "johndoe90",
    passwordHash: "hashed_password_here", // Store hashed passwords only
    roles: ["user", "admin"],
    createdAt: "2022-01-01T12:00:00Z",
    lastLogin: "2024-12-01T18:30:00Z",
  },
  socialProfiles: {
    twitter: "@johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
  activity: {
    posts: 120,
    comments: 450,
    likes: 300,
    lastActivity: "2024-12-03T10:00:00Z",
  },
  subscription: {
    plan: "Premium",
    status: "Active",
    renewalDate: "2025-01-01",
    paymentMethod: {
      type: "Credit Card",
      lastFourDigits: "1234",
      billingAddress: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        country: "USA",

        zipCode: "10001",
      }, 
    },
  },
};

let { currency } = user.preferences;

console.log(currency);


//spread and rest


let newspread=[...arr]
