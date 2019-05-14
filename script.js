const getSurahsBtn = document.querySelector("#getSurahs");
const playAudioBtn = document.querySelector("#playAudio");
const stopAudioBtn = document.querySelector("#stopAudio");
const searchedSurah = document.querySelector("#searchedSurah");
const quranType = document.querySelector("#quranType");
let surahsDiv = document.querySelector("#surahs");


const validArgPattern = new RegExp("(^[a-zA-Z\' _-]+$)");

getSurahsBtn.addEventListener("click", fetchSurahs);
playAudioBtn.addEventListener("click", playAudio);
stopAudioBtn.addEventListener("click", stopAudio);

window.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        fetchSurahs();
    }
});


function fetchSurahs(){
    //Clear any currently displayed surahs
    while(surahsDiv.hasChildNodes()){
        surahsDiv.removeChild(surahsDiv.lastChild);
    }
    
    
    //Validate the input value for security
    if(!validArgPattern.test(searchedSurah.value)){
        surahsDiv.append(document.createElement("p").innerText = "Invalid Search. You can enter letters, hyphens, underscores, spaces, and apostrophes.");
        return false;
    }


    fetch("http://devrj.xyz:8080/surah/"+quranType.value+"/name?fuzzy=" + searchedSurah.value)
        .then(function(response){
            return response.json();
        })
        .then( function(jsonResponse){

            console.log(jsonResponse);
            console.log(jsonResponse.indices[1]);


            if(quranType.value === 'ar'){
                document.querySelector("#surahName").innerHTML = jsonResponse["title"];
            }else{
                document.querySelector("#surahName").innerHTML = jsonResponse["title_eng"];
            }




            let newSurah = document.createElement("ul");
            let ayahObj = jsonResponse.ayahs;

            let count = 0;
            for( let x in ayahObj){
                let tempAyah = document.createElement("li");
                tempAyah.append(document.createTextNode(ayahObj[x]));
                tempAyah.append(document.createElement("br"));

                let tempAudio = document.createElement("audio");
                tempAudio.setAttribute("controls", "true");
                tempAudio.setAttribute("preload", "true");
                tempAudio.setAttribute("class", "audioQuran");

                let audioSource = document.createElement("source");
                audioSource.setAttribute("src", "http://devrj.xyz/iqra/quran_audio/"+ jsonResponse.indices[++count] +".mp3");
                audioSource.setAttribute("type", "audio/mpeg");

                tempAudio.append(audioSource);

                tempAyah.appendChild(tempAudio);

                newSurah.appendChild(tempAyah);
            }
            surahsDiv.appendChild(newSurah);
            playAudioBtn.removeAttribute("hidden");
            stopAudioBtn.removeAttribute("hidden");
        })

}

function playAudio(){
    let audioArray = document.getElementsByClassName("audioQuran");
    console.log(audioArray);
    audioArray[0].play();
    for(let i = 0; i < audioArray.length; i++){
        audioArray[i].addEventListener("ended", function(event){
            audioArray[i+1].play();

        })
    }
}

function stopAudio(){
    let audioArray = document.getElementsByClassName("audioQuran");
    for(let i = 0; i < audioArray.length; i++){
        audioArray[i].pause();
        audioArray[i].currentTime = 0;
    }
}
