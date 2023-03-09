import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChartExample = (props) => {
  const chartRef = useRef();
  const chartObj = useRef();

  const createBarChart = (el) => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    chartObj.current = new Chart(el, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  };

  useEffect(() => {
    const el = chartRef.current;
    //const el = document.getElementById("chart");
    if (chartObj.current) chartObj.current.destroy();
    createBarChart(el);

    return () => chartObj.current.destroy();
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChartExample;
