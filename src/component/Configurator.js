import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";

const Configurator = () => {
  return (
    <div className="Configurator">
      <section id="cta" className="cta" style={{backgroundImage: "url('electrical-tech.png')" }}>
    
        <div className="container">
          <div className="text-center ">
            <p className="text-light">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Button className="cta-btn" href="#">
              Lets Start Builling Your Own Brand
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Configurator;
