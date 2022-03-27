import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
import UlBlock from '../Components/UlBlock';

const LastLineMode = () => (
  <>
    <Slide>
      <SlideWithTitle title="Syntax of Vim">
        <UlBlock>
          <li>Some useful commands</li>
        </UlBlock>
        <img
          width="850px"
          src="image/last-line-mode.png"
          alt="last-line-mode"
        />
      </SlideWithTitle>
      <SlideWithTitle title="Some Useful Commands">
        <table>
          <thead>
            <tr>
              <th>key </th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> :q</td>
              <td> quit vim</td>
            </tr>
            <tr>
              <td> :q!</td>
              <td> quit vim without saving</td>
            </tr>
            <tr>
              <td> {':w <filename> '}</td>
              <td> write the file</td>
            </tr>
            <tr>
              <td> {':wq <filename> '}</td>
              <td> write the file and quit</td>
            </tr>
            <tr>
              <td> :set number</td>
              <td> show line numbers</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <SlideWithTitle title="Some Useful Commands">
        <table style={{ fontSize: '2rem' }}>
          <thead>
            <tr>
              <th style={{ width: '20rem' }}>key </th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{':set shiftwidth={num}'}</td>
              <td> set indent width (default is 8)</td>
            </tr>
            <tr>
              <td> :set autoindent</td>
              <td> apply the indentation of the current line to the next</td>
            </tr>
            <tr>
              <td> :set clipboard=unnamed</td>
              <td> can copy/paste outside vim</td>
            </tr>
            <tr>
              <td> :s/foo/bar/</td>
              <td>
                replace the first occurrence of foo on the current line with bar
              </td>
            </tr>
            <tr>
              <td> :%s/foo/bar/</td>
              <td> replace all the texts named foo with bar</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <Slide>
        <h3>Let's make our file look better!</h3>
      </Slide>
    </Slide>
  </>
);

export default LastLineMode;
