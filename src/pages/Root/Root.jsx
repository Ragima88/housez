import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./root.scss";
import Footer from "../../components/Footer/Footer";
const Root = () => {
  return (
    <div className={"root-page"}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Root;
