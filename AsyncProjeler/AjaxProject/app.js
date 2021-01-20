document.getElementById("btn").addEventListener("click", function(){
const xhr= new XMLHttpRequest();
//xhr.onreadystatechange=function(){
//   
//}

xhr.onload=function(){
    if(this.status===200){
        document.getElementById("ajax").textContent=this.responseText;
    }
}


xhr.open("GET", "example.txt",true);
xhr.send();
});