import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
import Budget from "../components/dashboard/Budget";
import Sidebar from "../../../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import LatestOrders from "../components/dashboard/LatestOrders";
import LatestProducts from "../components/dashboard/LatestProducts";
import Sales from "../components/dashboard/Sales";
import TasksProgress from "../components/dashboard/TasksProgress";
import TotalCustomers from "../components/dashboard/TotalCustomers";
import TotalProfit from "../components/dashboard/TotalProfit";
import TrafficByDevice from "../components/dashboard/TrafficByDevice";
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
                  <Budget city={this.state.data} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalCustomers data={this.state.data} />
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TasksProgress data={this.state.data}/>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <TotalProfit data={this.state.data} />
                </Grid>
                
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <LatestProducts sx={{ height: "100%" }} data={this.state.data} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <LatestOrders data={this.state.data} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <Sales data={this.state.data}/>
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <TrafficByDevice sx={{ height: "100%" }} data={this.state.data} />
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
