import  { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import "./Notifications.css";

function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Bob commented on your photo." },
    { id: 2, message: "Alice posted a new photo." },
    { id: 3, message: "You have a new friend request suggestion." },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notificationContainer">
      <div className="notificationHeader">
        <NotificationsIcon className="notificationIcon" />
        <span className="notificationTitle">Notifications</span>
      </div>
      <ul className="notificationList">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification.id} className="notificationItem">
              <span className="notificationMessage">{notification.message}</span>
              <CloseIcon
                className="closeIcon"
                onClick={() => removeNotification(notification.id)}
              />
            </li>
          ))
        ) : (
          <p className="noNotifications">No new notifications.</p>
        )}
      </ul>
    </div>
  );
}

export default Notification;
