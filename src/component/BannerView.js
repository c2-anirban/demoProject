import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";







const BannerView = () => {
  const myStyle = {
    backgroundImage: "url('banner.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    opacity: "2.5",
  };

  return (
    <div className="BannerViewr carousel" style={myStyle}>
      <div className="col-md-12 row">
        <div className="navbar navbar-expand-lg navbar-light bg-transparent mt-4">
          <a className="navbar-brand" href="/">
            <img src="logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav mr-sm-2  ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Product Configurator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container clearfix">
          <div className="col-md-12 row">
            <div className="col-md-6 left-bg text-white">
              <h4 className="left-bg-heading col-md-12">
                ELECTRONIC MANUFACTURING SERVICE MADE SIMPLIER
              </h4>
              <h6 className="col-md-12">
                We strive to be your trusted electronics manufacturing services
                provider. Own product of global standerd at compitive rates
              </h6>
              <button type="button" class="btn btn-danger">
                Start Building Your Brand
              </button>
            </div>
            <div className="col-md-6 right-bg">
              <img
                src="led_tubelight.png"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerView;
