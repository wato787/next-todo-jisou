import { db } from "@/firebase";
import { dataList, dataState, slugState } from "@/Recoil/Recoil";
import { Button, Flex, Text } from "@mantine/core";
import { collection, doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';

interface List {
  title: string;
  detail: string;
}

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);
  // const [data, setData] = useState<List>();
  const [data, setData] = useRecoilState(dataState);
  const setSlug =useSetRecoilState(slugState)
  // anyでないとエラーがでてしまう↑
  

  useEffect(() => {
    const fetchDetail = async () => {
      if (!slug) return; // idが存在しない場合は処理を中止
      const docRef = doc(collection(db, "list"), slug as string);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as List;
      setData(data);
      setSlug(slug)
    };
    fetchDetail();
  }, []);

  const handleEditButton = () => {

    router.push({
      pathname: '/edit'
     
    })
  }

  //   console.log(data);

  return (
    <Flex direction="column" justify="center" align="center">
      <Text size="lg">タイトル{data?.title}</Text>
      <Text>詳細{data?.detail}</Text>
      <Button onClick={() => router.replace("list")}>戻る</Button>
      <Link href="/edit">
        <Button onClick={handleEditButton}>編集</Button>
      </Link>
    </Flex>
  );
};

export default Detail;
