const form = document.querySelector('form');
statusTxt = document.querySelector('.button-area span');

form.onsubmit = (e) => {
    e.preventDefault(); // prevents the form from submitting
    statusTxt.style.display = 'block';

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true); //opening connection to the php file
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response);
        }

    }
    xhr.send(); //sending the data to the php file
}