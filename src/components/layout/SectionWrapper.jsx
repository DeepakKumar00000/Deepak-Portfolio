import React from 'react';

const SectionWrapper = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-600 rounded-full"></span>
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mt-4">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
