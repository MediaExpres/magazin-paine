import Directory  from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Paine',
      imageUrl: 'https://mediaexpres.ro/magazin/paine.png'
    },
    {
      id: 2,
      title: 'Cozonac',
      imageUrl: 'https://mediaexpres.ro/magazin/cozonac.png'
    },
    {
      id: 3,
      title: 'Covrigi',
      imageUrl: 'https://mediaexpres.ro/magazin/covrigi.png'
    },
    {
      id: 4,
      title: 'Cornulete',
      imageUrl: 'https://mediaexpres.ro/magazin/cornulete.png'
    },
    {
      id: 5,
      title: 'Diverse',
      imageUrl: 'https://mediaexpres.ro/magazin/tarate.png'
    },
  ]

  return (
    <Directory categories={categories} />
  
  );
};

export default App;
