import { todoDetailState } from "@/Recoil/Recoil";
import { Textarea } from "@mantine/core";
import { useRecoilState } from "recoil";


const TextareaBox = () => {
  const [value, setValue] = useRecoilState(todoDetailState);
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
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </>
  );
};

export default TextareaBox;
