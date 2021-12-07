import { ContentActionTypes } from "./content.types";
import { setContent } from "./content.utils";

const INITIAL_STATE = {
  contentItems: []
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContentActionTypes.SET_CONTENT:
      return {
        ...state,
        contentItems: setContent(action.payload)
      };
    default:
      return state;
  }
};

export default contentReducer;