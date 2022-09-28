import { CREATE_EVENT, EDIT_EVENT } from "./constants";

const initialState = {};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      console.log(action);
      const eventCreated = action.data;
      return {
        eventCreated,
      };
      break;
    case EDIT_EVENT:
      console.log(action);
      const eventEdited = action.data;
      return {
        eventEdited,
      };
      break;
    default:
      return false;
      break;
  }
};
