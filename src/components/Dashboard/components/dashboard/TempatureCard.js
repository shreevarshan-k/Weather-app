import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";


import { WiCelsius } from "weather-icons-react";


const TotalCustomers = (props) => {
 
  
  
 
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Tempature
            </Typography>
            <Typography color="textPrimary" variant="h5">
              {/* {props.da} */}
              {Math.round(props.data.list[0].main.temp)}°c
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56,
              }}
            >
              <WiCelsius  color="#3f51b5" size={40}/>
            </Avatar>
          </Grid>
        </Grid>
        {/* <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box> */}
      </CardContent>
    </Card>
  );
};

export default TotalCustomers;
