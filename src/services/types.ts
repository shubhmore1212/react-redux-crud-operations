export interface GetUserResponse {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export type PartialGetUserResponse = Partial<GetUserResponse>;
