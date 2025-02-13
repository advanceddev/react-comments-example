export type Comment = {
    id: number;
    created_at: Date;
    postId: number;
    author: string;
    email: string;
    userpic: string;
    body: string;
    rating: number;
}