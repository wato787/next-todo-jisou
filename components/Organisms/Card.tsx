import { db } from "@/firebase";
import { Card, Image, Text,  Button, Group } from "@mantine/core";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useRouter } from 'next/router';



export default function ListCard({
  id,
  title,
  detail,
}: {
  id: string;
  title: string;
  detail: string;
}) {
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "list", id));
  };

  const router = useRouter();


  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://source.unsplash.com/random"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Button  onClick={()=>router.push(id)} color="red">詳細ページ</Button>
      </Group>

      <Text size="sm" color="dimmed">
        {detail}
      </Text>

      <Button
        onClick={() => deleteItem(id)}
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        削除
      </Button>
    </Card>
  );
}
