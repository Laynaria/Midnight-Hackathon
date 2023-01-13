import api from "@axios/FetchInterceptor";

const userService = {};

userService.getAllUsers = () => {
  return api("/users", {
    method: "GET",
  }).then((res) => res.data);
};

export default userService;
