import http from "../http-common";

const getAll = () => {
  return http.get("/trip");
};

const get = id => {
  return http.get(`/trip/${id}`);
};

const create = (data) => {
  return http.post("/trip", data);
};

const update = (id, data) => {
  return http.put(`/trip/${id}`, data);
};

const remove = id => {
  return http.delete(`/trip/${id}`);
};

const removeAll = () => {
  return http.delete(`/trip`);
};

const findtrip = data => {
  return http.post(`/trip/check`,data);
};

const tripService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findtrip
};

export default tripService;