export const checkInArray = <T = any>(arr: T[], elem: T) => {
  return arr && arr.indexOf(elem) !== -1;
};
