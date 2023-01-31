import axios from "axios";

import { PartialGetUserResponse } from "./types";

const instance = axios.create({ baseURL: "https://reqres.in/api" });

export const GET = (url: string, params?: any): Promise<any> => {
  return instance.get(url, { params }).then((res) => res.data);
};

export const POST = (url: string, body: PartialGetUserResponse) => {
  return instance.post(url, body).then((res) => res.data);
};

export const PATCH = (url: string, body: PartialGetUserResponse) => {
  return instance.patch(url, body).then((res) => res);
};

export const DELETE = (url: string) => {
  return instance.delete(url).then((res) => res);
};
