const reg = /'/g;
const textNew = document.querySelector('.text').textContent.replace(reg, '"');

document.querySelector('.textNew').textContent = textNew;

const reg2 = /n"t/g;
const textNew2 = document.querySelector('.textNew').textContent.replace(reg2, 'n\'t');
document.querySelector('.textNew2').textContent = textNew2;