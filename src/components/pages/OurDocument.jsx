import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { ImCheckmark } from "react-icons/im";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { AiOutlineCaretDown } from "react-icons/ai";
import { Button, Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    items={[
      {
        label: "KYC",
        key: "1",
      },
      {
        label: "Audit",
        key: "2",
      },
      {
        label: "Whitepaper",
        key: "3",
      },
    ]}
  />
);

const OurDocument = () => {
  return (
    <div className="ourdocument-section py-5">
      <div className="container">
        <Card sx={{ minWidth: 275 }} className="card py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    className="fw-bold text-white"
                  >
                    <span className="dashed"></span> Whitepaper
                  </Typography>
                  <Typography variant="h4" className="fw-bold text-white">
                    Read Our Documents
                  </Typography>

                  <div class="d-flex flex-wrap justify-content-start text-white fw-bold my-5">
                    <Box className="d-flex align-items-center mt-2 mt-md-0">
                      <span className="bg-marks">
                        <ImCheckmark className="text-black" />
                      </span>
                      <span className="mx-4">KYC</span>
                    </Box>
                    <Box className="d-flex align-items-center mt-2 mt-md-0">
                      <span className="bg-marks">
                        <ImCheckmark className="text-black" />
                      </span>
                      <span className="mx-4">Audit</span>
                    </Box>
                    <Box className="d-flex align-items-center mt-2 mt-md-0">
                      <span className="bg-marks">
                        <ImCheckmark className="text-black" />
                      </span>
                      <span className="mx-4">Whitepaper</span>
                    </Box>
                  </div>

                  <Space wrap>
                    <Dropdown overlay={menu}>
                      <Button className="btn-download">
                        <Space>
                          Download
                          <AiOutlineCaretDown />
                        </Space>
                      </Button>
                    </Dropdown>
                  </Space>
                </CardContent>
              </div>
              <div className="col-md-4">
                <div className="ourdoc-img">
                  <img
                    className="img-fluid"
                    src="https://halloweenfloki.co/wp-content/uploads/2022/08/IMG_2571-982x1024.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OurDocument;
