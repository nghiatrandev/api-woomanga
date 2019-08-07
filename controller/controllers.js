const request = require('request');
const BASE_URL = 'http://api.acgmonster.com/comics';
const sign = '?sign=04d75e3819b4d539b5c928991371f446';
const searchSign = '&q%5Bname_cont%5D=';
const lastedUpdate = '&q[s]=updated_date desc'
    
    exports.getMangaList = function (page = 1, genre) {
        /*http://api.acgmonster.com/comics?sign=04d75e3819b4d539b5c928991371f446&q[s]=updated_date%20desc */
        /*http://api.acgmonster.com/comics?sign=04d75e3819b4d539b5c928991371f446&q%5Btags_name_eq%5D=Fantasy&page=2*/

        /* http://api.acgmonster.com/comics?sign=04d75e3819b4d539b5c928991371f446&q%5Btags_name_eq%5D=Adventure&page=2&q[s]=updated_date%20desc */

        var genreStr = '';
        if(genre) {
            console.log(genre)
            genreStr = '&q%5Btags_name_eq%5D='+genre;
        }
        var pageStr='&page='+page;
        var options = BASE_URL+sign+genreStr+pageStr+lastedUpdate;
        console.log(options)
        return new Promise((resolve, reject) => {
            request(options, (err,res,body) => {
                if (err) return reject (new Error('Error link'));
                resolve(body);
            })
        })
    }


    exports.getMangaById = function (id) {
        /* http://api.acgmonster.com/comics/45863?sign=04d75e3819b4d539b5c928991371f446 */
        let options = BASE_URL+id+sign;
        return new Promise((resolve, reject) => {
            request(options, (err,res,body) => {
                if (err) return reject (new Error('Error link'));
                resolve(body);
            })
        })
    }

    exports.getChapter = function (id, chapter) {
        console.log(id+'    '+chapter)
        let options = BASE_URL+'/'+id+'/'+chapter+sign;
        console.log(options)
        return new Promise((resolve, reject) => {
            request(options, (err,res,body) => {
                if (err) return reject (new Error('Error link'));
                resolve(body);
            })
        })
    }


    exports.searchManga = function (name) {
        // http://api.acgmonster.com/comics?sign=04d75e3819b4d539b5c928991371f446&q%5Bname_cont%5D=one%20piece

        nameBlogArr = name.split(' ');
        let options = BASE_URL+sign+searchSign;
        for (let i=0; i<nameBlogArr.length; i++) {
            if(i===0) {
                options += nameBlogArr[i];
            } else {
                options += '%20'+nameBlogArr[i];
            }
        }

        return new Promise((resolve, reject) => {
            request(options, (err,res,body) => {
                if (err) return reject (new Error('Error link'));
                resolve(body);
            })
        })


    }
    
