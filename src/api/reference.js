import { jsonInstance } from "./instance";

export const addRefItem = ({ item }) =>
  jsonInstance.post("/items", item).then(response => {
    if (response.status !== 201) return Promise.reject(response);
    return response;
  });

export const getRefItems = () =>
  jsonInstance.get("/items").then(response => {
    if (response.status !== 200) return Promise.reject(response);
    return response;
  });

export const deleteRefItem = ({ id }) =>
  jsonInstance.delete(`/items/${id}`).then(response => {
    if (response.status !== 200) return Promise.reject(response);
    return response;
  });

export const updateRefItem = ({ item }) =>
  jsonInstance.patch(`/items/${item.id}`, item).then(response => {
    if (response.status !== 200) return Promise.reject(response);
    return response;
  });
