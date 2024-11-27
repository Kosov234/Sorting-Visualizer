export const randomizeArray = (): number[] => {
  return Array.from({ length: 150 }, () => Math.floor(Math.random() * 500));
};
