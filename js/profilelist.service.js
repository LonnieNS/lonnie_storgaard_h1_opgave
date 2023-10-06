import service from "./data.service.js"; 
import { profileListTmpl } from "./templates.js"; 


const profileList = {}  

profileList.init = async () => { 

    const profileListContainer = document.querySelector('.profiles_outer_container');
    const people = await service.getPeople();
    
    
    if(profileListContainer) {
    
        people.forEach((person) => {
            profileListContainer.insertAdjacentHTML('beforeend', profileListTmpl(person));
        });
    }
}

export default profileList; 