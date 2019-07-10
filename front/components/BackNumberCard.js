import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const BackNumber = styled.a`
  color: #1A94E0;
  &:hover {
    text-decoration: underline;
  }
`;

const BackNumberCard = ({}) => {
  return (
    <>
      <Link>
        <BackNumber>2019年のお知らせ一覧</BackNumber>
      </Link>
    </>
  );
}

export default BackNumberCard;