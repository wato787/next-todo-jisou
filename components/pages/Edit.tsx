import { Flex } from "@mantine/core";
import EditButton from "../Atom/EditButton";
import EditInput from "../Atom/EditInput";
import TextareaBox from "../Atom/TextareaBox";

const Edit = () => {
  return (
    <>
      <Flex direction="column" align="center">
        <Flex align="center" justify="center">
          <EditInput />
          <EditButton />
        </Flex>
        <TextareaBox />
      </Flex>
    </>
  );
};

export default Edit;
