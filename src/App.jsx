import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Resume from './pages/Resume';
import About from './pages/About';

function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: '50vh' }}
    >
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <a href="/" className="btn btn-outline-primary">
        Go Home
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Sidebar />
        <main
          id="main-content"
          className="main-content col-md-8 col-lg-9 py-4 px-4"
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
