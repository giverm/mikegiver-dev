import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <Sidebar />
        <main className="main-content col-md-8 col-lg-9 py-4 px-4">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
