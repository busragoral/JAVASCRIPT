
const form=document.getElementById("film-form");
const titleElement= document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement= document.querySelector("#url");
const cardbody= document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");



eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);

}
function addFilm(e){
    const title=titleElement.value;
    const director= directorElement.value;
    const url = urlElement.value;
    if(title=== "" || director ==="" || url ===""){
            UI.displayMessages("Tüm alanları doldurun..", "danger");

    }

    else{
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Filmm eklendii", "success");
    }
    UI.clearInputs(titleElement,urlElement,directorElement);
     e.preventDefault();
}
function deleteFilm(e){

    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages( "silme basarılı", "success");
    }
}
function clearAllFilms(){

    if(confirm("emin misin?")){
       UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage(); 
    }
    
}