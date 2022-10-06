import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FaDollarSign } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { MdWaves } from "react-icons/md";
import {FaUserShield} from 'react-icons/fa'

const Tokenomic = () => {
  return (
    <div className="tokonomic-section py-5 text-white">
      <div className="container">
        <p className="fw-bold">
          <span className="dashed"></span> WHAT IS OUR TOKENOMICS
        </p>
        <p className="my-5">
          At Halloween Floki, we are designing a project based on definitive
          market rules and fundamental economic principles. Halloween Floki
          reconciles a high-performance protocol with integral price stability
          features.
        </p>
        <p>Total Sudopply: 1 000 000 000 000 FLOH</p>
        <p className="my-5">8% Buy and Sell Tax:</p>

        <ul>
          <li>
            4% holders rewards: Dividend tax on all transactions that will be
            distributed every 24 hours to holders in BUSD.
          </li>
          <li>
            1% liquidity: Liquidity tax on all transactions to prevent major
            price fluctuation after a large trade by filling the liquidity pool.
          </li>
          <li>
            3% marketing: Marketing tax on all transactions allows the Halloween
            Floki marketing team to reinvest and grow the project to its maximum
            potential.
          </li>
        </ul>

        <p className="fw-bold my-5">
          <span className="dashed"></span> WHAT ARE OUR FEATURES
        </p>

        <div className="row">
          <div className="col-md-3">
            <Card
              className="card"
              sx={{
                minWidth: 275,
                maxWidth: 475,
                padding: "33px",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <FaDollarSign className="display-1 text-white" />
                <Typography className="fw-bold fs-4 text-white my-3">
                  $BUSD Rewards
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                  Earn automatic Binance pegged USD ($BUSD), rewards by holding
                  your Halloween Floki Coin – 4% of every buy, transfer and sell
                  transaction is redistributed automatically to $FLOH holders.
                  You will receive the rewards automatically in your wallet or
                  claim your rewards manually in our upcoming reward app
                  tracker.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card
              className="card"
              sx={{
                minWidth: 275,
                maxWidth: 475,
                padding: "33px",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <HiSpeakerphone className="display-1 text-white" />
                <Typography className="fw-bold fs-4 text-white my-3">
                  Marketing
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                  3% of every transaction will directly go to the marketing
                  wallet in order to ensure an increase in exposure throughout
                  advertisement platforms, social media and to secure contracts
                  and deals with influencers. This will help FLOH achieve an
                  international status and to be known within every community!
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card
              className="card"
              sx={{
                minWidth: 275,
                maxWidth: 475,
                padding: "33px",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <MdWaves className="display-1 text-white" />
                <Typography className="fw-bold fs-4 text-white my-3">
                  Liquidity Pool
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                  Our Smart contract deposits 1% from every transaction as $FLOH
                  and $BNB into a liquidity pool which has been locked and
                  certified. Pancakeswap fixes the low liquidity problems of
                  DEXs through their Liquidity Pools, ensuring traders can
                  always Buy & Sell without liquidity issues. A bigger liquidity
                  pool will provide more stability to the $FLOH price.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card
              className="card"
              sx={{
                minWidth: 275,
                maxWidth: 475,
                padding: "33px",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <FaUserShield className="display-1 text-white" />
                <Typography className="fw-bold fs-4 text-white my-3">
                Anti-Whale Mechanism
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                  Our Anti-Whale mechanism ensures that no single transaction
                  order can amount to more than 1% of the total supply of $FLOH.
                  The Anti-Whale Mechanism won’t necessarily stop whales from
                  selling, but having a maximum limit helps to prevent large
                  selloffs and price manipulation.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
