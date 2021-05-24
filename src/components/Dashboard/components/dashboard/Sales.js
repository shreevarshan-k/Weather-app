import { Bar  } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  // useTheme,
  colors,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import firebaseDb from "../../../../firebase.js";
import React, { useEffect } from "react";

const Sales = (props) => {
  // const [chartdata,setchartdata]=useState({})
  const sale = {
    datasets: [{ backgroundColor: "#3f51b5", data: [100], label: "sale" }],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug"],
  };
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [18],
        label: "Counter1",
      },
      {
        backgroundColor: colors.grey[200],
        data: [11],
        label: "Co2",
      },
      {
        backgroundColor: colors.red[200],
        data: [10],
        label: "Co3",
      },
    ],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
  };
  useEffect(() => {
    var s=20;
    firebaseDb
      .database()
      .ref("Admin/SalesBills/2021-05-19/C01")
      .on("value", (snapshot) => {
        for (let i in snapshot.val()) {
          sale.datasets.push({
            backgroundColor: "#3f51b5",
            data: [snapshot.val()[i].Product.Total],
            label: "sale",
          });
       s=10
        }
      });
      data.datasets.push({backgroundColor:"pink",data:[s],label:"Counter 5"})

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
          barThickness: 10,
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
        action={
          <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
            Last 7 days
          </Button>
        }
        title="Latest Sales"
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
        {/* <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button> */}
      </Box>
    </Card>
  );
};

export default Sales;
