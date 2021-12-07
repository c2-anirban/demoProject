import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Ownership = () => {
  return (
    <div className="Ownership">
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Complete Ownership</h2>
            <p>
              From Design to Fulfilment we assume total responsibility and
              ownership from Design to reserve Logistic Leave your headache to
              us amd just market your brand.
            </p>
          </div>

          <div className="row">
            <div className="card-group">
              <div className="card owner-card">
                <img className="card-img" src="Vector (1).png" alt="Card cap" />
                <div className="card-body owner-card-body">
                  <h5 className="card-title">DESIGN</h5>
                  <p className="card-text">
                    Use our superior product configurator to design the product
                    you want your brand on.
                  </p>
                </div>
              </div>
              <div className="card owner-card">
                <img className="card-img" src="Vector (2).png" alt="Card cap" />
                <div className="card-body owner-card-body">
                  <h5 className="card-title">SAMPLING & COST</h5>
                  <p className="card-text">
                    Promptly get samples of product configured.
                  </p>
                </div>
              </div>
              <div className="card owner-card">
                <img className="card-img" src="Vector (3).png" alt="Card cap" />
                <div className="card-body owner-card-body">
                  <h5 className="card-title">CERTIFICATION</h5>
                  <p className="card-text-owner">
                    Once you approve the samples, our team quickly gets to the
                    job of certifications such as BIS, BEE, MNRE, UL, VDE, CE,
                    etc of your product to ensure that it fully complies with
                    the local law
                  </p>
                </div>
              </div>
              <div className="card owner-card">
                <img className="card-img" src="Vector (4).png" alt="Card cap" />
                <div className="card-body owner-card-body">
                  <h5 className="card-title">PRODUCTION</h5>
                  <p className="card-text">
                    Our production team will work alongside the certification
                    team and undertake production immediately.
                  </p>
                </div>
              </div>
              <div className="card owner-card">
                <img className="card-img" src="Vector (5).png" alt="Card cap" />
                <div className="card-body owner-card-body">
                  <h5 className="card-title">QUALITY CONTROL</h5>
                  <p className="card-text">
                    All our vendors and suppliers are onboarded after through
                    check on quality and production capabilities. Be rest
                    assured that our quality will be of global standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;
