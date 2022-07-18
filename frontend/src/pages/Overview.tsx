import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Location } from "../components/location/Location";
import { useQuery } from "react-query";
import { getOverview } from "../api/consumerHistory";
import { Link } from "react-router-dom";

export const Overview: React.FC = () => {
  const query = useQuery("overview", getOverview);

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
      <div className="row">
        <div className="col">
          <Link
            to={"/total-consumption-today"}
            style={{ textDecoration: "none" }}
          >
            <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
              <div className="card-body">
                <span className="text-success fw-bold">
                  Total Consumption today kwh
                </span>
                <h5 className="card-title" style={{ color: "black" }}>
                  {query.data?.totalConsumptionToday} kWh
                </h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
            <div className="card-body" style={{ whiteSpace: "break-spaces" }}>
              <span className="text-success fw-bold">
                Total Production today kwh
              </span>
              <h5 className="card-title">
                {query.data?.totalProductionToday} kWh
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
            <div className="card-body">
              <span className="text-success fw-bold">
                Total Production week kwh
              </span>
              <h5 className="card-title">
                {query.data?.totalProductionWeek} kWh
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
            <div className="card-body">
              <span className="text-success fw-bold">
                Total Production month kwh
              </span>
              <h5 className="card-title">
                {query.data?.totalProductionMonth} kWh
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
            <div className="card-body">
              <span className="text-success fw-bold">
                Total Production year kwh
              </span>
              <h5 className="card-title">
                {query.data?.totalProductionYear} kWh
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
            <div className="card-body">
              <span className="text-success fw-bold">
                Forecasted consuption kwh
              </span>
              <h5 className="card-title">
                {query.data?.forecastedConsumption} kWh
              </h5>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="row">
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
            <div className="card-body">
              <span className="text-success fw-bold">
                Forecasted production kwh
              </span>
              <h5 className="card-title">
                {query.data?.forecastedProduction} kWh
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <Link to={"/total-energy-sold"} style={{ textDecoration: "none" }}>
            <div className="card shadow-sm rounded-0" style={{ height: 150 }}>
              <div className="card-body">
                <span className="text-success fw-bold">
                  Total energy sold kwh/NOK
                </span>
                <h5 className="card-title" style={{ color: "black" }}>
                  {query.data?.totalEnergySold} kWh
                </h5>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <Link to={"/battery-soc"} style={{ textDecoration: "none" }}>
            <div className="card shadow-sm rounded-0" style={{ height: 115 }}>
              <div className="card-body">
                <span className="text-success fw-bold">Battery</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <div className="card shadow-sm rounded-0" style={{ height: 115 }}>
            <div className="card-body">
              <span className="text-success fw-bold">Sustainability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
