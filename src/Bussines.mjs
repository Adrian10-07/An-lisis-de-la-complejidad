class Bussines{
    name; 
    addres;
    city;
    state;
    postal_code;
    latitude;
    longitude;
    stars
    review_count;
    is_open;
    attributes;
    categories;
    hours;

    constructor(name, addres, city, state,postal_code,latitude,longitude,stars,review_count,is_open,attributes,categories,hours){
        this.name = name;
        this.addres = addres;
        this.city = city;
        this.state = state;
        this.postal_code = postal_code;
        this.latitude = latitude;
        this.longitude = longitude;
        this.stars = stars;
        this.review_count = review_count;
        this.is_open = is_open;
        this.attributes = attributes;
        this.categories = categories;
        this.hours = hours;
    }



}

export default  Bussines