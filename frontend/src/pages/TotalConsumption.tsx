import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Line } from "react-chartjs-2";
import { Location } from "../components/location/Location";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useQuery } from "react-query";
import { getTodayConsumption } from "../api/consumerHistory";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TotalConsumption: React.FC = () => {
  const query = useQuery("totalConsumptionToday", getTodayConsumption);
  const data = {
    labels: query.data?.map((x) => x.time),
    datasets: [
      {
        label: "First dataset",
        data: query.data?.map((x) => x.consumption),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };
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
        <span className="text-success">Total Consumption Today</span>
      </div>
      <br />

      <Line data={data} style={{ maxWidth: "100vh" }} />
    </div>
  );
};
