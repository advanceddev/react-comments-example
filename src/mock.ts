import { Comment } from "@/types";

export const initialComments: Comment[] = [
  {
    id: 1,
    created_at: new Date(),
    postId: 1,
    author: "Alice",
    userpic: 'https://avatar.iran.liara.run/public',
    body: "Great post!",
    rating: 5,
  },
  {
    id: 2,
    created_at: new Date(),
    postId: 1,
    author: "Alice",
    userpic: 'https://avatar.iran.liara.run/public',
    body: "Great post!",
    rating: 5,
  }
]