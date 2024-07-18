
class Bussines{
    name
    address
    city
    state
    postal_code
    latitude
    longitude
    stars
    review_count
    attributes
    categories
    hours

    constructor(name, address, city, state, postal_code, latitude, longitude, stars, review_count, attributes, categories, hours) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.postal_code = postal_code;
        this.latitude = latitude;
        this.longitude = longitude;
        this.stars = stars;
        this.review_count = review_count;
        this.attributes = attributes;
        this.categories = categories;
        this.hours = hours;
    }
}

export default Bussines