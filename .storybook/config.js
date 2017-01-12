import { configure } from '@kadira/storybook';

import 'normalize.css/normalize.css';

function loadStories() {
  require('../src/stories/portfolio.story.jsx');
}

configure(loadStories, module);
