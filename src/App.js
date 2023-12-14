import './App.css';
import React from 'react';
import Meeting_card from './Meeting_card';
import Create_meeting_modal from './Create_meeting_modal';

const App = () => {
  return (
    <>

      <section>
        <div className='meeting_dashboard'>
          <div className='meeting_section'>
            <div className='meeting_headline'>
              <figure>
                <img src='./photo.jpg' alt="meeting_user_image"></img>
                <span><p className='dashboard_title_name'>Sourabh, Welcome To Your <span> Meeting Dashboard</span></p></span>
              </figure>
              <p className='meeting_headline_msg'>What would you like to do today?</p>
            </div>

            <div className='meeting_card'>
              <div className='meeting_card_sidebar'>
                <button type='button' className='active'><span><i className='fa fa-user'></i></span>My Meetings</button>
                <button type='button'><span><i className='fa fa-user'></i></span>Meeting History</button>
              </div>

             <Create_meeting_modal />

            </div>

            <Meeting_card />
            

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
