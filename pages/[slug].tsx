import { db } from "@/firebase";
import { Button, Flex, Text } from "@mantine/core";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface List {
  title: string;
  detail: string;
}

const Detail: NextPage = ({ data }: any) => {
  const router = useRouter();

  const handleEditButton = () => {
    router.push({
      pathname: "/edit",
    });
  };


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


export const getStaticPaths: GetStaticPaths = async () => {
  const firestore = getFirestore();
  const colRef = collection(firestore, "list");

  const snapshot = await getDocs(colRef);
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { slug: doc.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const docRef = doc(collection(db, "list"), slug as string);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data() as List;

  return {
    props: { data },
  };
};
export default Detail;
