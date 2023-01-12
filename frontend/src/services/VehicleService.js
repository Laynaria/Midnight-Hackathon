import api from "@axios/FetchInterceptor";

const vehicleService = {};

vehicleService.getVehicules = () => {
  return api("/car", {
    method: "GET",
  }).then((res) => res.data);
};

vehicleService.postVehicle = () => {
  return api("/car", {
    method: "POST",
  }).then((res) => res.data);
};

export default vehicleService;
