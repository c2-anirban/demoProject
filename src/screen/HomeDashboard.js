import "../App.css";
import BannerView from "../component/BannerView";
import Count from "../component/Count";
import Configurator from "../component/Configurator";
import Product from "../component/Product";
import Ownership from "../component/Ownership";
import Footer from "../component/Footer";

const HomeDashboard = () => {
  return (
    <div className="HomeDashboard">
      <BannerView />
      <Count />
      <Product />
      <Ownership />
      <Configurator />
      <Footer />
    </div>
  );
};

export default HomeDashboard;
