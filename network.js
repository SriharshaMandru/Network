function myFunction() {
    if (navigator.onLine) {
        document.querySelector('span').innerHTML = "You are online now";
        document.querySelector('p').innerHTML = "Internet is connected";
        document.querySelector('.icon').classList.remove('offline');
        document.querySelector('.box').classList.remove('offline');
        document.querySelector('.icon i').className = 'uil uil-wifi';
    } else {
        document.querySelector('span').innerHTML = 'You are offline now';
        document.querySelector('p').innerHTML = "Internet is Disconnected";
        document.querySelector('.icon').classList.add('offline');
        document.querySelector('.box').classList.add('offline');
        document.querySelector('.icon i').className = 'uil uil-wifi-slash'; 
    }
}

setInterval(() => {
    myFunction();
}, 500); 
