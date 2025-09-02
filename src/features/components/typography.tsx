export const Header = ({ children }: React.PropsWithChildren) => {
  return <h1 className="text-2xl font-bold tracking-tight">{children}</h1>;
};

export const SubHeader = ({ children }: React.PropsWithChildren) => {
  return <h3 className="text-lg font-bold tracking-tight">{children}</h3>;
};

export const Paragraph = ({ children }: React.PropsWithChildren) => {
  return <h1 className="text-muted-foreground">{children}</h1>;
};
