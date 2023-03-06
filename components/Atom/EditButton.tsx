import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface Props {
  onClick: () => void;
}

const EditButton: React.FC<Props> = ({ onClick }) => {
  return (<>

    <Button onClick={onClick} color="orange" size="md">
      更新
    </Button>

  </>
  );
};

export default EditButton;
