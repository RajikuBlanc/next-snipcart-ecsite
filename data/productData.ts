import crowntailBettaPicture from '../public/crowntail.jpg';
import dragonScaleBettaPicture from '../public/dragonscale.jpg';
import halfmoonBettaPicture from '../public/halfmoon.jpg';
import veiltailBettaPicture from '../public/veiltail.jpg';
import { IProduct } from '../src/components/Products/Product';
export const products: IProduct[] = [
  {
    id: 'halfmoon',
    name: 'Halfmoon Betta',
    price: 25.0,
    image: halfmoonBettaPicture,
    description:
      'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.',
    url: '/api/products/halfmoon',
  },
  {
    id: 'dragonscale',
    name: 'Dragon Scale Betta',
    price: 35,
    image: dragonScaleBettaPicture,
    description:
      'The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.',
    url: '/api/products/dragonscale',
  },
  {
    id: 'crowntail',
    name: 'Crowntail Betta',
    price: 7.5,
    image: crowntailBettaPicture,
    description:
      "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
    url: '/api/products/crowntail',
  },
  {
    id: 'veiltail',
    name: 'Veiltail Betta',
    price: 5.0,
    image: veiltailBettaPicture,
    description:
      'By far the most common betta fish. You can recognize it by its long tail aiming downwards.',
    url: '/api/products/veiltail',
  },
];
