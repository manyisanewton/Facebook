import React from "react";
import "./Profile.css";

// Importing images for the profile
import MountKenyaCover from "../assets/Mount_Kenya.jpg";
import MyProfileImage from "../assets/myprofile.png";
import AliceProfile from "../assets/Alice.jpg";
import BobProfile from "../assets/Bobprofile.jpg";

// Importing images for the previous posts
import Adive from "../assets/adive.jpg";
import AlicePost from "../assets/Alice.jpg";
import Manu from "../assets/manu.jpg";
import Ram from "../assets/ram.jpg";
import BobPost from "../assets/Bobprofile.jpg";
import MyPost from "../assets/mypost.jpg";

function Profile() {
  return (
    <div className="profileContainer">
      <div className="profileTop">
        <div className="profileCover">
          {/* Cover photo */}
          <img
            src={MountKenyaCover}
            alt="Cover"
            className="profileCoverImg"
          />
          {/* Avatar photo */}
          <img
            src={MyProfileImage}
            alt="Avatar"
            className="profileUserImg"
          />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Newton Manyisa </h4>
          <span className="profileInfoDesc">Loving life and coding!</span>
        </div>
      </div>

      <div className="profileBottom">
        <div className="profileBottomLeft">
          <h5 className="profileSectionTitle">About</h5>
          <p className="profileAboutText">
            Hi! I'm Newton Manyisa, a passionate developer who loves creating social
            media apps and sharing knowledge.
          </p>
        </div>
        <div className="profileBottomRight">
          <h5 className="profileSectionTitle">Friends</h5>
          <div className="profileFriends">
            <div className="profileFriend">
              {/* Alice's profile picture */}
              <img
                src={AliceProfile}
                alt="Friend"
                className="profileFriendImg"
              />
              <span className="profileFriendName">Alice</span>
            </div>
            <div className="profileFriend">
              {/* Bob's profile picture */}
              <img
                src={BobProfile}
                alt="Friend"
                className="profileFriendImg"
              />
              <span className="profileFriendName">Bob</span>
            </div>
            {/* Add more friends as needed */}
          </div>
        </div>
      </div>

      {/* Previous Posts Section */}
      <div className="profilePosts">
        <h5 className="profileSectionTitle">Newtons's Previous Posts</h5>
        <div className="postGrid">
          <img src={Adive} alt="Post 1" className="postImage" />
          <img src={AlicePost} alt="Post 2" className="postImage" />
          <img src={Manu} alt="Post 3" className="postImage" />
          <img src={Ram} alt="Post 4" className="postImage" />
          <img src={BobPost} alt="Post 5" className="postImage" />
          <img src={MyPost} alt="Post 6" className="postImage" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
