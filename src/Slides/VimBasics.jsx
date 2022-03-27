import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const VimBasics = () => (
  <>
    <Slide>
      <Slide>
        <h3>Basics</h3>
      </Slide>
      <Slide transition="slide">
        <img width="850px" src="image/vim-mode.png" alt="vim-mode" />
      </Slide>
      <SlideWithTitle title="Syntax of Vim">
        <ul>
          <li>Verbs </li>
          <li>Nouns</li>
          <li>Prepositions</li>
        </ul>
      </SlideWithTitle>
      <Slide>
        <h3>Let's dive in!</h3>
      </Slide>
    </Slide>
  </>
);

export default VimBasics;
