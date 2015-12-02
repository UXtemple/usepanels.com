import PouchDB from 'pouchdb';
import pkg from './package.json';

// If we need custom databases, this could export a function that holds local copies of any
// initialised redux connections
export const NAME = `https://db.uxtemple.com/${pkg.name.replace('.', '')}`;
export default new PouchDB(NAME);
