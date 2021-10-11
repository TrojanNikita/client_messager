

import { Button, Typography } from 'antd';
import React, {  } from 'react';

type Props = {
    title: string;
    onClick: () => void;
};

export default function AddNewButton({title, onClick}: Props) {
  return (
    <Button onClick={onClick}>
        <Typography>{title}</Typography>
    </Button>
  );
}