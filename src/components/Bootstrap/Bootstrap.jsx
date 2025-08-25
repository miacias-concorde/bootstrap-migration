import PropTypes from 'prop-types';

export const Bootstrap = ({ version, children, className = '', ...props }) => {
  const wrapperClass = `bs${version} ${className}`.trim();
  
  return (
    <div className={wrapperClass} {...props}>
      {children}
    </div>
  );
};

Bootstrap.propTypes = {
  version: PropTypes.oneOf([4, 5]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
