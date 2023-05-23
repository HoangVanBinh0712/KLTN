import React from "react";
import "../css/service-page.css";
import TopBar from "../../components/global/TopBar";
import Footer from "../../components/global/Footer";

import serviceBaner from "../../assets/img/service-banner.png";
import homeService1 from "../../assets/img/home-services-1.png";
import homeService2 from "../../assets/img/home-service-2.png";
import vShapeIcon from "../../assets/icons/v-blue-shape.png";
import checkBoxIcon from "../../assets/icons/check-box-icon.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../contexts/Constants";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [showMadal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${apiUrl}/service`);
        if (res.data.success) setServices(res.data.data);
      } catch (e) {}
    }
    getData();
  }, []);

  return (
    <>
      <TopBar />


      <div style={{ width: "100%" }}>
        <img id="service-banner" src={serviceBaner} alt="" style={{ width: "100%", height: "auto" }} />
      </div>
      <div class="body-container" style={{ height: "auto" }}>
        <div id="arrow_wrapper">
          <img id="arrow_below_banner" src={vShapeIcon} alt="" />
          <div id="our_service_title">OUR SERVICES</div>
          <div id="our_service_explaination">
            We offer a variety of services that help recruiters connect with more talent, so they can connect with candidates faster
          </div>
        </div>

        <div id="service_list">

        {showMadal && (
        <div style={{ backgroundColor: "gray", position: "absolute", left: "10%", padding: "2em" ,width: "80%"}}>
          <div style={{ width: "100%", margin: "auto" }}>
            <div className="component-title">
              <span>Buy/Extend your service</span>
            </div>
            <div className="free-space" id="free-space">
              <div className="content-wrapper">
                <div>{selectedService.name}</div>
                <div className="input-wrapper ">
                  <div className="label">Number of months: </div>
                  <input className="coler-placeholder" type="text" name="amount"></input>
                </div>

                <div className="group-buttons">
                  <div
                    class="button cancel"
                    onClick={() => {
                      console.log("here");
                      setShowModal(false);
                    }}
                  >
                    <i class="fa fa-times" aria-hidden="true"></i>
                    Cancel
                  </div>
                  <div className="button">
                    <i className="fa fa-floppy-o" aria-hidden="true"></i>Confirm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
          {services.map((s, index) => (
            <>
              <div class="service_item_wrapper" key={index}>
                <div style={{ width: "50%", order: index % 2 === 0 ? "0" : "2" }}>
                  <img id="service_logo" src={homeService1} alt="" />
                </div>
                <div id="service_info" style={{ order: 1 }}>
                  <div id="service_name">{s.name}</div>
                  <div id="service_price">
                    {s.price} {s.currency}
                  </div>
                  <div id="service_duration_wrapper">
                    <div>Duration:</div>
                    <div id="service_duaration"> {s.postDuration} month</div>
                  </div>
                  <div id="service_value_list">
                    <div id="service_value_item">
                      <img id="service_checkbox" src={checkBoxIcon} alt="" />
                      <div id="service_value">100% Satisfaction Guaranteed.</div>
                    </div>
                    <div id="service_value_item">
                      <img id="service_checkbox" src={checkBoxIcon} alt="" />
                      <div id="service_value">Post jobs quickly and receive resumes immediately.</div>
                    </div>
                    <div id="service_value_item">
                      <img id="service_checkbox" src={checkBoxIcon} alt="" />
                      <div id="service_value">Manage your online profile easily.</div>
                    </div>
                    {s.canFilterCVSubmit && (
                      <div id="service_value_item">
                        <img id="service_checkbox" src={checkBoxIcon} alt="" />
                        <div id="service_value">Find candidates efficiently and quickly.</div>
                      </div>
                    )}
                    {s.canSearchCV && (
                      <div id="service_value_item">
                        <img id="service_checkbox" src={checkBoxIcon} alt="" />
                        <div id="service_value">Actively looking for candidates today</div>
                      </div>
                    )}
                  </div>
                  <div id="service_conclusion">{s.description}</div>
                  <div
                    className="button"
                    onClick={() => {
                      setShowModal(true);
                      setSelectedService(s);
                    }}
                    style={{ marginTop: "1em" }}
                  >
                    Buy now
                  </div>
                </div>
              </div>
            </>
          ))}


        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
