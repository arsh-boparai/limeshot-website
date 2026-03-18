const SectionHeading = ({ label, title, subtitle, centered = false }) => {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && <span className="section-label">{label}</span>}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight ${subtitle ? 'mb-4' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
