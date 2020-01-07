const name = 'Sharon';

const userAge = 24;

userObject = {
    name,
    age: userAge,
    location: 'Palo Alto',
}

console.log(userObject);

//object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}


const { label: productLabel, stock, price, rating = 5} = product;

const transaction = (type, { label, price, stock }) => {
    console.log(type, label, price);
}

transaction('order', product)
