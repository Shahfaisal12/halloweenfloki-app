import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GoPrimitiveDot } from "react-icons/go";

const OurPlane = () => {
  return (
    <div className="ourplane-section py-5">
      <div className="container">
        <div className="row">
          <div className="ourplane-heading text-center text-white pb-5">
            <p className="fw-bold">ROADMAP</p>
            <h1 className="fw-bold fs-1">Our Plan</h1>
          </div>
          <div className="vertical-line-">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{}}
                contentArrowStyle={{
                  borderRight: "7px solid  #000000",
                }}
                iconStyle={{ background: "#EA8244", color: "#FFFFFF" }}
                icon={<GoPrimitiveDot />}
              >
                <h3 className="vertical-timeline-element-title">Phase 1</h3>
                <ul className="my-3">
                  <li>Team Expansion</li>
                  <li>Social Media and Community Integration</li>
                  <li>Contract Creation</li>
                  <li>Website Deployment</li>
                  <li>Audit & KYC</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  #000000",
                }}
                iconStyle={{ background: "#EA8244", color: "#FFFFFF" }}
                icon={<GoPrimitiveDot />}
              >
                <h3 className="vertical-timeline-element-title">Phase 2</h3>
                <ul className="my-3">
                  <li>Presale Whitelist Competition</li>
                  <li>Presale Marketing Campaign</li>
                  <li>Presale Launch on Pinksale</li>
                  <li>Airdrop Partnership</li>
                  <li>Foreign Communities Integration and Creation</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  #000000",
                }}
                iconStyle={{ background: "#EA8244", color: "#FFFFFF" }}
                icon={<GoPrimitiveDot />}
              >
                <h3 className="vertical-timeline-element-title">Phase 3</h3>
                <ul className="mt-3">
                  <li>Pre-Launch Marketing Campaign</li>
                  <li>Launch on PancakeSwap</li>
                  <li>Airdrop for Migrating Holders</li>
                  <li>Reward Tracker Partnership</li>
                  <li>Farm & Staking Pools</li>
                  <li>CMC/CG Listings</li>
                  <li className="fw-bold">5 Million Market Cap</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  #000000",
                }}
                iconStyle={{ background: "#EA8244", color: "#FFFFFF" }}
                icon={<GoPrimitiveDot />}
              >
                <h3 className="vertical-timeline-element-title">Phase 4</h3>
                <ul className="mt-3">
                  <li>FLOH Holders Lottery</li>
                  <li>Costume ContestWorldwide Halloween Dog</li>
                  <li>CEX Listing</li>
                  <li>ETH Bridging</li>
                  <li>NFT Collection Website Integration</li>
                  <li>NFT Collection Marketing Campaign</li>
                  <li className="fw-bold">15 Million Market Cap</li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{
                  borderRight: "7px solid  #000000",
                }}
                iconStyle={{ background: "#EA8244", color: "#FFFFFF" }}
                icon={<GoPrimitiveDot />}
              >
                <h3 className="vertical-timeline-element-title">Phase 5</h3>
                <ul className="mt-3">
                  <li>Influencers Campaign</li>
                  <li>NFT Collection Whitelist Contest</li>
                  <li>NFT Collection Launch</li>
                  <li>Second CEX Listing</li>
                  <li>Record for a Holiday Floki Project: 30 Million</li>
                  <span className="fw-bold">Market Cap</span>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlane;
