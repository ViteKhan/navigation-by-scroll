import { Link } from 'react-scroll';
import { SECTIONS } from '../constants';

const duration = 500;

export const Navigation = () => {
  return (
    <aside className="Navigation">
      {SECTIONS.map(sectionLink => (
        <Link
          key={sectionLink.name}
          activeClass={sectionLink.activeLinkClass}
          className="Link"
          to={sectionLink.name}
          duration={duration}
          spy
          smooth
          containerId="applications"
        >
          {sectionLink.title}
        </Link>
      ))}
    </aside>
  );
}
