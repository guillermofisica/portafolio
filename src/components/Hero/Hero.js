import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        This site is a space to put mi experiencies in the rout to be Develop FullStack.
        </SectionText>
        <Button onClick={props.handleClick}>About my work</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;