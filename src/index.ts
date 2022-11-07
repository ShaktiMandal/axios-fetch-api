import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create();

instance?.interceptors?.response.use(
    (res: AxiosResponse) => res,
    (err: AxiosError) => {
      throw err;
    }
  );

export const MakeAPiCall = async (url: string) => {
  console.log("Print the details");
return instance["get"](url).then((result: AxiosResponse) => {
    const { data } = result;
    return data;
    });
}