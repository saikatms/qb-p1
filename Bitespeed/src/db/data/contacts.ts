const today = new Date();
export const contacts = [
  {
    id: 1,
    phoneNumber: "123456",
    email: "abc@gmail.com",
    linkPrecedence: "primary",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    phoneNumber: "123451",
    email: "aac@gmail.com",
    linkPrecedence: "primary",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    phoneNumber: "123452",
    email: "acc@gmail.com",
    linkPrecedence: "primary",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    phoneNumber: "123453",
    email: "bcc@gmail.com",
    linkPrecedence: "primary",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    phoneNumber: "123456",
    email: "aaa@gmail.com",
    linkedIn: 1,
    linkPrecedence: "secondary",
    createdAt: new Date(today.setDate(today.getDate() + 2)),
    updatedAt: new Date(today.setDate(today.getDate() + 2)),
  },
  {
    id: 6,
    phoneNumber: "123451",
    email: "def@gmail.com",
    linkedIn: 2,
    linkPrecedence: "secondary",
    createdAt: new Date(today.setDate(today.getDate() + 3)),
    updatedAt: new Date(today.setDate(today.getDate() + 3)),
  },
  {
    id: 7,
    phoneNumber: "123458",
    email: "acc@gmail.com",
    linkedIn: 3,
    linkPrecedence: "secondary",
    createdAt: new Date(today.setDate(today.getDate() + 4)),
    updatedAt: new Date(today.setDate(today.getDate() + 4)),
  },
  {
    id: 8,
    phoneNumber: "123453",
    email: "bbc@gmail.com",
    linkedIn: 4,
    linkPrecedence: "secondary",
    createdAt: new Date(today.setDate(today.getDate() + 5)),
    updatedAt: new Date(today.setDate(today.getDate() + 5)),
  },
  {
    id: 9,
    phoneNumber: "123454",
    email: "bbb@gmail.com",
    linkPrecedence: "primary",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    phoneNumber: "123455",
    email: "ccc@gmail.com",
    linkPrecedence: "primary",
    createdAt: new Date(today.setDate(today.getDate() + 5)),
    updatedAt: new Date(today.setDate(today.getDate() + 5)),
  },
];