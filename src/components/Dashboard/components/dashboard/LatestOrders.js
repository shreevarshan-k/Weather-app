import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  // Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  
} from "@material-ui/core";
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Data of Next Five Days" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Tempature</TableCell>
              <TableCell>weather</TableCell>
              <TableCell>Wind speed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.list.map((key) => (
              <TableRow hover key={key}>
                {key.dt_txt.substring(11) === "00:00:00" ? (
                  <>
                    <TableCell>{key.dt_txt.substring(0,10)}</TableCell>
                    <TableCell>
                      <Chip
                        color="primary"
                        size="small"
                        label={Math.round(key.main.temp) + "°c"}
                      />
                    </TableCell>
                    <TableCell>
                      {/* {moment(order.createdAt).format('DD/MM/YYYY')} */}
                      {key.weather[0].description}
                    </TableCell>
                    <TableCell>
                      {key.wind.speed}
                    </TableCell>
                  </>
                ) : (
                  console.log()
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    ></Box>
  </Card>
);

export default LatestOrders;
