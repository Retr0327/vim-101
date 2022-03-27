import React from 'react';
import Bash from '../Components/Highlight/Bash';
import Slide from '../Components/RevealComponents/Slide';

const vim = `
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
".git/MERGE_MSG" 7L, 293C
`;

const Scenario = () => (
  <>
    <Slide>
      <Slide>
        <Bash code={vim} />
      </Slide>
    </Slide>
  </>
);

export default Scenario;
