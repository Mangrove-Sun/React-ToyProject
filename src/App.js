import GlobalStyles from './components/GlobalStyles';
import { Link, Routes, Route } from 'react-router-dom';
import MyLocation from './components/MyLocation';
import WholeSido from './components/WholeSido';
import FavoritesList from './components/FavoritesList';
import BottomTapMenu from './components/BottomTapMenu';


function App() {
  return (
    <div>
      <GlobalStyles/>
      <Routes>
        <Route path="mylocation" element={<MyLocation/>}/>
        <Route path="wholesido" element={<WholeSido/>}/>
        <Route path="favoritelist" element={<FavoritesList/>}/>
      </Routes>
      <BottomTapMenu/>
    </div>
  );
}

export default App;
