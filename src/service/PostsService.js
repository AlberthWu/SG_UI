import axios from 'axios';

export class PostsService {
    getLoket() {
        return axios.get('assets/demo/data/loketsj.json').then(res => res.data.data);
    }

}



// import axios from 'axios';

// export class LoketService {

//     getProductsSmall() {
//         return axios.get('assets/demo/data/products-small.json').then(res => res.data.data);
//     }

//     getLokets() {
//         return axios.get('assets/demo/data/loketsj.json').then(res => res.data.data);
//     }

//     getProductsWithOrdersSmall() {
//         return axios.get('assets/demo/data/products-orders-small.json').then(res => res.data.data);
//     }
// }
