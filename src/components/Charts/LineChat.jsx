import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "",
    "Energy",
    "Expected [KWh]",
    "PR [%]",
  ],
  ["January", 378, 808, 418],
  ["February", 309, 695, 924],
  ["March", 554, 600, 657],
  ["April", 907, 188, 805],
  ["May", 1109, 576, 1004],
  ["June", 808, 1100, 900],
  ["July", 706, 1000, 1100],
  ["August", 1023, 992, 1500],
];

export const options = {
    titlePosition: "none",
    bar: { groupWidth: "50%" },
    legend: { position: "right" },
    colors: ['#3266CC', '#DF3614', '#FB9A03'],
    vAxis: {
        gridlines: { count: 4 },
        format: 'decimal' // Use 'decimal' to display full numbers without abbreviations
    },
};

export default function App() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
}
