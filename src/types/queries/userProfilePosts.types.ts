export type UserProfilePostsQueryData = {
  postsCount: number;
  count:      number;
  posts:      Post[];
}

export type Post = {
  id:            string;
  title:         string;
  subtitle:      string | null;
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
  tags:          Tag[];
  _count:        Count;
}

export type Count = {
  comments:  number;
  reactions: number;
}

export type Author = {
  id:            string;
  firstName:     string | null;
  lastName:      string;
  userName:      string;
  email:         string;
  password:      string;
  role:          string;
  verified:      boolean;
  profilePicUrl: string | null;
  createdAt:     Date;
  updatedAt:     Date;
  // TODO: Add up the other fields related to the profile
}

export type Tag = {
  id:        string;
  name:      string;
  color:     string;
  createdAt: Date;
  updatedAt: Date;
}

// // Converts JSON strings to/from your types
// export class Convert {
//   public static toSearchPostsQueryData(json: string): SearchPostsQueryData {
//       return JSON.parse(json);
//   }

//   public static searchPostsQueryDataToJson(value: SearchPostsQueryData): string {
//       return JSON.stringify(value);
//   }
// }
