import profileList from "./profilelist.service.js";
import profilePage from "./profilepage.service.js";
import filterFunction from "./filter.service.js";
import navigation from "./navigation.service.js";
import favourites from "./favourites.service.js";

const app = {}

app.init = async () => {

    navigation.init()
    profileList.init()
    profilePage.init()
    filterFunction.init()
    favourites.init()

}

app.init()