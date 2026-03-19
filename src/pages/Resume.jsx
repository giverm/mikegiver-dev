function Resume() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="btn btn-outline-primary btn-sm"
        >
          Download PDF
        </a>
      </div>

      <div className="ratio ratio-1x1" style={{ maxHeight: '80vh' }}>
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-light rounded p-5">
            <p className="text-muted mb-3">
              Resume PDF preview is not available in this browser.
            </p>
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}

export default Resume;
