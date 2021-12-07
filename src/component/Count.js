import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Count = () => {
  return (
    <section id="counts" class="counts section-bg">
      <div className="Count">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-4 col-6 text-center count-1">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h3>50+</h3>
              <p>Brands Served</p>
            </div>

            <div className="col-lg-4 col-6 text-center count-2">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h3>2,193,996</h3>
              <p>Product Delivery</p>
            </div>

            <div className="col-lg-4 col-6 text-center count-3">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h3>1200+</h3>
              <p>Styles Manufectured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
