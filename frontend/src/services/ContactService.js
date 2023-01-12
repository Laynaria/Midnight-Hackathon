import api from "@axios/FetchInterceptor";

const ContactService = {};

ContactService.register = async (data) => {
  const res = await api("/contact", {
    method: "POST",
    data: data,
  });
  return res.data;
};

export default ContactService;
