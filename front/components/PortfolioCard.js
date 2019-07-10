import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components/shared/Button';
import { IconEdit, IconDelete } from '../components/shared/Icon';

const PortfolioWrapper = styled.div`
  width: 204px;
`;

const Portfolio = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 204px;
  height: 204px;
  background: #E6E6E6;
`;

const ActionEditWrapper = styled.ul`
  display: flex;
  position: absolute;
  z-index: 1;
  right: 10px;
  bottom: 10px;
`;

const Item = styled.li `
  &:not(:first-child) {
    margin-left: 6px;
  }
`;

const Title = styled.div`
  margin-top: 12px;
  line-height: 1.4;
`;

const PortfolioCard = ({ filename, title }) => {
  return (
    <>
      <PortfolioWrapper>
        <Portfolio>
          <img src={filename} width="204" alt="" />
          <ActionEditWrapper>
            <Item>
              <ButtonLink type="circle" size="w36_h36_f12">
                <IconEdit />
              </ButtonLink>
            </Item>
            <Item>
              <ButtonLink type="circle" size="w36_h36_f12">
                <IconDelete />
              </ButtonLink>
            </Item>
          </ActionEditWrapper>
        </Portfolio>
        <Title>{title}</Title>
      </PortfolioWrapper>
    </>
  );
};

export default PortfolioCard;