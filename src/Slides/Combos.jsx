import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
import UlBlock from '../Components/UlBlock';
import YellowText from '../Components/YellowText';

const Combos = () => (
  <>
    <Slide>
      <Slide>
        <h3>Onwards to Combos!</h3>
      </Slide>

      <SlideWithTitle title="Text objects (Simple Nouns)">
        <table style={{ fontSize: '2.5rem', width: '30rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>w</td>
              <td>word</td>
            </tr>
            <tr>
              <td>s</td>
              <td>sentence</td>
            </tr>
            <tr>
              <td>p</td>
              <td> paragraph</td>
            </tr>
            <tr>
              <td>t</td>
              <td>tag</td>
            </tr>
            <tr>
              <td>"</td>
              <td> double quote</td>
            </tr>
            <tr>
              <td>{'{'}</td>
              <td> (curly) bracket</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>

      <SlideWithTitle title="Text range (Prepositions)">
        <table style={{ fontSize: '2.5rem', width: '30rem', marginTop: 30 }}>
          <thead>
            <tr>
              <th>key</th>
              <th>function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>i</td>
              <td> inside</td>
            </tr>
            <tr>
              <td>a</td>
              <td> a (determiner)</td>
            </tr>
          </tbody>
        </table>
      </SlideWithTitle>
      <Slide>
        <h3>Verb + Noun</h3>
        <UlBlock>
          <li>
            <YellowText>dw</YellowText> → delete words
          </li>
          <li>
            <YellowText>cw</YellowText> → change words (into insert mode)
          </li>
          <li>
            <YellowText>das</YellowText> → delete a sentence
          </li>
        </UlBlock>
      </Slide>
      <Slide>
        <h3>Commands are Repeatable & Undoable</h3>
      </Slide>
      <Slide>
        <h3>Preposition + Noun</h3>
        <UlBlock>
          <li>
            <YellowText>iw</YellowText> → inner word
          </li>
          <li>
            <YellowText>it</YellowText> → inner tag
          </li>
          <li>
            <YellowText>i"</YellowText> → inner quote
          </li>
          <li>
            <YellowText>ip</YellowText> → inner paragraph
          </li>
          <li>
            <YellowText>t:</YellowText> → to the colon
          </li>
          <li>
            <YellowText>{'f{'}</YellowText> → on the bracket
          </li>
        </UlBlock>
      </Slide>
    </Slide>
  </>
);

export default Combos;
