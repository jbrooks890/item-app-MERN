import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Items App</h1>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
