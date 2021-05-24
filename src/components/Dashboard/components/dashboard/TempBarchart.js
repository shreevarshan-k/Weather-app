import { Bar } from "react-chartjs-2";
import {
  Box,
 Card,
  CardContent,
  CardHeader,
  Divider,
  // useTheme,
  colors,
} from "@material-ui/core";



import React from "react";
var temp=[]
const Sales = (props) => {
  // const [chartdata,setchartdata]=useState({})
  const data = {
    datasets: [],
    labels: [],
  };
  for (let i in props.data.list) {
    
    
    if (props.data.list[i].dt_txt.substring(11) === "00:00:00") {
      temp.push(Math.round(props.data.list[i].main.temp))
      data.labels.push(props.data.list[i].dt_txt.substring(0, 10));
      
    }
  }
  data.datasets.push({
    backgroundColor: colors.indigo[500],
    data: temp,
    lable: "temperature",
  });
 

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: true },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 5,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {},
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],

            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
    tooltips: {
      borderWidth: 1,
      enabled: true,

      intersect: false,
      mode: "index",
    },
  };

  return (
    <Card {...props}>
      <CardHeader
        title="Temparature of Next Five days"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
      </Box>
    </Card>
  );
};

export default Sales;
