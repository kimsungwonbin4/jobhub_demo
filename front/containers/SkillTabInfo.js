import React from 'react';
import styled from 'styled-components';

import SectionH3First from '../components/SectionH3First';

import SkillForm from '../containers/SkillForm';

const SkillTabInfo = () => {
  return (
    <>
      <SectionH3First text={'スキル'}> 
        <SkillForm />
      </SectionH3First>
    </>
  )
}

export default SkillTabInfo;