//https://www.figma.com/file/tpoSV4numTo9RUdokG7CUM/resaizer_app_landing_page?node-id=0%3A1
const mobileNavbar = document.getElementById('mobileNavbar');

mobileNavbar.addEventListener('click', () => {
    const navbar_mobile = document.querySelector('.navbar_mobile');
    navbar_mobile.classList.toggle('active');
})

// Gallery Function

// Buttons variable declaration.
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

// Lists variable declaration.
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');
const list5 = document.getElementById('list5');
const list6 = document.getElementById('list6');


btn1.addEventListener('click', () => {
    btn1.classList.add('activeBtn')
    btn2.classList.remove('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.remove('activeBtn');
    btn5.classList.remove('activeBtn');
    btn6.classList.remove('activeBtn');

    list1.classList.remove('listDisplay');
    list2.classList.add('listDisplay');
    list3.classList.add('listDisplay');
    list4.classList.add('listDisplay');
    list5.classList.add('listDisplay');
    list6.classList.add('listDisplay');
})

btn2.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.add('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.remove('activeBtn');
    btn5.classList.remove('activeBtn');
    btn6.classList.remove('activeBtn');

    list1.classList.add('listDisplay');
    list2.classList.remove('listDisplay');
    list3.classList.add('listDisplay');
    list4.classList.add('listDisplay');
    list5.classList.add('listDisplay');
    list6.classList.add('listDisplay');
})

btn3.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.add('activeBtn');
    btn4.classList.remove('activeBtn');
    btn5.classList.remove('activeBtn');
    btn6.classList.remove('activeBtn');

    list1.classList.add('listDisplay');
    list2.classList.add('listDisplay');
    list3.classList.remove('listDisplay');
    list4.classList.add('listDisplay');
    list5.classList.add('listDisplay');
    list6.classList.add('listDisplay');
})

btn4.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.add('activeBtn');
    btn5.classList.remove('activeBtn');
    btn6.classList.remove('activeBtn');

    list1.classList.add('listDisplay');
    list2.classList.add('listDisplay');
    list3.classList.add('listDisplay');
    list4.classList.remove('listDisplay');
    list5.classList.add('listDisplay');
    list6.classList.add('listDisplay');
})

btn5.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.remove('activeBtn');
    btn5.classList.add('activeBtn');
    btn6.classList.remove('activeBtn');

    list1.classList.add('listDisplay');
    list2.classList.add('listDisplay');
    list3.classList.add('listDisplay');
    list4.classList.add('listDisplay');
    list5.classList.remove('listDisplay');
    list6.classList.add('listDisplay');
})

btn6.addEventListener('click', () => {
    btn1.classList.remove('activeBtn');
    btn2.classList.remove('activeBtn');
    btn3.classList.remove('activeBtn');
    btn4.classList.remove('activeBtn');
    btn5.classList.remove('activeBtn');
    btn6.classList.add('activeBtn');

    list1.classList.add('listDisplay');
    list2.classList.add('listDisplay');
    list3.classList.add('listDisplay');
    list4.classList.add('listDisplay');
    list5.classList.add('listDisplay');
    list6.classList.remove('listDisplay');
})

// Feature Agree Function
    const agreed = document.getElementById('agreed');
    const tick = document.getElementById('featureTick');
    tick.addEventListener('click', () => {
        if(tick.checked == true)
        {
            agreed.classList.add('agreeActive');
            document.querySelector('.subscribe_inner-agree div i').style.visibility = 'visible';
        }
        else{
            agreed.classList.remove('agreeActive');
            document.querySelector('.subscribe_inner-agree div i').style.visibility = 'hidden';
        }
    })