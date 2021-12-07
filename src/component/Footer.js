import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="page-footer font-small bg-dark pt-4 text-white">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">
                <img src="logo.png" alt="Logo" />
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-3"> */}

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3 text-decoration-none">
              <h5 className="text-uppercase">Useful Links</h5>

              <ul className="list-unstyled text-white">
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#!">Product Configurator</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#!">Support</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#!">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 bg-black">
          Copyright © 2021 FIDUCIA all right reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
