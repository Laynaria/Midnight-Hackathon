import Header from "./Header";

export default function NavbarLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
