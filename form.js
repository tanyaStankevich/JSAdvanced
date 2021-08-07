const but = document.querySelector('.but');
but.addEventListener('click', (e) => {


    const name = document.querySelector('#nameText').value;
    console.log(name);
    const regname = /[a-z]/;
    const rezName = regname.test(name);//вернет true или false
    console.log(rezName);
    if (rezName != true) {
        document.getElementById('nameText').style.border = '1px solid red';
        document.querySelector('#nameErr').textContent = 'Имя должно содержать только латинские буквы';
        document.getElementById('nameErr').style.color = 'red';
    }

    const tel = document.querySelector('#telNumber').value;
    console.log(tel);
    const regtel = /\+7\(\d{3}\)\d{3}\-\d{4}/;
    const rezTel = regtel.test(tel);//вернет true или false
    console.log(rezTel);
    if (rezTel != true) {
        document.getElementById('telNumber').style.border = '1px solid red';
        document.querySelector('#telErr').textContent = 'Телефон должен соответствовать формату +7(000)000-0000';
        document.getElementById('telErr').style.color = 'red';
    }

    const email = document.querySelector('#email').value;
    console.log(email);
    const regemail = /my.?|-?mail@mail.ru/;
    const rezMail = regemail.test(email);//вернет true или false
    console.log(rezMail);
    if (rezMail != true) {
        document.getElementById('email').style.border = '1px solid red';
        document.querySelector('#emailErr').textContent = 'Неверный формат, должно быть  mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru';
        document.getElementById('emailErr').style.color = 'red';
    }
    const textUser = document.querySelector('#text').value;
    console.log(textUser);
    if (rezName == true & rezTel == true & rezMail == true) {
        document.querySelector('#nameErr').textContent = '';
        document.getElementById('nameText').style.border = '1px solid black';
        document.querySelector('#telErr').textContent = '';
        document.getElementById('telNumber').style.border = '1px solid black';
        document.querySelector('#emailErr').textContent = '';
        document.getElementById('email').style.border = '1px solid black';
        document.querySelector('.itog').textContent = 'Ваши данные отправлены на сервер!'
    }
})


