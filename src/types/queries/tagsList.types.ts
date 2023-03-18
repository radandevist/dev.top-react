// To parse this data:
//
//   import { Convert, TagsLisQueryData } from "./file";
//
//   const tagsLisQueryData = Convert.toTagsLisQueryData(json);

export type TagsLisQueryData = {
  tagsCount: number;
  count:     number;
  tags:      Tag[];
}

export type Tag = {
  id:        string;
  name:      string;
  color:     string;
  createdAt: Date;
  updatedAt: Date;
  _count:    Count;
}

export type Count = {
  posts: number;
}

// // Converts JSON strings to/from your types
// export class Convert {
//   public static toTagsLisQueryData(json: string): TagsLisQueryData {
//       return JSON.parse(json);
//   }

//   public static tagsLisQueryDataToJson(value: TagsLisQueryData): string {
//       return JSON.stringify(value);
//   }
// }
