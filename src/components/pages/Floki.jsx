import { Stack } from '@mui/material'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const Floki = () => {
  return (
    <div className="floki-section py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="floki-text text-white">
                       <p className='fw-bold'><span className='dashed'></span> WHAT IS HALLOWEEN FLOKI</p>
                       <h1 className='fw-bold my-5'>From the Team That Brought You Valentine Floki</h1>
                       <p>Halloween Floki (FLOH) is a meme cryptocurrency token operating on the BEP-20 Blockchain technology (Binance Smart Chain). With the great experience, knowledge and wisdom of the core team, FLOH will attempt to peak at the highest market cap a Floki sub-project has ever reached, all while distributing BUSD rewards every day to its holders.</p>
                    <p className='mt-5'>We are taking advantage of the upcoming Holiday to gain the crypto community’s attention but as the weeks go by, this project will gain its reputation through continuous communication with its investors, aggressive marketing campaigns, listings and constant deliveries from the leadership team. Backed by cryptocurrency and stock market whales, we invite you on this journey to the double-digits millions market cap!</p>
                    
                  <div className="social-icon mt-5">
                  <Stack direction="row" spacing={2} >
                    <a href="/" className=" d-flex p-2 rounded" style={{backgroundColor:'#1da1f2'}}><AiOutlineTwitter className="fs-2" style={{color:'#FFFFFF'}}/></a> 
                    <a href="/" className=" d-flex p-2 rounded" style={{backgroundColor:'#745F98'}}><FiSend className="fs-2" style={{color:'#FFFFFF'}}/></a> 
                  </Stack>
                  </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="floki-im">
                        <img className='img-fluid' src="https://halloweenfloki.co/wp-content/uploads/2022/08/FLOH_Logo-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Floki