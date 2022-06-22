
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
const categories = [
  {
    id: 1,
    title: 'Pâine',
    imageUrl: 'https://mediaexpres.ro/magazin/paine.png',
    route: 'shop/pâine'
  },
  {
    id: 2,
    title: 'Cozonaci',
    imageUrl: 'https://mediaexpres.ro/magazin/cozonac.png',
    route: 'shop/cozonaci'
  },
  {
    id: 3,
    title: 'Covrigi',
    imageUrl: 'https://mediaexpres.ro/magazin/covrigi.png',
    route: 'shop/covrigi'
  },
  {
    id: 4,
    title: 'Cornulețe',
    imageUrl: 'https://mediaexpres.ro/magazin/cornulete.png',
    route: 'shop/cornulețe'
  },
  {
    id: 5,
    title: 'Diverse',
    imageUrl: 'https://mediaexpres.ro/magazin/tarate.png',
    route: 'shop/diverse'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;