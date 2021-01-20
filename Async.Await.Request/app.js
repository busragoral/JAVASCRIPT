
class Request{
   async get(url){
        // return new Promise((resolve,reject)=> {
        //     fetch(url)
        //     .then(response=> response.json())
        //     .then(data=> resolve(data))
        //     .catch(err=>reject(err));
        // })
        const response =await fetch(url);
        const data = await response.json();
        return data;
    }
    async post(url,data){
    //     return new Promise((resolve,reject)=> {

        
    //     fetch(url,{
    //         method:'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //     .then(response=> response.json())
    //     .then(data=> resolve(data))
    //     .catch(err=>reject(err));
    // })

    const response = await fetch(url,{
            method:'POST',
           body: JSON.stringify(data),
               headers: {
               "Content-type": "application/json; charset=UTF-8"
             }
            });
            const responsedata = await response.json();
        return responsedata;
    }
    async put(url,data){
//         return new Promise((resolve,reject)=> {
//         fetch(url,{
//             method:'PUT',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(response=> response.json())
//         .then(data=>console.log(data))
//         .catch(err=>console.log(err));
//     })
const response = await fetch(url,{
    method:'PUT',
    body: JSON.stringify(data),
       headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
    });
    const responsedata = await response.json();
    return responsedata;

}
 async delete(url){
//     return new Promise((resolve,reject)=> {
//         fetch("https://jsonplaceholder.typicode.com/albums/1",{
//             method: 'DELETE'
//         }).then(response=>resolve("SİLME İŞLEMİ")).catch(err=> reject(err));
// });
const response = await fetch("https://jsonplaceholder.typicode.com/albums/1",{
                     method: 'DELETE'}); 
                    // const data = await response.json();
                    return "veri silme basarılı";
}

}
const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums =>{
// console.log(albums);
// })
// .catch(err=> console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(newAlbum=> console.log(newAlbum))
// .catch(err=>console.log(err));
request.delete("https://jsonplaceholder.typicode.com/albums/1",{userId:1,title:"TARKAN"})
.then(album=> console.log(album))
.catch(err=>console.log(err));
