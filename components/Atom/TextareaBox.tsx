import { Textarea } from "@mantine/core";


const TextareaBox = () => {
  return (
    <>
      <Textarea
        placeholder="テキスト"
        label="詳細"
        variant="filled"
        size="xl"
        withAsterisk
        w={800}
        h={200}
      />
    </>
  );
};

export default TextareaBox;
