import api from "@axios/FetchInterceptor";

const AuthService = {};

AuthService.register = async (data) => {
  const res = await api("/auth/register", {
    method: "POST",
    data: data,
  });
  return res.data;
};

AuthService.login = async (data) => {
  const res = await api("/auth/login", {
    method: "POST",
    data: data,
  });
  return res.data;
};

export default AuthService;
