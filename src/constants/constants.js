export const LOGO_IMAGE_URL =
  "https://media.licdn.com/dms/image/C510BAQHGLo1QDKKQsw/company-logo_200_200/0/1630600407981?e=1721865600&v=beta&t=__9MQseSRCRWS529N87MO9MBCz9ro4UgQFsZeYstUEE";
const date = new Date();
const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const getTime = (date) => {
  let time = "";
  if (date.getMinutes().toString().length < 2) {
    time = date.getHours() + ":0" + date.getMinutes();
  } else {
    time = date.getHours() + ":" + date.getMinutes();
  }
  return time;
};
export const getDate = () => {
  return date.getDay() + " " + monthsList[date.getMonth() - 1];
};

export const applyColorClass = (index) => {
  let color = "";
  if (index === 0) color = "color-blue";
  else if (index === 1) color = "color-voilet";
  else if (index === 2) color = "color-red";
  else if (index === 3) color = "color-orange";
  else if (index === 4) color = "color-green";
  return color;
};

export const API_URL_IMAGES = "https://fakestoreapi.com/products";
