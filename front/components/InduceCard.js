import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const Induce = styled.a`
  font-size: 14px;
  color: #1A94E0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const IconArrowRightBlue = styled.i`
  margin-left: 10px;
  display: inline-block;
  background-image: url(/static/img/icon.png);
  background-position: -90px -148px;
  width: 10px;
  height: 10px;
  background-size: 174px auto;
`;

const InduceCard = ({result}) => {
  return (
    <>
      <Link href="/">
        <Induce>{result.title}<IconArrowRightBlue /></Induce>
      </Link>
    </>   
  )
};

export default InduceCard;