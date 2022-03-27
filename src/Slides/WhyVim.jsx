import React from 'react';
import YellowText from '../Components/YellowText';
import Slide from '../Components/RevealComponents/Slide';

const WhyVim = () => (
  <>
    <Slide>
      <Slide>
        <h3>Why would you use Vim?</h3>
      </Slide>
      <Slide transition="slide">
        <img
          width="900px"
          src="image/cannot-exit-vim.png"
          alt="cannot-exit-vim"
        />
      </Slide>
      <Slide transition="slide">
        <img
          width="900px"
          src="image/how-to-exit-vim.png"
          alt="how-to-exit-vim"
        />
      </Slide>
      <Slide transition="slide">
        <ul>
          <li>speed</li>
          <li>
            Vim speaks my language
            <YellowText> (you don’t have to think) </YellowText>{' '}
          </li>
        </ul>
      </Slide>
      <Slide transition="slide">
        <img width="800px" src="image/vim-vscode.jpeg" alt="vim-vscode" />
      </Slide>
    </Slide>
  </>
);

export default WhyVim;
