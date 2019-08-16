import {Fee} from './fee';

export interface FeeSetting {

  /* A name for this fee setting. */
  name: string;

  description?: string;

  /* A list of per-transaction fees */
  fees: Fee[];
}
