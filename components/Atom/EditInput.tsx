import { Input } from "@mantine/core";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const EditInput: React.FC<Props> = ({ value, onChange }) => {
  return <Input value={value} onChange={onChange} m={30} size="lg" />;
};

export default EditInput;
