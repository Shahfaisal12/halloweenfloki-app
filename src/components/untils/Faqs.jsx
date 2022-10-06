import { Stack } from "@mui/material";
import React from "react";

// import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { AiFillCaretRight, AiOutlineTwitter } from "react-icons/ai";
import {BsFillCaretUpFill} from 'react-icons/bs'
import { FiSend } from "react-icons/fi";

const data = {
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'transferent',
    titleTextColor: "#FFFFFF",
    rowTitleColor: "#FFFFFF",
    rowContentColor: '#FFFFFF',
    arrowColor: "#FFFFFF",
};
// AiFillCaretRight
const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
    animate: true,
    arrowIcon: "V",
    openOnload: 1,
    expandIcon: <AiFillCaretRight />,
    collapseIcon: <BsFillCaretUpFill />,
};

const Faqs = () => {
  return (
    <div className="faq-section py-5">
      <div className="container">
        <div className="row">
            <div className="faq-text">
              <p className="fw-bold text-white">
                <span className="dashed"></span> FAQS
              </p>
              <h1 className="my-3 text-white">Frequently Asked Questions</h1>
            </div>
          <div className="col-md-7">
            <div className="faqs mt-5">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
          </div>
          <div className="col-md-5">
            <div className="faq-img">
              <img
                className="img-fluid"
                src="https://halloweenfloki.co/wp-content/uploads/2022/04/question.png"
                alt=""
              />
            </div>
          </div>
                  <div className="social-icon mt-5 d-flex justify-content-center">
                  <Stack direction="row" spacing={2} >
                    <a href="/" className=" d-flex p-2 rounded" style={{backgroundColor:'#1da1f2'}}><AiOutlineTwitter className="fs-2" style={{color:'#FFFFFF'}}/></a> 
                    <a href="/" className=" d-flex p-2 rounded" style={{backgroundColor:'#f27022'}}><FiSend className="fs-2" style={{color:'#FFFFFF'}}/></a> 
                  </Stack>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
