import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopBar from './components/TopBar';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <TopBar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO: Add other routes for login, register, dashboard, etc. */}
          </Routes>
        </main>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-violet-100 to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-violet-100 to-transparent opacity-50"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
