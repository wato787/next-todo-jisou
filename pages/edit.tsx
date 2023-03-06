import Edit from "@/components/pages/Edit";
import { Button, Flex } from "@mantine/core";
import Link from "next/link";
import { useRouter } from 'next/router';



const edit = () => {
    return (<>
    <Flex direction="column" align="center" justify="center" >

        <Edit/>
        <Link href="/list">
      <Button>戻る</Button>
        </Link>
    </Flex>
    </>

    );
}

export default edit;