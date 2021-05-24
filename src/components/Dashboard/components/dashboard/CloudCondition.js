
import {
  Box,
  // Button,
  Card,
  CardHeader,
  Divider,

  List,
  ListItem,

  ListItemIcon,
  // ListItemAvatar,
  ListItemText,
} from "@material-ui/core";




const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader title="Could Condition" />
    <Divider />
    <List>
      {props.data.list.map((key) => (
       
          key.dt_txt.substring(11) === "12:00:00" ? (
            <>
            <ListItem key={key}>
              <ListItemIcon>
                <img
                  src={`https://openweathermap.org/img/wn/${key.weather[0].icon}@2x.png`}
                  alt={key.weather[0].description}
                  style={{
                    height: 48,
                    width: 48,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={key.weather[0].description + "("+ key.dt_txt.substring(0,10) + ")"} />
              </ListItem>
            </>
          ) : (
            console.log()
          )
       
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    ></Box>
  </Card>
);

export default LatestProducts;
