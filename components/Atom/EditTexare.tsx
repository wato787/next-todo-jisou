import { Textarea } from "@mantine/core";
import { ChangeEvent } from "react";
interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const EditTexare: React.FC<Props> = ({ value, onChange }) => {
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
        onChange={onChange}
      />
    </>
  );
};

export default EditTexare;
