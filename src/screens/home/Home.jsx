import { Header } from '../../header/header'
import { MenuReel } from '../../assets/ui/menuReel/MenuReel';
import { useEffect, useState } from 'react';
import { RenderCards } from '../../assets/ui/renderCards/RenderCards';


export const Home = () => {

  const [menu, setMenu] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('http://45.141.100.40:3000/api/menu');
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    }
    fetchMenu();
  }, []);


 



  return (
      <div style={{
        display: 'Flex',
        flexDirection: 'column',
        padding: '10px 20px',
      }}>
            <Header/>
            <MenuReel menu={menu} onCategoryChange={handleCategoryChange}/>
            <RenderCards menu={menu} currentCategory={selectedCategory}/>
        </div>
  )
}