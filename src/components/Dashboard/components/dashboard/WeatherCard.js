import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  // LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';


import { WiCloudy } from "weather-icons-react";

const TasksProgress = (props) => (
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
            Weather
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {props.data.list[0].weather[0].description}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <WiCloudy color='#3f51b5' />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        {/* <LinearProgress
          value={75.5}
          variant="determinate"
        /> */}
      </Box>
    </CardContent>
  </Card>
);

export default TasksProgress;
