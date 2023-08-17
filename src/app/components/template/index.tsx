interface TemplateProps {
  title: string;
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ title, children }) => {
  return (
    <div>
      <header>{title}</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
