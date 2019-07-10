import React from 'react';
import styled from 'styled-components';

import SectionH3 from '../components/SectionH3';

import CertificateForm from '../containers/CertificateForm';

const CertificateInfo = () => {
  return (
    <>
      <SectionH3 text={'資格'}> 
        <CertificateForm />
      </SectionH3>
    </>
  )
}

export default CertificateInfo;