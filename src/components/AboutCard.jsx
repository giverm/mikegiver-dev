function AboutCard({ icon, title, children, variant }) {
  const isCallout = variant === 'callout';
  const cardClass = isCallout ? 'about-callout' : 'about-card';
  const iconClass = isCallout ? 'about-callout-icon' : 'about-card-icon';
  const titleStyle = isCallout ? { color: 'var(--color-heading)' } : undefined;
  const titleClass = isCallout ? 'mt-0 mb-2' : 'text-accent mt-0';

  return (
    <div className={`${cardClass} mb-4`}>
      <div className={iconClass}>{icon}</div>
      <div>
        {title && (
          <h5 className={titleClass} style={titleStyle}>
            {title}
          </h5>
        )}
        {children}
      </div>
    </div>
  );
}

export default AboutCard;
