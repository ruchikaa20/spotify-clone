console.log("Welcome to spotify");

// intialize the variables
let songindex = 0;
let audioElement = new Audio('songs/music1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Baby calm-down", filePath: "songs/music1.mp3", coverPath:'covers/1.jpg'},
    {songName: "darmiyaan", filePath: "songs/music2.mp3", coverPath: 'covers/cover.jpg'},
    {songName: "Until I found You", filePath: "songs/music3.mp3", coverPath: 'covers/3.jfif'},
    {songName: "Kbhi tumhe yaad meri aaye", filePath: "songs/music4.mp3", coverPath: 'covers/6.jfif'},
    {songName: "Night-changes", filePath: "songs/music5.mpeg", coverPath: 'covers/c1.jpg'},
    {songName: "Perfect", filePath: "songs/music6.mpeg", coverPath: 'covers/2.jpg'},
    {songName: "Duniya", filePath: "songs/music7.mp3", coverPath: 'covers/5.jfif'},
    {songName: "Doraemon", filePath: "songs/music8.mp3", coverPath: 'covers/doraemoncover.jpg'},
    {songName: "Apna bana le", filePath: "songs/music9.mp3", coverPath: 'covers/7.jfif'},
    {songName: "jeena-jeena", filePath: "songs/Shinchan-Original-Song.mp3", coverPath: 'covers/shincover.jpg'}
]

songitem.forEach((Element, i)=>{ 
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${songindex}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex>=10){
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = 'songs/${songindex}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=10){
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = 'songs/${songindex}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})