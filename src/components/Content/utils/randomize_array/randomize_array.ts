export const randomizeArray = (): number[] => {
  return Array.from({ length: 70 }, () => Math.floor(Math.random() * 500));
};
