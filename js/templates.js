export const profileListTmpl = (person) => 
`
    <div class="profiles_tmpl_container">
        <div class="profiles_tmpl_image"><img src="${person.Image}"></div>
        <div class="profiles_tmpl_content">
            <h2 class="profiles_tmpl_name"> ${person.Name}</h2>
            <p class="profiles_tmpl_info">${person.Description}</p>
            <div class="link_container">
                <div class="profile_link"><a href="profile.html?id=${person.Id}">Se profil</a></div>
                <div class="favourite" data-person-id="${person.Id}"><i class="fa fa-heart link_btn" aria-hidden="true"></i></div>
            </div>
        </div>
    </div>
`;

export const favListTmpl = (person) => 
`
    <div class="fav_tmpl_container">
        <div class="fav_tmpl_image"><img src="${person.Image}"></div>
        <div class="fav_tmpl_content"> 
            <h2 class="profiles_tmpl_name"> ${person.Name}</h2>
            <p class="profiles_tmpl_info">${person.Favdescription}</p>
            <div class="favourite-delete " data-person-id="${person.Id}"><i class="fa fa-trash link_btn" aria-hidden="true"></i>
            </div>
        </div>
    </div>
`;

export const singleProfileTmpl = (person) => 
`
<div class="single_profile_container">
        <div class="profile_left">
            <div class="single_profile_tmpl_image_container">
                <img src="${person.Image}">
                <h2 class="single_profile_tmpl_name"> ${person.Name}</h2>
            </div>
        </div>
        <div class="profile_right">
            <div class="single_profile_tmpl_content">
                <p class="single_profile_tmpl_info">${person.Detailed}</p>
            </div>
            <div class="single_profile_more_images">
                <div class="img_container"><img src="${person.ImageTwo}"></div>
                <div class="img_container"><img src="${person.ImageThree}"></div>
                <div class="img_container"><img src="${person.ImageFour}"></div>
            </div>
            <div class="back_container"><a class="back" href="index.html">Gå tilbage</a></div>
            </div>
    </div>
`;