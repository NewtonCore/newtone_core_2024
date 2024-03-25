import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { DUMMY_DATA } from "../../../constants/dummyData/dummyData";
import EmptyData from "../EmptyData/EmptyData";

function AppLineGraph({ graphData, name,noDataMsg="" }) {
  const data = {
    labels:
      graphData.length !== 0
        ? graphData.map((data) => data.name)
        : DUMMY_DATA.graphData.map((data) => data.name),
    datasets: [
      {
        label: "Number",
        data:
          graphData.length !== 0
            ? graphData.map((data) => data.uv)
            : DUMMY_DATA.graphData.map((data) => data.uv),
        borderColor: "#A6CEE3",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      legend: {
        position: "legend",
      },
      title: {
        display: true,
        text: name === undefined ? "Graph name" : name,
      },
    },
  };
  return (
    <div style={{ height: "100%" }}>
      {graphData.length === 0 ? (
        <EmptyData
          title="No graph to show"
          message={noDataMsg}
        />
      ) : (
        <Line options={options} data={data} />
      )}
    </div>
  );
}

export default AppLineGraph;
