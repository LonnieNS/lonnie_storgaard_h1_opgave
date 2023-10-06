import service from "./data.service.js"; 
import { profileListTmpl } from "./templates.js"; 
import favourites from "./favourites.service.js";

const filterFunction = {}  

filterFunction.init = async () => { 

    const people = await service.getPeople();

    let btnFilter = document.querySelectorAll('.filter_btn');

    btnFilter.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterSelection(e);
            inactiveButton();
            btn.classList.add('red');
            favourites.init() // Kalder Favourites here, fordi man ellers ikke ville kunne "like" profiler efter filtrering, da de "oprettes" på ny hver gang.
        });
    });

    const inactiveButton = () => {
        btnFilter.forEach(btn => {
            btn.classList.remove('red');
        })
    }
    const renderResult = (result) => { 
        let outputFilteredProfiles = document.querySelector('.profiles_outer_container');

        outputFilteredProfiles.innerHTML = '';
        result.forEach((profile) => { 
            outputFilteredProfiles.insertAdjacentHTML('beforeend', profileListTmpl(profile));

        }) 
    }

    const filterSelection = (e) => {

        let chosenFilter = e.target.value; 
        let result = people.filter(profile => profile.Filter.includes(chosenFilter));
        renderResult(result);

    };

    


} 

export default filterFunction; 