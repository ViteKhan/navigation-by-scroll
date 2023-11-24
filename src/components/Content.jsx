import { Element } from 'react-scroll';
import { SECTIONS } from '../constants';

export const Content = () => {
  return (
    <div className="Content" id="applications">
      {SECTIONS.map((section, index) => (
        <Element key={section.name} name={section.name} className={section.elementClass}>
          <h2>{section.title}</h2>
        </Element>
      ))}
    </div>
  );
};