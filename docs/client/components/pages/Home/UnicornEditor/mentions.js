import { fromJS } from 'immutable';

const mentions = fromJS([
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'https://pbs.twimg.com/profile_images/477132877763579904/m5bFc8LF_400x400.png',
  },
  {
    name: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://pbs.twimg.com/profile_images/705714058939359233/IaJoIa78_400x400.jpg',
  },
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://pbs.twimg.com/profile_images/535634005769457664/Ppl32NaN_400x400.jpeg',
  },
  {
    name: 'Pascal Brandt',
    link: 'https://twitter.com/psbrandt',
    avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
  },
]);

// const mentions = fromJS([
//   { name: 'Matthew Russell', link: 'https://twitter.com/mrussell247' },
//   { name: 'Jyoti Puri', link: 'https://twitter.com/jyopur' },
//   { name: 'Max Stoiber', link: 'https://twitter.com/mxstbr' },
//   { name: 'Nik Graf', link: 'https://twitter.com/nikgraf' },
// ]);

// const mentions = fromJS([
//   { name: 'Matthew Russell' },
//   { name: 'Jyoti Puri' },
//   { name: 'Max Stoiber' },
//   { name: 'Nik Graf' },
// ]);

export default mentions;
