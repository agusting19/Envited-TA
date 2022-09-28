import { CREATE_EVENT, EDIT_EVENT } from "./constants";

export const createEvent = (data) => ({
  type: CREATE_EVENT,
  data,
});

export const editEvent = (data) => ({
  type: EDIT_EVENT,
  data,
});
