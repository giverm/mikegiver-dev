import AboutCard from '../components/AboutCard';
import {
  RobotIcon,
  CpuIcon,
  ClockHistoryIcon,
  UnlockIcon,
  EnvelopeIcon,
} from '../components/Icons';
import { subtitle, cards } from '../data/about';
import renderLinkedText from '../utils/renderLinkedText';

const iconMap = {
  robot: RobotIcon,
  cpu: CpuIcon,
  clockHistory: ClockHistoryIcon,
  unlock: UnlockIcon,
  envelope: EnvelopeIcon,
};

function About() {
  return (
    <div>
      <h2 className="mb-2">About Me</h2>
      <p className="text-muted mb-4">{subtitle}</p>

      {cards.map((card, index) => {
        const IconComponent = iconMap[card.icon];
        return (
          <AboutCard
            key={index}
            title={card.title}
            variant={card.variant}
            icon={<IconComponent />}
          >
            {card.paragraphs.map((text, i) => (
              <p
                key={i}
                className={
                  i === card.paragraphs.length - 1 ? 'mb-0' : undefined
                }
              >
                {renderLinkedText(text)}
              </p>
            ))}
          </AboutCard>
        );
      })}
    </div>
  );
}

export default About;
