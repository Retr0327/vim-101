import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
import UlBlock from '../Components/UlBlock';
import YellowText from '../Components/YellowText';

const CommandMode = () => (
  <>
    <Slide>
      <SlideWithTitle title="Syntax of Vim">
        <img width="350px" src="image/command-mode.png" alt="command-mode" />
      </SlideWithTitle>
      <Slide>
        <h3>Let's open a file named "practice.txt"</h3>
      </Slide>
      <SlideWithTitle title="Navigation (Simple Nouns)">
        <table style={{ marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>j</td>
              <td> move down one line</td>
            </tr>
            <tr>
              <td>k</td>
              <td> move up one line</td>
            </tr>
            <tr>
              <td>h</td>
              <td> move left one character</td>
            </tr>
            <tr>
              <td>l</td>
              <td> move right one character</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <SlideWithTitle title="Navigation (Simple Nouns)">
        <UlBlock>
          <li>How to navigate the cursor? (simple nouns)</li>
        </UlBlock>
        <table style={{ fontSize: '2rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gg</td>
              <td> go to the top of the file</td>
            </tr>
            <tr>
              <td>G</td>
              <td> go to the bottom of the file</td>
            </tr>
            <tr>
              <td>0</td>
              <td> move to the beginning of the line</td>
            </tr>
            <tr>
              <td>$</td>
              <td> move to the end of the line</td>
            </tr>
            <tr>
              <td>{'t{text object}'}</td>
              <td> jump to right before the text object</td>
            </tr>
            <tr>
              <td>{'f{text object}'}</td>
              <td> jump and land on the text object</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <SlideWithTitle title="Navigation (Simple Nouns)">
        <span style={{ fontSize: '1.5rem' }}>
          * WORD: a sequence of non-blank characters, separated with white
          space.
        </span>

        <table style={{ fontSize: '2rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>w</td>
              <td> move forward one word</td>
            </tr>
            <tr>
              <td>W</td>
              <td>
                {' '}
                move forward one <YellowText>WORD</YellowText>
              </td>
            </tr>
            <tr>
              <td>b</td>
              <td> move back one word</td>
            </tr>
            <tr>
              <td>B</td>
              <td>
                move back one <YellowText>WORD</YellowText>
              </td>
            </tr>
            <tr>
              <td>e</td>
              <td> move to the end of the current word</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
    </Slide>
  </>
);

export default CommandMode;
