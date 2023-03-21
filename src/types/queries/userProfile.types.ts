// To parse this data:
//
//   import { Convert, GetUserProfileQueryData } from "./file";
//
//   const getUserProfileQueryData = Convert.toGetUserProfileQueryData(json);

export type GetUserProfileQueryData = {
  user: User;
}

export type User = {
  id:            string;
  firstName:     string | null;
  lastName:      string;
  userName:      string;
  email:         string;
  password:      string;
  role:          string;
  verified:      boolean;
  profilePicUrl: string | null;
  bio:           string | null;
  location:      string | null;
  education:     string | null;
  work:          string | null;
  availableFor:  string | null;
  createdAt:     Date;
  updatedAt:     Date;
  _count:        Count;
}

export type Count = {
  posts:        number;
  comments:     number;
  followedTags: number;
}

// Converts JSON strings to/from your types
// export class Convert {
//   public static toGetUserProfileQueryData(json: string): GetUserProfileQueryData {
//       return JSON.parse(json);
//   }

//   public static getUserProfileQueryDataToJson(value: GetUserProfileQueryData): string {
//       return JSON.stringify(value);
//   }
// }
