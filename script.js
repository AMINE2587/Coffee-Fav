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


function setData(){
    if(fullName.value != '' && numberCoffe.value != '' && favCoffe.value != '' && upload.value != ''){
        fullNameData.value = fullName.value;
        numberCoffeData.value = numberCoffe.value;
        favCoffeData.value = favCoffe.value;
        quiz.style.display = 'none';
        card.style.display = 'block'
        let files = new FileReader();
        upload.file = files.readAsDataURL;
        image.files = files.result;
        let userData = {
            fullname: fullName.value,
            numbercoffe: numberCoffe.value,
            favcoffe: favCoffe.value,
            image: files,
        }
        localStorage.setItem('User Data' ,JSON.stringify(userData));
        let userDataBack = localStorage.getItem(JSON.parse(userData));
        fullNameData.value = userDataBack.fullname;
        numberCoffeData.value = numberCoffe.numbercoffe;
        favCoffeData.value = favCoffe.favcoffe;

    }

}
enterBtn.onclick = function(){
    setData();
}