import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["", "", "", ""],
    ["13 Oct 2023", 2000, 440, 740],
    ["17 Oct 2023", 1040, 440, 740],
    ["21 Oct 2023", 1040, 440, 740],

];

export const options = {
    titlePosition: "none",
    bar: { groupWidth: "50%" },
    legend: { position: "none" },
    colors: ['#003399', '#003399', '#003399'],
    vAxis: {
        gridlines: { count: 4 },
        format: 'decimal' // Use 'decimal' to display full numbers without abbreviations
    },
};

export default function App() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="250px"
            data={data}
            options={options}
        />
    );
}
