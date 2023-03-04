import { Card, Text, Button, Group } from "@mantine/core";

export default function ListCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}> 入力されたタイトルを出力</Text>
        <Button variant="outline" color="teal">
      編集
    </Button>
      </Group>
      <Text size="sm" color="dimmed">
        詳細
      </Text>
      <Button variant="light" color="red" fullWidth mt="md" radius="md">
        削除
      </Button>
    </Card>
  );
}
