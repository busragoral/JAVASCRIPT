function Translate(word,language){
    this.apikey="12ff652005mshfbbffbea357d9fep179ad5jsna7e1469c0024";
    this.word=word;
    this.language=language;

    this.xhr=new XMLHttpRequest();

}
Translate.prototype.translateWord = function() {
const endpoint = 'https://www.kiara-translate.p.rapidapi.com/?key=${this.apikey}&text=${this.word}lang=${this.language}'
this.xhr.open("GET", endpoint);
this.xhr.onload = () =>{
if(this.xhr.status===200){
    const json= JSON.parse(this.xhr.responseText);
    const text=json.text[0];
    callback(null,text);
}
else{
    callback("hata",null);
}
}
this.xhr.send();
}
Translate.prototype.changeParameters=function(newWord, newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}