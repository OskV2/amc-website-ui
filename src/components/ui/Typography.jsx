export const H1 = ({ className, children }) => {
  return <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-normal ` + className}>{children}</h1>;
};

export const H2 = ({ className, children }) => {
  return <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold leading-normal ` + className}>{children}</h2>;
};

export const H3 = ({ className, children }) => {
  return <h3 className={`text-3xl font-bold ` + className}>{children}</h3>;
};

export const H4 = ({ className, children }) => {
  return <h4 className={`text-2xl font-bold ` + className}>{children}</h4>;
};

export const H5 = ({ className, children }) => {
  return <h5 className={`text-xl font-bold ` + className}>{children}</h5>;
};

export const H6 = ({ className, children }) => {
  return <h6 className={`text-lg font-bold ` + className}>{children}</h6>;
};
