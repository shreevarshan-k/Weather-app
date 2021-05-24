import {
  Avatar,
  // Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';
import firebaseDb from '../../../../firebase';
import { useEffect,useState } from 'react';





const Budget = (props) => {
  const [total,settotal]=useState("")
  
  
  useEffect(()=>{
    var totalAmt=0
    firebaseDb
    .database()
    .ref("Admin/Stock").orderByChild("gst").equalTo("GST")
    .on("value", (snapshot) => {
      if (snapshot.val() != null) {
        for(let i in snapshot.val()){
        totalAmt=totalAmt + snapshot.val()[i].Totalamt
       settotal(totalAmt)
        }
      }
    })
   
  
  },[total]);
  return(

  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Gst Stock
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
           {total}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
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
  )
    };

export default Budget;
