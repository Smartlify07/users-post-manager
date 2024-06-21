import { uid } from "uid";

export const generateUid = () => {
  const id = uid(5);
  return id;
};
