import React from 'react';
import profile from '../images/profile.jpg'
import moment from 'moment';

const About: React.FC = () => {

  const getMonthsExperience = () => {
    const start = moment("2019-07-07");
    const now = moment();

    return now.diff(start, "months");
  }

  return (
    <div className="text-left">
      <img src={profile} className="rounded mx-auto my-5 d-block" id="profile-pic" alt="Profile"/>
      <p>Hi, my name's Garrett and I'm a Software Engineer with {getMonthsExperience() % 12 < 6 ? Math.floor(getMonthsExperience() / 12) : Math.floor(getMonthsExperience() / 12) + 1} years of experience from Portland, Oregon.
         I'm super passionate about backend development, solving problems, and working with talented, cool people. 
         I'm always looking to challenge myself and learn new things! 
         If you'd like to work with me, feel free to reach out via <a href="mailto:bauer.garrett9@gmail.com">email</a> or 
         <a href="https://www.linkedin.com/in/gbauer9/"> LinkedIn</a>.</p>
  </div>
  );
};

export default About;