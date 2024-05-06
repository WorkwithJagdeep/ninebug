import api from "./api.ts";

export const _apiCallPost = async (url: string, data: any, token: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await api.post(url, data, {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      });
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const _apiCallGet = async (url: string, token: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await api.get(url, {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      });
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};
