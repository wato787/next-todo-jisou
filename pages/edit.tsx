import Edit from "@/components/pages/Edit";
import { Button, Flex } from "@mantine/core";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from 'next/router';



const edit:NextPage = () => {
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