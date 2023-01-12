import api from "@axios/FetchInterceptor";

const ContactService = {};

ContactService.send = async (data) => {
  const res = await api("/contact", {
    method: "POST",
    data: data,
  });
  return res.data;
};

export default ContactService;
