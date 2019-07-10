import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionLayout = styled.div`
  margin-top: 50px;
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 14px;
`;


const IconSub = styled.i`
  margin-right: 16px;
  display: inline-block;
  background-image: url(/static/img/icon.png);
  background-position: -115px 0px;
  width: 20px;
  height: 20px;
  background-size: 174px auto;
`;

const Note = styled.span`
  margin-left: 22px;
  font-size: 12px;
`;

const SectionBody = styled.div`
  margin-top: 16px;
`;

const SectionH3 = ({text, note='', children}) => (
  <>
    <SectionLayout>
      <H3><IconSub />{text}<Note>{note}</Note></H3>
      <SectionBody>
        {children}
      </SectionBody>
    </SectionLayout>
  </>
);

export default SectionH3;