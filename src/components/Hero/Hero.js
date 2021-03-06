import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident voluptas nemo aliquid ratione voluptatum adipisci eum error harum minima, ad iure autem repellendus, aliquam corrupti saepe molestias! Eos, ut.
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;