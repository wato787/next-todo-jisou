import { useState, useEffect, ChangeEvent } from "react";
import { Flex } from "@mantine/core";
import EditButton from "../Atom/EditButton";
import EditInput from "../Atom/EditInput";
import TextareaBox from "../Atom/TextareaBox";
import { useRouter } from "next/router";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import EditTexare from "../Atom/EditTexare";
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState, slugState } from "@/Recoil/Recoil";

interface List {
  title: string;
  detail: string;
}

// ここで情報を取得したいのですがslugをrecoilで管理しているためいid指定ができず。。
// export const getServerSideProps=async()=>{
//   if (!slug) return; // idが存在しない場合は処理を中止
//   const docRef = doc(collection(db, "list"), slug as string);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.data() as List;
//   setData(data);
// }

const Edit = () => {
  const [data, setData] = useRecoilState(dataState);
  // const [data, setData] = useRecoilState<List>({ title: "", detail: "" });
  const router = useRouter();
  // const { slug } = router.query;

  const slug = useRecoilValue(slugState)
  
  
  useEffect(() => {
    const fetchDetail = async () => {
      if (!slug) return; // idが存在しない場合は処理を中止
      const docRef = doc(collection(db, "list"), slug as string);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as List;
      setData(data);
    };
    fetchDetail();
  }, [slug]);
  
  console.log(slug)



  const handleEdit = async () => {
    if (!slug) return;
    const docRef = doc(collection(db, "list"), slug as string);
    await updateDoc(docRef, { title: data.title, detail: data.detail });
    router.push(`/${slug}`);
  };

  return (
    <>
      <Flex direction="column" align="center">
        <Flex align="center" justify="center">
          <EditInput value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
          <EditButton  onClick={handleEdit} />
        </Flex>
        <EditTexare value={data.detail} onChange={(e) => setData({ ...data, detail: e.target.value })} />
      </Flex>
    </>
  );
};

export default Edit;
