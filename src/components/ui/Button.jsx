const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    href, 
    className = '', 
    ...props 
  }) => {
    const baseStyles = 'inline-flex items-center font-semibold transition-colors rounded-lg';
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700',
      white: 'bg-white text-primary-600 hover:bg-gray-100',
      outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-600'
    };
  
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2',
      lg: 'px-8 py-3 text-lg'
    };
  
    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
    if (href) {
      return (
        <a href={href} className={styles} {...props}>
          {children}
        </a>
      );
    }
  
    return (
      <button className={styles} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
  
  