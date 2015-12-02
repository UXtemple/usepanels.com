import createGetInitialStatePages from 'panels-pages/get-initial-state';
import db from './db';

const getInitialStatePages = createGetInitialStatePages(db);

export default function getInitialState(props) {
  return Promise.all([
    getInitialStatePages(props),
  ]).then(([pages]) => ({
    pages
  }));
}
