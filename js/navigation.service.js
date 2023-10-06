
const navigation = {}  

navigation.init = () => { 

    const showFavBtn = document.querySelector('.nav_likes_btn');
    const favList = document.querySelector('.fav_list_container');

    showFavBtn.addEventListener('click', () => {
        showFavBtn.classList.toggle('active_likes_btn');
        favList.classList.toggle('show');
    })

    const showNotificationBtn = document.querySelector('.nav_notif_btn');
    const notificationList = document.querySelector('.notifications_container');

    showNotificationBtn.addEventListener('click', () => {
        showNotificationBtn.classList.toggle('active_btn');
        notificationList.classList.toggle('show');
    })

    const showMsgBtn = document.querySelector('.nav_msg_btn');
    const messagesList = document.querySelector('.messages_container');

    showMsgBtn.addEventListener('click', () => {
        showMsgBtn.classList.toggle('active_btn');
        messagesList.classList.toggle('show');
    })
 
}

export default navigation; 


