function TimelineItem({ title, organization, dateRange, items, active }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-dot${active ? ' timeline-dot-active' : ''}`} />
      <div className="timeline-content">
        <div className="d-flex justify-content-between align-items-start flex-wrap">
          <div>
            <strong className="d-block">{title}</strong>
            <span className="text-accent" style={{ fontSize: '0.9rem' }}>
              {organization}
            </span>
          </div>
          <span className="text-subdued small">{dateRange}</span>
        </div>
        {items && items.length > 0 && (
          <ul className="mt-2">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
