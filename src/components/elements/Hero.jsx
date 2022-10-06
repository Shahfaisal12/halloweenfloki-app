import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

const Hero = () => {
  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="editable-text mt-5">
              <h1 className="fw-bold display-3 text-white" style={{fontFamily:'Nosifer'}}>Halloween Floki</h1>
            </div>
          </div>
          <div className="col-md-6">
            <Box className="container">
              <Card
                sx={{
                  maxWidth: 475,
                  backgroundColor: "#745F985E",
                  borderRadius: "12px",
                  pt: 5,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    align="center"
                    color="white"
                    fontWeight={"bold"}
                    component="div"
                  >
                    $FLOH Live Now!
                  </Typography>
                  <CardActions sx={{ justifyContent: "center", my: 1 }}>
                    <Button className="buy-btn">Buy</Button>
                  </CardActions>
                  <Stack direction="row" spacing={2} className='justify-content-center'>
                    <a href="/" className=" d-flex p-2 rounded" style={{backgroundColor:'#1da1f2'}}><AiOutlineTwitter className="fs-2" style={{color:'#FFFFFF'}}/></a> 
                    <a href="/" className=" d-flex p-2 rounded" style={{backgroundColor:'#745F98'}}><FiSend className="fs-2" style={{color:'#FFFFFF'}}/></a> 
                  </Stack>
                  <Typography sx={{ mb: 1.5 }} color="white">
                    Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
