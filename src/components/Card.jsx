import { Fragment, useState } from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
const Card = () => {
  const [cateringVisible, setCateringVisible] = useState(false);
  const [travelVisible, setTravelVisible] = useState(false);
  const [massageVisible, setMassageVisible] = useState(false);
  const [laundryVisible, setLaundryVisible] = useState(false);
  // useEffect(() => {
  //   const interval = setInterval(setCateringVisible(false), 1000);
  //   return () => clearInterval(interval);
  // });
  return (
    <Fragment>
      <h2 style={{ margin: "10px 0 10px 0" }}>Services Offered</h2>
      <div>
        <button onClick={() => setCateringVisible(true)} className="card_btn">
          <LunchDiningIcon />
        </button>
        <p className="services-card">Catering</p>
        <button onClick={() => setTravelVisible(true)} className="card_btn">
          <CardTravelIcon />
        </button>
        <p className="services-card">Tours</p>
        <button onClick={() => setMassageVisible(true)} className="card_btn">
          <AirlineSeatReclineExtraIcon />
        </button>
        <p className="services-card">Spa</p>

        <button onClick={() => setLaundryVisible(true)} className="card_btn">
          <LocalLaundryServiceIcon />
        </button>
        <p className="services-card">Laundry</p>
      </div>

      {cateringVisible && (
        <div
          class="card"
          style={{ width: "18rem", float: "left", margin: "0px 10px" }}
        >
          <img
            class="card-img-top"
            src="https://kasikannucateringworld.in/image/industrial-catering-services-in-chennai.jpg"
            alt="Card cap"
          />

          <div class="card-body">
            <h5 class="card-title">Catering services</h5>
            <p class="card-text">
              Catering is the business of providing food service at a remote
              site or a site such as a hotel, hospital, pub, aircraft, cruise
              ship.
            </p>
            <a href="#action" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}

      {travelVisible === true && (
        <div class="card" style={{ width: "18rem", float: "left" }}>
          <img
            class="card-img-top"
            src="https://usaguidedtours.com/wp-content/uploads/2019/12/USAGT-D2D-Creative-6433.jpg"
            alt="Card cap"
          />
          <div class="card-body">
            <h5 class="card-title">Guided tours</h5>
            <p class="card-text">
              Browse through our list of best-guided tours of India. Get a
              chance to explore the rich history, culture, spectacular
              monuments.
            </p>
            <a href="#action" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}

      {massageVisible === true && (
        <div class="card" style={{ width: "18rem", float: "left" }}>
          <img
            class="card-img-top"
            src="https://www.riverdayspa.com/wp-content/uploads/2022/08/Best-balinese-full-body-massage-spa-center-chennai.webp"
            alt="Card cap"
          />
          <div class="card-body">
            <h5 class="card-title">Massages</h5>
            <p class="card-text">
              You can always ask when booking the appointment if certain areas
              can be avoided or focused on, depending on how you feel.
            </p>
            <a href="#action" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}

      {laundryVisible === true && (
        <div class="card" style={{ width: "18rem", float: "left" }}>
          <img
            class="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qIzx9RhR9tkIPYth5ghuOVxtc8CjBMne1w&usqp=CAU"
            alt="Card cap"
          />
          <div class="card-body">
            <h5 class="card-title">Laundry and valet service</h5>
            <p class="card-text">
              Valet laundry service is a universal practice which is maintained
              by all chains or large hotels & resorts and responsible for
              handling.
            </p>
            <a href="#action" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Card;
