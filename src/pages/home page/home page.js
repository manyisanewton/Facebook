import React from 'react'
import './home page.css'
import Notification from '../../Components/Notifications/Notifications';
import Profile from '../../Components/Profile/Profile';
import TopBar from '../../Components/TopBar/TopBar';
import Comments from '../../Components/Comments/CommentsList';
import Feed from '../../Components/Feeds/Feeds';





export default function homePage() {
  return (
    <div>
      <TopBar/>
      <div className="content">
      <Feed/>
      <Profile/>
      <div className="left">
        <Notification/>
        <Comments/>
        </div>
        </div>
    </div>
  )
}

