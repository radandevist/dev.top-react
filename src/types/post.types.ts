export type IPost = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  coverImageUrl: string;
  slug: string;
  deleted: boolean;
  pinned: boolean;
  published: boolean;
  publishedAt: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
// export type IPost = Record<string, any>;

// export type HomePostsQueryData = {};