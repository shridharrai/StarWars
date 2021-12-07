import { ContentActionTypes } from "./content.types";

export const setContent = contentItems => ({
  type: ContentActionTypes.SET_CONTENT,
  payload: contentItems
});