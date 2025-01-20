export interface IPostsResponse {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
  }
  
export  interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
  }
  
  interface Reactions {
    likes: number;
    dislikes: number;
  }