import {Routes, Route} from 'react-router-dom';
import './scss/app.scss'
import MainLayout from "./layouts/MainLayout";
import TeamsPage from "./pages/TeamsPage";
import {HeroesPage} from "./pages/HeroesPage";
import InfoPage from "./pages/InfoPage";


export function App() {
  return (
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path="" element={<TeamsPage/>}/>
          <Route path="heroes" element={<HeroesPage/>}/>
          <Route path="info" element={<InfoPage/>}/>
        </Route>
      </Routes>
  )
}