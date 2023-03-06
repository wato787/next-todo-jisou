import { Flex } from "@mantine/core";
import FloatingLabelInput from "../Atom/InputBox";
import TextareaBox from "../Atom/TextareaBox";
import AddButton from "../Atom/AddButton";
import Link from "next/link";

const Input = () => {
  return (
    <Flex p={20} justify="center" align="center" mx="auto" direction="column">
      <FloatingLabelInput />
      <TextareaBox />

      <AddButton />
    </Flex>
  );
};

export default Input;
