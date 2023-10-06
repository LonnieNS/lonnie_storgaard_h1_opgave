import service from "./data.service.js"; 
import {singleProfileTmpl } from "./templates.js"; 
  

const profilePage = {}

profilePage.init = async () => {

    let search = location.search; 
    let profileId = new URLSearchParams(search).get('id'); 

    const people = await service.getPeople();
    const profileContainer = document.querySelector('.profile_container');
    const foundProfile = people.find((person) => person.Id == profileId); 

    if(profileContainer) {
        profileContainer.insertAdjacentHTML('beforeend', singleProfileTmpl(foundProfile));
    }
}

export default profilePage;