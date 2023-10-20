import { type ValueOf } from 'shared/build/index.js';

import { type ButtonThemes } from '../model.js';

type ButtonType = ValueOf<typeof ButtonThemes>;

export { type ButtonType };
