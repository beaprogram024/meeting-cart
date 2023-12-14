import React from 'react';
import './modal.css';

const Create_meeting_modal = () => {

    const A = () => {
        var mpopup = document.getElementById('mpopupBox');
        mpopup.style.display = "block";
    }

    const Close_modal = () => {
        var mpopup = document.getElementById('mpopupBox');
        mpopup.style.display = "none";
    }

    const show_calender = () => {
        var date = document.getElementById('calender');
        date.type = "date";
        date.type.style.fontWeight = '500';
    }

    const Recurrence_modal = () => {
        var recurrence_box = document.getElementById('recurrence_box');
        recurrence_box.style.display = "block";
    }

    return (
        <>

            <div className='meeting_card_sidebar_2'>
                <p>My Meetings</p>
                <button type="button" className="meeting_btn" onClick={A}><span><i className='fa fa-plus'></i></span>Create Meeting</button>
            </div>

            <div id="mpopupBox" class="mpopup">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close" onClick={Close_modal}>×</span>
                        <p>CREATE MEETING <br /><span> Would you like to Create Meeting </span><span>Sourabh</span><span>?</span> </p>
                    </div>
                    <div class="modal-body">
                        <div className='form-group'>
                            <div className='Meeting_name'>
                                <input type="text" placeholder='Meeting Name' name='Meeting_name' required />
                            </div>
                            <div className='Meeting_details'>
                                <input type="text" name='Meeting_date' onClick={show_calender} id="calender" placeholder="Meeting Date" required />

                                <select name='Meeting_duration' className='a1'>
                                    <option value="0 Hour">0 Hour</option>
                                    <option value="1 Hour">1 Hour</option>
                                    <option value="2 Hour">2 Hour</option>
                                    <option value="3 Hour">3 Hour</option>
                                    <option value="4 Hour">3 Hour</option>
                                    <option value="5 Hour">5 Hour</option>
                                    <option value="6 Hour">6 Hour</option>
                                    <option value="7 Hour">7 Hour</option>
                                    <option value="8 Hour">8 Hour</option>
                                    <option value="9 Hour">9 Hour</option>
                                    <option value="10 Hour">10 Hour</option>
                                    <option value="11 Hour">11 Hour</option>
                                    <option value="12 Hour">12 Hour</option>
                                </select>
                                <select name='Meeting_duration' className='a2'>
                                    <option value="5 Min">5 Min</option>
                                    <option value="10 Min">10 Min</option>
                                    <option value="15 Min">15 Min</option>
                                    <option value="20 Min">20 Min</option>
                                    <option value="25 Min">25 Min</option>
                                    <option value="30 Min">30 Min</option>
                                </select>

                                <select name='Meeting_timezone'>
                                    <input type="search" placeholder='' />
                                    <option value='Asia/Kolkata'>Asia/Kolkata</option>
                                    <option value='Asia/Kolkata'>Asia/Kolkata</option>
                                    <option value='Asia/Kolkata'>Asia/Kolkata</option>
                                    <option value='Asia/Kolkata'>Asia/Kolkata</option>
                                    <option value='Asia/Kolkata'>Asia/Kolkata</option>
                                    <option value='Asia/Kolkata'>Asia/Kolkata</option>
                                </select>
                                <select name='Meeting_timezone' onChange={Recurrence_modal}>
                                    <option value='Does Not Repeat'>Does Not Repeat</option>
                                    <option value='Daily'>Daily</option>
                                    <option value='Weekly'>Weekly</option>
                                    <option value='Monthly'>Monthly</option>
                                </select>
                            </div>

                            {/**********************************************************************/}
                            <div className='recurrence_popup' id="recurrence_box">
                                <div className='recurrence_box1'>
                                    <p>Recurrence on</p>
                                    <span className='recurrenece_text'><input type="radio" name="daily_recurrence" />Every <span><input type="number" /></span>Day (s) </span>
                                    <div className='week_day'>  <input type="radio" name="weekday_recurrence" />Every Weekday</div>
                                </div>
                                <div className='recurrence_box2'>
                                    <span><p>Ending <span className='ending_date_text'><input type="radio" />&nbsp; No End date</span> </p></span>

                                    <div className='ending_date'><input type="radio" />&nbsp; Ending  &nbsp;<span className='radio_end_meeting'><input placeholder='End Meeting Date' onClick={show_calender} name="ending_date" /></span>
                                    </div>
                                    <div className='ending_date'><input type="radio" />&nbsp; After  &nbsp;<span className='radio_after_meeting'><input type="number" value="12" name="after_meeting_date" />Meetings (s)</span>
                                    </div>
                                </div>
                            </div>

                            {/**********************************************************************/}




                            <div className='Meeting_emails'>
                                <input type="email" name="meeting_email" placeholder="Search Name (Business Directory) or Email Address)" />
                                <button type='button'><i className='fa fa-plus'></i>From Contacts</button>
                            </div>
                            <div className='meeting_card_tip'>
                                <p> <span><i className='fa fa-bulb'></i></span>Tips: You can type multiple name/email id's.</p>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button">Create</button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Create_meeting_modal;