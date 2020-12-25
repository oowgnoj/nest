import { Dog } from './model/dog.model';
export const dogProviders = [
  {
    provide: 'DOG_REPOSITORY',
    useValue: Dog,
  },
];
