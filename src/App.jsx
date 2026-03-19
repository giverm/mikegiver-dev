import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Resume from './pages/Resume';
import About from './pages/About';

function App() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <Sidebar />
        <main className="main-content col-md-8 col-lg-9 py-4 px-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
