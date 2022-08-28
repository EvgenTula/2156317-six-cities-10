import { Owner } from './place';

export type Comment = {
    comment: string
    date: string
    id: number
    rating: number
    user: Owner;
  };
