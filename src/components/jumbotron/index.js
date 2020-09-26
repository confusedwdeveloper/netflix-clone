import * as React from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

// something to seperate text and image
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

// title
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

//subtitle
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

// image
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};