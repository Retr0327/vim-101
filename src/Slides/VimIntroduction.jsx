import React from 'react';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
import YellowText from '../Components/YellowText';

const VimIntroduction = () => (
  <SlideWithTitle title="What is Vim">
    <ul>
      <li>
        a <YellowText>text-editor</YellowText> for writing code while you
        navigate around the screen with a keyboard instead of a mouse
      </li>
      <li>installed on every installed on every Unix-like system</li>
    </ul>
  </SlideWithTitle>
);

export default VimIntroduction;
