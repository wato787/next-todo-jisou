import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { CirclePlus } from "tabler-icons-react";

export default function PlusIcon() {
  return (
    <>
      <Link href="/input">
        <ActionIcon>
          <CirclePlus size={48} strokeWidth={2} color={"black"} />
        </ActionIcon>
      </Link>
    </>
  );
}
