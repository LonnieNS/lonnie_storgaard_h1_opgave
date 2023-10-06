import service from "./data.service.js"; 
import {favListTmpl} from "./templates.js"; 

const favourites = {}

 favourites.init = async () => {


    let favLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
        
    const renderFavouriteList = () => {
        const favouriteListContainer = document.querySelector('.fav_list_container');
    
        if (favouriteListContainer) {
            favouriteListContainer.innerHTML = '';
    
            if (favLocalStorage.length !== 0) {
                favLocalStorage.forEach((person) => {
                    favouriteListContainer.insertAdjacentHTML('beforeend', favListTmpl(person));
                });
    
                removeFromFavourites();
            } else {
                favouriteListContainer.insertAdjacentHTML('beforeend', 'Der er ingen favoritter tilføjet');
            }
        }
    }
    renderFavouriteList();

    const people = await service.getPeople(); 
    const addToFavourites = async (event) => {

        const personId = event.currentTarget.getAttribute('data-person-id'); 
        const personToAdd = people.find((person) => person.Id == personId); 
    
        if (!favLocalStorage.includes(personToAdd)) {
            favLocalStorage.push(personToAdd);
            localStorage.setItem('favs', JSON.stringify(favLocalStorage));
    
            renderFavouriteList();
        }
    }
    
    const favBtn = document.querySelectorAll('.favourite');
    favBtn.forEach(btn => {
        btn.addEventListener('click', addToFavourites);
    });
    
    function removeFromFavourites() {
        const removeBtn = document.querySelectorAll('.favourite-delete');
        removeBtn.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const personId = e.currentTarget.getAttribute('data-person-id');
                const index = favLocalStorage.findIndex((person) => person.Id == personId);
    
                if (index !== -1) {
                    favLocalStorage.splice(index, 1);
                    localStorage.setItem('favs', JSON.stringify(favLocalStorage));
                }
    
                renderFavouriteList();
            });
        });
    }
 
}

export default favourites;