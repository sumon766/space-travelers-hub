import { Route, Routes } from 'react-router-dom';
import Navigation from './components/rockets/Navigation';
import Profile from './components/rockets/profile';
import Missions from './components/rockets/missions';
import Rockets from './components/rockets/rockets';
import Dragons from './components/features/dragons';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        header-navigation
        <Route path="/missionPage" element={<Missions />} />
        <Route path="/ProfilePage" element={<Profile />} />
        <Route path="/DragonsPage" element={<Dragons />} />
      </Routes>
    </div>
  );
}

export default App;
