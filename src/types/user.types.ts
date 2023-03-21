export type IUser = {
  id:            string;
  firstName:     string | null;
  lastName:      string;
  userName:      string;
  email:         string;
  password:      string;
  role:          string;
  verified:      boolean;
  profilePicUrl: string | null;
  // profile
  bio: string | null;
  location: string | null;
  education: string | null;
  work: string | null;
  availableFor: string | null;
  // ===
  createdAt:     Date;
  updatedAt:     Date;
};
