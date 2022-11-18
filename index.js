const notifications = document.getElementById("notifications");
const notification = document.getElementsByClassName("notification");
const newNotificationAlert = document.getElementsByClassName(
  "newNotificationAlert"
);
const allReadButton = document.getElementById("allReadButton");
const notificationsNumber = document.getElementById("notificationsNumber");

const readNotification = () => {
  for (let i = 0; i < notification.length; i++) {
    notification[i].addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("newNotification")) {
        e.currentTarget.classList.remove("newNotification");
        e.currentTarget.classList.add("notificationReaded");
        newNotificationAlert[i].style.display = "none";
        notificationsNumber.innerHTML -= 1;
      }
    });
  }
};

allReadButton.addEventListener("click", () => {
  for (let i = 0; i < notification.length; i++) {
    const allReaded = notification[i];
    if (allReaded.classList.contains("newNotification")) {
      allReaded.classList.remove("newNotification");
      allReaded.classList.add("notificationReaded");
      allReaded.removeChild(newNotificationAlert[0]);
      notificationsNumber.innerHTML = 0;
    }
  }
});

document.addEventListener("DOMContentLoaded", readNotification);
