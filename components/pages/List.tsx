import { Button, Flex, Stack } from "@mantine/core";
import { FC, useEffect } from "react";
import PlusIcon from "../Atom/PlusIcon";
import { useRecoilState } from "recoil";
import { todoListState } from "@/Recoil/Recoil";
import { collection, onSnapshot, query } from "firebase/firestore";
import {  auth, db } from "@/firebase";
import ListCard from "../Organisms/Card";
import { useRouter } from "next/router";

const List: FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
const router =useRouter();


  useEffect(() => {
    const q = query(collection(db, "list"));
    const unSub = onSnapshot(q, async (snapshot) => {
      setTodoList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          detail: doc.data().detail,
          isEdit: doc.data().isEdit,
        }))
      );
    });

    return () => {
      unSub();
    };
  }, [setTodoList]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <>
      <Flex direction="column" align="center" justify="center">
      <Button onClick={handleLogout}>ログアウト</Button>
        <PlusIcon />
        <Flex wrap="wrap" columnGap="md" mt="lg">
          {todoList[0]?.id && (
            <>
              {todoList.map((list) => (
                <ListCard
                id={list.id}
                  key={list.id}
                  title={list.title}
                  detail={list.detail}
                />
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default List;
