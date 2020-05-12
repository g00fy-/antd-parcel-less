import React, { FC } from "react";
import { Button } from "antd";

type CardProps = {
  title: string;
  paragraph: string;
};

export const Dashboard: FC<CardProps> = function Dashboard(props) {
  return <Button>{props.title} - {props.paragraph}</Button>;
};
