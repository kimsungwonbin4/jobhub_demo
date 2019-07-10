import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionLayout = styled.div`
  
`;

const H2 = styled.h2`
  line-height: 1.6;
  font-size: 16px;
  font-weight: bold;
`;

const SectionBody = styled.div`
  margin-top: 26px;
`;

const SectionH2 = ({title, children}) => (
  <>
    <SectionLayout>
      <H2>{title}</H2>
      <SectionBody>
        {children}
      </SectionBody>
    </SectionLayout>
  </>
);

export default SectionH2;