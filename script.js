console.log("welcome to spotify");


//Initilize the variables
let songINdex = 0;
let masterplay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: 'Jeene laga hoon', filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: 'Ek tha Ladka Ek thi Ladki', filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: 'p 03', filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: 'p 04', filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: 'p 05', filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: 'p 06', filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: 'p 07', filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: 'p 08', filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: 'p 09', filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: 'p 10', filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('timestamp')[0].innerText = `${audioElementt.duration}`;

})
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();

// hansle play pause lick
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause()
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;

    }
})

//listen yo events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seek bar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    console.log(audioElement.duration)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((elementt) => {
        elementt.classList.remove('fa-pause-circle');

        elementt.classList.add('fa-play-circle');

    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlay();
        songINdex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songINdex + 1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songINdex >= 9) {
        songINdex = 0;
    }
    else {
        songINdex += 1;
    }
    audioElement.src = `songs/${songINdex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songINdex <= 0) {
        songINdex = 0;
    }
    else {
        songINdex -= 1;
    }
    audioElement.src = `songs/${songINdex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
