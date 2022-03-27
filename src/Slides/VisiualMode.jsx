import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const VisualMode = () => (
  <>
    <Slide>
      <SlideWithTitle title="Syntax of Vim">
        <img width="850px" src="image/visual-mode.png" alt="visual-mode" />
      </SlideWithTitle>
      <SlideWithTitle title="Copy/Paste/Cut (Simple Verbs)">
        <table style={{ fontSize: '2.5rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>y</td>
              <td> yank (copy)</td>
            </tr>
            <tr>
              <td>yy</td>
              <td> yank the whole line</td>
            </tr>
            <tr>
              <td>p</td>
              <td> paste (before the cursor)</td>
            </tr>
            <tr>
              <td>P</td>
              <td> paste (after the cursor)</td>
            </tr>
            <tr>
              <td>x</td>
              <td> cut the characters after cursor</td>
            </tr>
            <tr>
              <td>X</td>
              <td> cut the characters before cursor </td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <SlideWithTitle title="Edit words (Simple Verbs)">
        <table style={{ fontSize: '2rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'d{motion}'}</td>
              <td> delete the characters that you select</td>
            </tr>
            <tr>
              <td>D</td>
              <td> delete the characters under the cursor until the end</td>
            </tr>
            <tr>
              <td>dd</td>
              <td> delete the whole line</td>
            </tr>
            <tr>
              <td>:％d</td>
              <td> delete the whole content (command mode)</td>
            </tr>
            <tr>
              <td>r</td>
              <td> replace a character</td>
            </tr>
            <tr>
              <td>R</td>
              <td> replace an existing character</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <SlideWithTitle title="Edit words (Simple Verbs)">
        <table style={{ fontSize: '2rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>c</td>
              <td>
                change the character you select (delete and enter insert mode)
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                change the character to the end of the line (delete and enter
                insert mode)
              </td>
            </tr>
            <tr>
              <td>cc</td>
              <td> change the whole line</td>
            </tr>
            <tr>
              <td>{'>>'}</td>
              <td>indent</td>
            </tr>
            <tr>
              <td>{'<<'}</td>
              <td>outdent</td>
            </tr>
            <tr>
              <td>=</td>
              <td>  automatically indent lines</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <SlideWithTitle title="Edit words (Simple Verbs)">
        <table style={{ fontSize: '2rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>u</td>
              <td>undo</td>
            </tr>
            <tr>
              <td>Ctrl + r</td>
              <td>redo</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
    </Slide>
  </>
);

export default VisualMode;
