import React from 'react';

function NavigationDots({active}) {
  return (
    <div className="app__navigation">
      {['home', 'story', 'skills', 'testimonials', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#CA3E47' } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;