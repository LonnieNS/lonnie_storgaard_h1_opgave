const service = {};


service.getPeople = async () => {
    try {
            
        const response = await fetch('./data/profiles.json')
        const people = await response.json();
        return people;
    
    
    
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }

}

export default service;