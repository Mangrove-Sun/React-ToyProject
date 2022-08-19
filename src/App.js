import GlobalStyles from './style/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import MyLocation from './components/MySido';
import WholeSido from './components/WholeSido';
import FavoritesList from './components/Favorites';
import BottomTapMenu from './components/TapMenu';


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
