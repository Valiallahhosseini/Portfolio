const Container = ({ variant, children }) => {
  return <div className={`container container--${variant}`}>{children}</div>;
};

export default Container;
