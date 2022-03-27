import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
import UlBlock from '../Components/UlBlock';

const InsertMode = () => (
  <>
    <Slide>
      <SlideWithTitle title="Syntax of Vim">
        <UlBlock>
          <li>How to type?</li>
        </UlBlock>
        <img width="850px" src="image/insert-mode.png" alt="insert-mode" />
      </SlideWithTitle>
      <SlideWithTitle title="Typing (Simple Verbs)">
        <table>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>i</td>
              <td> insert before the cursor</td>
            </tr>
            <tr>
              <td>I</td>
              <td> insert at the beginning of the cursor</td>
            </tr>
            <tr>
              <td>a</td>
              <td> append after the cursor</td>
            </tr>
            <tr>
              <td>A</td>
              <td> append at the end of the line</td>
            </tr>
            <tr>
              <td>o</td>
              <td> open a new line below the current one</td>
            </tr>
            <tr>
              <td>O</td>
              <td> open a new line above the current one</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <Slide>
        <h3>Let's type "Hello World"!</h3>
      </Slide>
    </Slide>
  </>
);

export default InsertMode;
