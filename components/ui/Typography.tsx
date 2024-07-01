type TypographyProps = {
  className: string
  children: React.ReactNode
}

export const H1 = ({className, children}: TypographyProps) => {
  return <h1 className={`text-5xl font-extrabold` + className}>{children}</h1>;
};

export const H2 = ({className, children}: TypographyProps) => {
  return <h2 className={`text-4xl font-bold` + className}>{children}</h2>;
};

export const H3 = ({className, children}: TypographyProps) => {
  return <h3 className={`text-3xl font-bold` + className}>{children}</h3>;
};

export const H4 = ({className, children}: TypographyProps) => {
  return <h4 className={`text-2xl font-bold` + className}>{children}</h4>;
};

export const H5 = ({className, children}: TypographyProps) => {
  return <h5 className={`text-xl font-bold` + className}>{children}</h5>;
};

export const H6 = ({className, children}: TypographyProps) => {
  return <h6 className={`text-lg font-bold` + className}>{children}</h6>;
};
