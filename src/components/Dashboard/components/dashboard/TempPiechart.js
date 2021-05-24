import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors,
  useTheme,
} from "@material-ui/core";
var temp = [];
var lable=[];
const TrafficByDevice = (props) => {
  const theme = useTheme();

 

  for (let i in props.data.list) {
    if (props.data.list[i].dt_txt.substring(11) === "00:00:00") {
 
      temp.push(Math.round(props.data.list[i].main.temp))
     lable.push(props.data.list[i].dt_txt.substring(0, 10));
    }
  }

 var data = {
    datasets: [
      {
        data: temp,
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.pink[500],
          colors.purple[500],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: lable,
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: true,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card {...props}>
      <CardHeader title="Temperature Pie-Chart" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
