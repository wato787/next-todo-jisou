
import { Button, Flex, Stack } from "@mantine/core";
import { FC, useEffect } from "react";
import PlusIcon from "../components/Atom/PlusIcon";
import { useRecoilState } from "recoil";
import { todoListState } from "@/Recoil/Recoil";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase";
import ListCard from "../components/Organisms/Card";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";


export async function getStaticProps() {
  const tasks: any = [];
  const ref = await getDocs(collection(db, "list"));
  ref.docs.map((doc) => {
    const data = { id: doc.id, title: doc.data().title };
    tasks.push(data);
  });
  return {
    props: {
      tasks,
    },
  };
}

const List: FC = ({ tasks }: any) => {
  const router = useRouter();

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
          {tasks[0]?.id && (
            <>
              {tasks.map((task: any) => (
                <ListCard
                  id={task.id}
                  key={task.id}
                  title={task.title}
                  detail={task.detail}
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
