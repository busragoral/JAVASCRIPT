// const { response } = require("express");

// async function test(data){
//     //return data;

// }
// test("Merhaba")

async function getCurrecy(url){
    const response=await fetch(url);
    const data = await response.json();
    return data;

}
getCurrecy("https:/api.exchangeratesapi.io/latest").then(ahmet=>console.log(ahmet));