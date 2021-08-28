export type Auth = {
  Email: string | any;
  Password: string | any;
};

export type JwtData = {
  userId: string | any;
  token: string | any;
};

export type PostType = {
  id?: number | any;
  Title: string | any;
  Description: string | any;
  createdBy: string | any;
};

export type PostData = {
  id?: number | any;
  Title: string | any;
  Description: string | any;
};
