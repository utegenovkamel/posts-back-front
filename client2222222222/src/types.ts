export type Auth = {
  Email: string;
  Password: string;
};

export type JwtData = {
  userId: string;
  token: string;
};

export type PostType = {
  id?: number;
  Title: string;
  Description: string;
  createdBy: string;
};

export type PostData = {
  id?: number;
  Title: string;
  Description: string;
};
