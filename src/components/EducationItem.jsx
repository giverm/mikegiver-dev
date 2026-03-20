function EducationItem({ degree, field, school, dateRange }) {
  return (
    <div className="education-item">
      <div className="education-degree">{degree}</div>
      <strong>{field}</strong>
      <div className="text-subdued small">{school}</div>
      <div className="text-accent small">{dateRange}</div>
    </div>
  );
}

export default EducationItem;
