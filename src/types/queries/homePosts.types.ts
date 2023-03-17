// To parse this data:
//
//   import { Convert, HomePostsQueryData } from "./file";
//
//   const homePostsQueryData = Convert.toHomePostsQueryData(json);

export type HomePostsQueryData = {
  limit: number;
  count: number;
  page:  number;
  posts: Post[];
}

export type Post = {
  id:            string;
  title:         string;
  subtitle:      string;
  content:       string;
  coverImageUrl: string;
  slug:          string;
  deleted:       boolean;
  pinned:        boolean;
  published:     boolean;
  publishedAt:   Date;
  userId:        string;
  createdAt:     Date;
  updatedAt:     Date;
  author:        Author;
  reactions:     Reaction[];
  tags:          Tag[];
}

export type Author = {
  id:            string;
  firstName:     string;
  lastName:      string;
  userName:      string;
  email:         string;
  password:      string;
  role:          string;
  verified:      boolean;
  profilePicUrl: string;
  createdAt:     Date;
  updatedAt:     Date;
}

export type Reaction = {
  id:        string;
  type:      Type;
  userId:    string;
  postId:    string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Type {
  Bookmark = "BOOKMARK",
  Like = "LIKE",
  Unicorn = "UNICORN",
}

export type Tag = {
  id:        string;
  name:      string;
  createdAt: Date;
  updatedAt: Date;
}

// Converts JSON strings to/from your types
// export class Convert {
//   public static toHomePostsQueryData(json: string): HomePostsQueryData {
//       return JSON.parse(json);
//   }

//   public static homePostsQueryDataToJson(value: HomePostsQueryData): string {
//       return JSON.stringify(value);
//   }
// }
