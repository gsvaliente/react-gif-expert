import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Coffee', 'Matcha']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((el) => (
        <GifGrid key={el} category={el} />
      ))}
    </>
  );
};

export { GifExpertApp };
