let fullName = document.getElementById('name');
let numberCoffe = document.getElementById('number-coffe');
let favCoffe = document.getElementById('fav-coffe');
let upload = document.getElementById('upload-photo');
let enterBtn = document.getElementById('btn-enter');
let fullNameData = document.getElementById('full-name-data');
let numberCoffeData = document.getElementById('number-coffe-data');
let favCoffeData = document.getElementById('fav-coffe-data');
let image = document.getElementById('image');
let card = document.getElementById('card');
let choseDisplay = document.getElementById('chose-display');
let quiz = document.getElementById('quiz');
let choseBtn = document.getElementById('btn-chose');




upload.onchange = function() {
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function() {
        image.src = file.result;

        let userData = {
            fullname: fullName.value,
            number: numberCoffe.value,
            fav: favCoffe.value,
            upload: file.result
        };
        localStorage.setItem('data', JSON.stringify(userData));
    };
};

function setData(){
    if(fullName.value !== '' && numberCoffe.value !== '' && favCoffe.value !== '' && upload.files.length > 0){
        choseDisplay.style.display = 'flex';
        quiz.style.display = 'none';
    } else {
        alert('please complete the information')
    }
}

function getData(){
    let user = JSON.parse(localStorage.getItem('data'));
    if(user){
        fullNameData.innerHTML = user.fullname;
        numberCoffeData.innerHTML = user.number;
        favCoffeData.innerHTML = user.fav;
        image.src = user.upload;
        choseDisplay.style.display = 'none';
        card.style.display = 'flex';
    } else {
        alert('no data');
    }
}

enterBtn.onclick = function(){
    setData();
};

choseBtn.onclick = function(){
    getData();
};
