
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
const categories = [
  {
    id: 1,
    title: 'Paine',
    imageUrl: 'https://mediaexpres.ro/magazin/paine.png',
    route: 'shop/paine'
  },
  {
    id: 2,
    title: 'Cozonac',
    imageUrl: 'https://mediaexpres.ro/magazin/cozonac.png',
    route: 'shop/paine'
  },
  {
    id: 3,
    title: 'Covrigi',
    imageUrl: 'https://mediaexpres.ro/magazin/covrigi.png',
    route: 'shop/covrigi'
  },
  {
    id: 4,
    title: 'Cornulete',
    imageUrl: 'https://mediaexpres.ro/magazin/cornulete.png',
    route: 'shop/cornulete'
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