import kit from './assets/kit.jpg';
import mug from './assets/mug.jpg';
import tshirt from './assets/tshirt.jpg';
import ball from './assets/ball.jpeg';
import dogcollar from './assets/dogcollar.png';
import keyring from './assets/keyring.png';
import kitsocks from './assets/kitsocks.png';
import navyshorts from './assets/navyshorts.png';
import navyt from './assets/navyt.png';
import socks from './assets/socks.jpg';
import hoodie from './assets/hoodie.png';
import poster from './assets/poster.png';
import shorts from './assets/shorts.png';

const data = {
  categories: [
    {
      id: 1,
      img: kit,
      title: 'KIT',
      category: 'kit',
    },
    {
      id: 2,
      img: tshirt,
      title: 'LEISURE',
      category: 'leisure',
    },
    {
      id: 3,
      img: mug,
      title: 'ACCESSORIES',
      category: 'accessories',
    },
    {
      id: 4,
      img: socks,
      title: 'SALE',
      category: 'sale',
    },
  ],

  products: [
    {
      id: 1,
      title: 'shirt',
      img: kit,
      category: 'kit',
      price: 30,
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },
    {
      id: 2,
      title: 'shorts',
      img: shorts,
      category: 'kit',
      price: 20,
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },
    {
      id: 3,
      title: 'socks',
      img: kitsocks,
      category: 'kit',
      price: 10,
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },

    {
      id: 4,
      title: 'hoodie',
      img: hoodie,
      category: 'leisure',
      price: 20,
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },
    {
      id: 5,
      title: 'T-shirt',
      img: navyt,
      category: 'leisure',
      price: 10,
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },
    {
      id: 6,
      title: 'shorts',
      img: navyshorts,
      category: 'leisure',
      price: 12.5,
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },
    {
      id: 7,
      title: 'dog collar',
      img: dogcollar,
      category: 'accessories',
      price: 4,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor, mi id bibendum maximus, diam diam pulvinar lacus, vel pulvinar nulla turpis ac felis. Proin enim urna, efficitur a finibus a, accumsan in orci. Suspendisse at lectus ipsum. Pellentesque accumsan risus non lorem convallis sollicitudin.',
      sizes: ['S', 'M', 'L'],
      onSale: false,
    },
    {
      id: 8,
      title: 'keyring',
      img: keyring,
      category: 'accessories',
      price: 3,
      sizes: ['onesize'],
      onSale: false,
    },
    {
      id: 9,
      title: 'mug',
      img: mug,
      category: 'accessories',
      price: 3,
      sizes: ['onesize'],
      onSale: false,
    },
    {
      id: 10,
      title: 'socks',
      img: socks,
      category: 'kit',
      price: 10,
      sizes: ['S', 'M', 'L'],
      onSale: true,
    },
    {
      id: 11,
      title: 'ball',
      img: ball,
      category: 'accessories',
      price: 8,
      sizes: ['S', 'M', 'L'],
      onSale: true,
    },
    {
      id: 12,
      title: 'poster',
      img: poster,
      category: 'accessories',
      price: 4,
      sizes: ['onesize'],
      onSale: true,
    },
  ],
};

export default data;
