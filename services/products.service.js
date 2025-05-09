import axios from 'axios';

export async function getAllProducts () {
return await axios.get ('https://dummyjson.com/products');
}

export async function createNewProduct(data) {
    return await axios.post ('https://dummyjson.com/products/add', data)
}