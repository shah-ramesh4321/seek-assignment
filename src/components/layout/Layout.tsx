import "./layout.css";
import Header from "../navbar/Header";

const Layout = (props) => {
  return (
    <>
    <Header />
    <div className="layout">
      {props.children}
    </div>
    </>
  );
};

export default Layout;
