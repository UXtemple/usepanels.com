import { createLoad } from 'panels-pages/actions';
import db from './db';

export const load = createLoad(db);
