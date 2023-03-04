import { Flex } from "@mantine/core";
import PlusIcon from "../Atom/PlusIcon";
import ListCard from "../Organisms/ListCard";

const List = () => {
    return (
      <>
      <Flex direction="column" align="center" justify="center">
        <PlusIcon/>
        {/* マップ関数でカード表示 */}
        <ListCard/>
      </Flex>
      </>
    );
}

export default List;