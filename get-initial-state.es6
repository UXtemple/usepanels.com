import { set } from 'panels-pages/actions';
import pagesReducer from 'panels-pages/reducer';

const DUMMY = {
  '/': {
    title: 'Use Panels',
    blocks: [{
      element: 'action',
      data: {
        href: 'use-it/',
        text: 'Use it!'
      }
    }]
  },
  '/use-it': {
    title: 'Use it!',
    blocks: [{
      element: 'title',
      data: {
        text: 'Use it! :)'
      }
    }, {
      element: 'text',
      data: {
        text: 'Now...'
      }
    }]
  }
};

export default function getInitialState(panelProps) {
  return {
    pages: pagesReducer(undefined, set(DUMMY))
  };
}
