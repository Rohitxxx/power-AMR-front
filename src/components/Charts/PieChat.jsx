import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["", ""],
  ["INV-1", 98.1],
  ["INV-2", 101.37],
  ["INV-3", 98.1],
  ["INV-4", 102.46],
  ["INV-5", 100.28], // CSS-style declaration
];

export const options = {
  title: "Capacity [kWp]",
  pieHole: 0.4,
  is3D: false,
  colors: ['#3266CC', '#DF3614', '#FB9A03', "#109619", '#990096'],
  vAxis: {
    gridlines: { count: 4 },
    format: 'decimal' // Use 'decimal' to display full numbers without abbreviations
  },
};

export default function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
