const products = [
    {name : 'cucumber', type:'vegetable'}, // product
    {name : 'banana', type : 'fruit'},
    {name : 'carrot', type : 'vegetable'},
    {name : 'apple', type : 'fruit'}
]

const fruitFilter = function(product){
    return product.type === 'fruit'
}

const fruits = products.filter(fruitFilter)
console.log(fruits)

// [ { name: 'banana', type: 'fruit' }, { name: 'apple', type: 'fruit' } ] 
