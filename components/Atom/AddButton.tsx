import { todoDetailState, todoTitleState } from "@/Recoil/Recoil";
import { Button } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { useRecoilState } from "recoil";
import { collection, addDoc } from 'firebase/firestore';
import {db}from "../../firebase"
import { useRouter } from "next/router";
import { useEffect } from 'react';

const AddButton = ({id}:{id?:string}) => {
  const [todoTitle, setTodoTitle] = useRecoilState(todoTitleState);
  const [todoDetail, setTodoDetail] = useRecoilState(todoDetailState);
  const uuid = useId(id);
  const router =useRouter();
  
  const addClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // e.preventDefault();
    if (todoTitle === "") return;
    if (todoDetail === "") return;
 
    await addDoc(collection(db, 'list'), {
      id: uuid,
      title: todoTitle,
      detail: todoDetail,
      isEdit: false,
    });
    setTodoDetail("");
    setTodoTitle("");
    router.push('/list')
  };

  


  return (
    <Button color="orange" size="md" onClick={addClick}>
      追加
    </Button>
  );
};

export default AddButton;
