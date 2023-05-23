console.log("welcome to sptify");
let songindex = 0;
let audioelement = new Audio('1song.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName("songitem"));


let songs = [
    { songname: "yaari", filepath: "1song.mp3", coverpath: "im1.webp" },
    { songname: "mera phla pyaar", filepath: "2song.mp3", coverpath: "images.jpg" },
    { songname: "raantan lambiya", filepath: "3song.mp3", coverpath: "room.png" },
    { songname: "malang sajna", filepath: "4song.mp3", coverpath: "room.png" },
    { songname: "mohobatt", filepath: "5song.mp3", coverpath: "im1.webp" },
    { songname: "phla nasha", filepath: "6song.mp3", coverpath: "images.jpg" },
    { songname: "black space", filepath: "7song.mp3", coverpath: "room.png" },

]

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

//handle play/pause
masterplay.addEventListener('click', function () {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events on seekbar
audioelement.addEventListener('timeupdate', function () {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    myprogressbar.value = progress;
})
//change in progress bar
myprogressbar.addEventListener('change', function () {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

const makeallplays = function () {
    Array.from(document.getElementsByClassName("songitemplay")).forEach(function (element) {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-element');
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach(function (element) {

    element.addEventListener('click', function (e) {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `${songindex + 1}song.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })

})


document.getElementById('next').addEventListener('click', function () {
    if (songindex >= 6) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `${songindex + 1}song.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})



document.getElementById('previous').addEventListener('click', function () {
    if (songindex <= 0) {
        songindex = 6;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `${songindex + 1}song.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});

document.addEventListener("keypress",function() {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})