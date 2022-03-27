import React from 'react';
import WhyVim from './WhyVim';
import Combos from './Combos';
import Scenario from './Scenario';
import VimBasics from './VimBasics';
import InsertMode from './InsertMode';
import TitleSlide from './TitleSlide';
import VisualMode from './VisiualMode';
import CommandMode from './CommandMode';
import LastLineMode from './LastLineMode';
import ClosingSlides from './ClosingSlides';
import VimIntroduction from './VimIntroduction';
import GitVim from './GitVim';

export default [
  <TitleSlide />,
  <GitVim />,
  <VimIntroduction />,
  <WhyVim />,
  <VimBasics />,
  <InsertMode />,
  <LastLineMode />,
  <CommandMode />,
  <VisualMode />,
  <Combos />,
  <Scenario />,
  <ClosingSlides />,
];
