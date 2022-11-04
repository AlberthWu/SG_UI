import axios from 'axios'

export class CountryService {

    getCountries() {
        return axios.get('assets/demo/data/countries.json')
            .then(res => res.data.data);
    }
    getCity() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data);
    }
    getDistrict() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data);
    }
    getState() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data);
    }
    getLoket() {
        return axios.get('assets/demo/data/loketsj.json')
    }
}