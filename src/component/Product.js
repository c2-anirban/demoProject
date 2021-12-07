import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  return (
    <div className="Product">
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Fiducia</h2>
            <p>
              The trust is in the name. A home-grown startup, Fiducia - Powered
              by LeSol, engages with the brands to give identity to the
              products. A simple configurator enables you to put your brand to
              any product and start marketing from the word get-go
            </p>
          </div>
          <div className="card-deck col-md-12">
            <div className="container">
              <div className="row">
                <div className="card col-md-4">
                  <img
                    className="card-img-top"
                    src="led_tubelight2.png"
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">OLD FAITHFULL SHOP</h5>
                    <h4 className="card-text">Tube Light</h4>
                  </div>
                </div>
                <div className="card col-md-4">
                  <img
                    className="card-img-top"
                    src="LED-downlight-round 2.png"
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">OLD FAITHFULL SHOP</h5>
                    <h4 className="card-text">Tube Light</h4>
                  </div>
                </div>
                <div className="card col-md-4">
                  <img
                    className="card-img-top"
                    src="LED-hi-bay 1.png"
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">OLD FAITHFULL SHOP</h5>
                    <h4 className="card-text">Street Light</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
