export type IUser = {
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
};
