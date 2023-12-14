import React from 'react';


const Meeting_card = () => {
    return (
        <>


            <div className='meeting_scheduled_card'>
                <p style={{ 'backgroundColor': '#f8f8f8' }}>Sourabh's Learning</p>
                <div className='meeting_scheduled_card_1'>
                    <span><img src='./photo.jpg' alt="users_image" /></span> <span className='users_name'>Sourabh Patole <span><strong>M</strong></span></span>
                    <span className='meeting_card_icons'>  <i className='fa fa-user'></i><i className='fa fa-edit'></i><i className='fa fa-trash'></i></span>

                    <div className='meeting_scheduled_card_2'>
                        <span><i className='fa fa-calendar'></i>Fri, 04 Nov 2022 02:05 AM. Duration: 0h 30 min <br />&nbsp;&nbsp; &nbsp;&nbsp;
                            Asia/Kolkata</span>
                        <span><p>Scheduled</p></span>
                        <span><i className='fa fa-users'></i>Participant's - 1 </span>
                    </div>

                    <div className='meeting_sharing'>
                        <p>Share Meeting Details: <br />
                            <span>Joining Link:</span> <span>https://www.achnet.com?su=hxeap5ta</span>  <span><i className='fa fa-copy'></i>Copy Link</span> <br />
                            <span>I-Pin: <span>ow5aw8n3</span></span></p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Meeting_card;
