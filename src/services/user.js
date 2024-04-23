import request from "../utils/request"

const baseUrl = "https://g12nhapmoncnpm.somee.com";

export const loginAccount = (data) => {
    return request(`${baseUrl}/Account/loginAccount`, {
        method: "POST",
        data
      });
}