export type Comment = {
    id: number;
    created_at: Date;
    postId: number;
    author: string;
    userpic: string;
    body: string;
    rating: number;
}