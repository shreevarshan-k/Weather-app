import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
import CityCard from "../components/dashboard/CityCard";
import Sidebar from "../../../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import NextDaysData from "../components/dashboard/NextDaysData";
import CloudCondition from "../components/dashboard/CloudCondition";
import TempBarchart from "../components/dashboard/TempBarchart";
import WeatherCard from "../components/dashboard/WeatherCard";
import TemperatureCard from "../components/dashboard/TempatureCard";
import WindCard from "../components/dashboard/WindCard";
import TempPiechart from "../components/dashboard/TempPiechart";
import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import { fetchWeather } from "../../api";


const useStyles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    marginLeft: theme.spacing(25),
    "@media (max-width: 780px)": {
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(10),
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: "",
    };
  }

  search = async (e) => {
    const data = await fetchWeather(this.state.city);
    console.log(data);
    this.setState({ data });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Sidebar />
        <Helmet>
          <title>Weather </title>
        </Helmet>

        <div className={classes.content}>
          <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({ city: newValue })}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.search();
              }
            }}
          />
          {this.state.data?

          <Box
            style={{ marginTop: "10px" }}
            sx={{
              backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <CityCard city={this.state.data} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TemperatureCard data={this.state.data} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <WeatherCard data={this.state.data}/>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <WindCard data={this.state.data} />
                </Grid>
                
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <CloudCondition sx={{ height: "100%" }} data={this.state.data} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <NextDaysData data={this.state.data} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <TempBarchart data={this.state.data}/>
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <TempPiechart sx={{ height: "100%" }} data={this.state.data} />
                </Grid>
              </Grid>
            </Container>
          </Box>:
          console.log()}
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(Dashboard);
