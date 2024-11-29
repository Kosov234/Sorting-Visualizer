import { ARRAY_SIZE } from "../constants";

export const randomizeArray = (): number[] => {
  return Array.from({ length: ARRAY_SIZE }, () =>
    Math.floor(Math.random() * 500)
  );
};
