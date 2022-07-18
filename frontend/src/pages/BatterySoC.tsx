import {
  faArrowsLeftRight,
  faBattery,
  faBolt,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import { getBatteryInfo } from "../api/consumerHistory";
import { Location } from "../components/location/Location";
import "./BatterySoC.scss";

export const BatterySoC: React.FC = () => {
  const query = useQuery("batteryInfo", getBatteryInfo);
  return (
    <div className="container" style={{ padding: 20 }}>
      <div className="row">
        <div className="col">
          <img
            src="//images.squarespace-cdn.com/content/v1/609a6d7da4153630af93dbef/1621502815242-GHDDIQGD4O966SSVIKA1/Eida-logo-green-ny.png?format=1500w"
            alt="Eida Energy Logo"
            width={200}
          />
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faGear}
            size="2x"
            style={{ float: "right" }}
            color="green"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <Location />
        </div>
      </div>
      <br />
      <div style={{ padding: 5 }} className="border shadow-sm">
        <span className="text-success">Battery SoC</span>
      </div>
      <br />
      <p className="text-success">Type of battery: {query.data?.type}</p>
      <p className="text-success">
        Temperature battery: {query.data?.temperature}
      </p>
      <br />
      <p className="text-success text-center">
        Battery status: {query.data?.flow}{" "}
      </p>
      <br />
      <div className="row">
        <div className="col text-center justify-content-center align-self-center">
          <FontAwesomeIcon icon={faBolt} size="3x" />
        </div>
        <div className="col text-center justify-content-center align-self-center">
          <FontAwesomeIcon icon={faArrowsLeftRight} size="4x" />
        </div>
        <div className="col text-center justify-content-center align-self-center">
          <FontAwesomeIcon icon={faBattery} size="3x" />
        </div>
      </div>
      <br />
      <div className="row text-center justify-content-center align-self-center">
        <div className="flex-wrapper">
          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart green">
              <path
                className="circle-bg"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                stroke-dasharray={`${query.data?.prc}, 100`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {query.data?.prc}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
