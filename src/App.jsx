import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Profile, Messages, Settings } from './pages';

function App() {
  return (
    <div className="p-6">
      <h2 className="text-5xl text-slate-500 font-semibold">Tabs pill</h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
