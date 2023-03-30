import { notification } from "antd";
const notFound = {
  message: "Password or PhoneNumber is wrong!",
};
const notFillingError = {
  message: "Please  fill all fields!",
};
const errorNotifier = ({ errorStatus }) => {
  switch (errorStatus) {
    case 409:
      return notification.error({ ...notFound });
    case "notFillingError":
      return notification.error({ ...notFillingError });
    default:
      return;
  }
};
// const notify = ({ errorStatus, type, ...data }) => {
//   return notification[type]({ ...data });
// };
export { errorNotifier };
