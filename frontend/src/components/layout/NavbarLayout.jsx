import Header from "./Header";
import Footer from "./Footer";

export default function NavbarLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
