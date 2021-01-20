class Request{
    constructor(){
        this.xhr= new XMLHttpRequest();
    }
    get(url,callback){
        this.xhr.open("GET",url);
        this.xhr.onload=() =>{
            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback(" GET herhangi bir hata oluştu");
            }
        };
        this.xhr.send();
    }
    post( url, data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload=()=> {
            if(this.xhr.status===201){
                callback(null,this.xhr.responseText);
            }
            else{
                callback( "POST Hata oluştu");
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put( url, data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload=()=> {
            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback( "Put Request Hata oluştu");
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload=() =>{
            if(this.xhr.status===200){
                callback(null,"VERİ SİLME İŞLEMİ TAMAMLANDI");
            }
            else{
                callback(" DELETE herhangi bir hata oluştu",null);
            }
        };
        this.xhr.send();
    }
}
const request= new Request();

//request.get("https://jsonplaceholder.typicode.com/albums/51", function(err,response){
 //   if(err===null){
//        console.log(response);
 //   }
//     else{
//         console.log(err);
//     }
// });
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2, title:"Thriller"}, function(err,album){
//     if(err===null){
//         console.log(album);
//     }
//     else{
//         console.log(err);
//     }
// })
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143, title:"BÜŞRAAA"}, function(err,album){
//     if(err===null){
//         console.log(album);
//     }
//     else{
//         console.log(err);
//     }
// })
request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err,response){
  if(err===null){
       console.log(response);
   }    else{
        console.log(err);
   }
});