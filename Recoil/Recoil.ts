import { listType } from "@/types/type";
import { atom } from "recoil";

export type dataList={
  title:string,
  detail:string
}

export const todoTitleState = atom<string>({
  key: "todoTitleState",
  default: "",
});

export const todoDetailState = atom<string>({
  key: "todoDetailState",
  default: "",
});
export const dataState = atom<dataList>({
  key: "dataState",
  default: 
    {
      title:"",
      detail:""
    }
  ,
});

export const todoListState = atom<listType[]>({
  key: "todoListState",
  default: [
    {
      id: "",
      title: "",
      detail: "",
      isEdit: false,
    },
  ],
});


export const slugState=atom<any>({
  key:"slugState",
  default:""
})