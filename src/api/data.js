import axios from "./index";

export const getTableData = () => {
  return axios.request({
    url: "/getTableData",
    method: "get"
  });
};

export const getFolderList = () => {
  return axios.request({
    url:'/getFolderList'
  })
}

export const getFileList = () => {
  return axios.request({
    url:'/getFileList'
  })
}
