import fs from 'fs';
import LinkedList from '../Models/LinkedList/LinkedList';
import Business from '../Models/LinkedList/Business';

fs.readFile('businesses.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error leyendo el archivo JSON:', err);
        return;
    }
    const businesses = JSON.parse(data);
    const list = new LinkedList();

    businesses.forEach(b => {
        const business = new Business(b.name, b.address, b.city, b.state, b.postal_code, b.latitude, b.longitude, b.stars, b.review_count, b.attributes, b.categories, b.hours);
        list.push(business);
    });

    console.log('Número total de negocios:', list.size());
    console.log('Primer negocio:', list.getElementAt(0).business.name);
});

export {
    list
}
