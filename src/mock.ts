import type { Comment } from "@/types";

const today = new Date()
const fiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 5))


export const initialComments: Comment[] = [
  {
    id: 1,
    created_at: today,
    postId: 1,
    author: "Mickey",
    email: 'example@mail.com',
    userpic: 'https://avatar.iran.liara.run/public',
    body: "Вроде гуд",
    rating: 4,
  },
  {
    id: 2,
    created_at: today,
    postId: 1,
    author: "Alice",
    email: 'example@mail.com',
    userpic: 'https://avatar.iran.liara.run/public',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: -11,
  },
  {
    id: 3,
    created_at: fiveDaysAgo,
    postId: 1,
    author: "Bob",
    email: 'example@mail.com',
    userpic: 'https://avatar.iran.liara.run/public',
    body: "Первый! 🤠",
    rating: 25,
  }
]