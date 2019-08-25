import Mock from 'mockjs'
import {getUserInfo} from './response/user'
import { getTableData, getFileList, getFolderList} from "./response/data";

Mock.mock(/\getUserInfo/, getUserInfo)
Mock.mock(/\/getTableData/, "get", getTableData);
Mock.mock(/\/getFileList/, "get", getFileList);
Mock.mock(/\/getFolderList/, "get", getFolderList);

export default Mock
