import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import { useEffect, useState } from "react";
import firebaseDb from "../../../../firebase";

const TotalCustomers = (props) => {
  const [total,settotal]=useState("")
  
  
  useEffect(()=>{
    var totalAmt=0
    firebaseDb
    .database()
    .ref("Admin/Stock").orderByChild("gst").equalTo("NON GST")
    .on("value", (snapshot) => {
      if (snapshot.val() != null) {
        for(let i in snapshot.val()){
        totalAmt=totalAmt + snapshot.val()[i].Totalamt
        settotal(totalAmt)
        }
      }
    })
   
  
  },[total]);
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Non-Gst Stock
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {total}
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
              <PeopleIcon />
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
