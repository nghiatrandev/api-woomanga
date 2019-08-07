
const request = require('request');
const Category = require('../db/category-model');


function getDataFromLink(link) {
    return new Promise((resolve, reject) => {
        request(link, (err, res, body) => {
            if(err) return reject (new Error('API has problem'));
            resolve(body)
        })
    })
}

function getCategories() {  
    getDataFromLink('http://api.acgmonster.com/comics/web_categories?sign=04d75e3819b4d539b5c928991371f446') 
    .then((data) => {
        // console.log(data)
        for (let categoriItem of JSON.parse(data)) {
            console.log(categoriItem.name+'   '+categoriItem.query)
            const category = new Category({ name: categoriItem.name, query: categoriItem.query });
            category.save();
            
        }
    })
    .catch((err) => {
        return new Error(err)
    });
    // return new Promise((resolve, reject) => {
    //     request(categoryUrl, (err,res,body) => {
    //         if (err) return reject (new Error('Error link'));
    //         resolve (body =>{
    //             for (let categoriItem of body) {
    //                 console.log(categoriItem.name+'   '+categoriItem.query)
    //                 // const category = new Category({ name: categoriItem.name, query: categoriItem.query });
    //                 // category.save();

    //             }
    //         })
    //     })
    // })
}



getCategories();