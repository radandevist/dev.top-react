// export type ApiResBody<D> = {
//   status: "success";
//   data: D;
// } | {
//   status: "error";
//   message: string;
// }
export type ApiResBody<D> = {
  status: "success";
  data: D;
};
