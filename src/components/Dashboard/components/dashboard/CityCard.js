import {
  Avatar,
  // Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { red } from '@material-ui/core/colors';
import { LocationCity } from '@material-ui/icons';




const Budget = (props) => {

  
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
            City
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            { props.city.city.name?
          props.city.city.name +
         "("+ props.city.city.country+")" : console.log()}
           
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
            <LocationCity />
          </Avatar>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
  )
    };

export default Budget;
