function myFunction() {
    if (navigator.onLine) {
        document.querySelector('span').innerHTML = "You are online now";
        document.querySelector('p').innerHTML = "Internet is connected";
        document.querySelector('.icon').classList.remove('offline');
        document.querySelector('.box').classList.remove('offline');
        document.querySelector('.icon i').className = 'uil uil-wifi'; // Resetting the icon class
    } else {
        document.querySelector('span').innerHTML = 'You are offline now';
        document.querySelector('p').innerHTML = "Internet is Disconnected";
        document.querySelector('.icon').classList.add('offline');
        document.querySelector('.box').classList.add('offline');
        document.querySelector('.icon i').className = 'uil uil-wifi-slash'; // Changing to offline icon
    }
}

setInterval(() => {
    myFunction();
}, 500); // Increased interval to 500ms for better performance
