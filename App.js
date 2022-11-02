// Change NavBar on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
})

// show hide FAQs answers

const faqs = document.querySelectorAll('.faq')
const firstFaq = document.querySelector('.firstFaq')

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        //chane icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        } else if (icon.className === 'uil uil-minus'){
            icon.className = 'uil uil-plus';
        };
    })
})

window.addEventListener('load', ()=>{
    firstFaq.classList.toggle('open');
})






// show/hide course details

const details = document.querySelectorAll('.open_btn');
const course_detail_list = document.querySelectorAll('course_detail_list')

details.forEach((btn =>{
    btn.addEventListener("click", ()=>{
        btn.previousElementSibling.classList.toggle('open_details')
        btn.nextElementSibling.classList.toggle('enroll_btn')
        if(btn.innerHTML === "View Details"){
            btn.innerHTML = "Hide Details"
        } else {
            btn.innerHTML = "View Details"
        }
    })
}))

// ============= Nav Menu (tablet) ===========//

const menu = document.querySelector('.nav__menu')
const navOpen = document.getElementById('open-menu-btn')
const navClose = document.getElementById('close-menu-btn')


navOpen.addEventListener('click', ()=>{
    menu.style.display = "flex"
    navClose.style.display = "inline-block"
    navOpen.style.display = 'none'
})

navClose.addEventListener('click', ()=>{
    menu.style.display = 'none';
    navOpen.style.display = 'inline-block'
    navClose.style.display = "none"
})

var course_select = document.getElementById("course_select");
var display_amount = document.getElementById("display_amount");

function showAmount (){
    var value =  course_select.options[course_select.selectedIndex].text;
    
    switch(value){
        case "Trading Blue Print (Master Your Trade)" :
            display_amount.value = "19,999/-";
            break;
        case "10X Your Profit" :
            display_amount.value = "49,999/-";
            break;    
        case "Be The Portfolio Manager (NISM Certification)" :
            display_amount.value = "99,999/-";
            break;
        case "Be The Stockpreneur" :
            display_amount.value = "2,99,999/-";
            break;
        default : 
            display_amount.value = "";   
    }
}


// SIP Calculator

const sip = document.getElementById("sip");
const lumpsum = document.getElementById("lumpsum");
const month_lable = document.getElementById('month_lable');

// Input values selector
const month_sip = document.getElementById('month_sip');
const interest = document.getElementById('interest');
const time_periods = document.getElementById('time_periods');


var investType = 'sip';

sip.style.backgroundColor = "var(--color-bg1)"


lumpsum.addEventListener('click', ()=>{

    month_lable.innerHTML = "Total Investment";
    lumpsum.style.backgroundColor = "var(--color-bg1)"
    sip.style.backgroundColor = ""
    month_sip.placeholder = 'e.g. 100000 ₹';
    investType = "lump"
})

sip.addEventListener('click', ()=>{

    month_lable.innerHTML = "Monthly Investment";
    sip.style.backgroundColor = "var(--color-bg1)"
    lumpsum.style.backgroundColor = ""
    month_sip.placeholder = 'e.g. 1000 ₹';
    investType = "sip"
})

var invest_amount_out = document.getElementById('invest_amount_out')
var return_amount_out = document.getElementById('return_amount_out')
var total_amount_out = document.getElementById('total_amount_out')




const calculateSip = ()=>{

    var totalValue = 0;
    var totalInvest = 0;
    var totalReturn = 0;


    var P = month_sip.value;
    var n = time_periods.value*12;
    var irt = Number(interest.value/100)
    var ir = Number(interest.value/12/100)
    var i = Number(ir);
    var i2 = Number(irt)
    

    if(investType === "sip"){
        totalInvest = P*n;
        totalValue = P*((Math.pow(1+i,n)-1)/i)*(i+1);
    } else if (investType = "lump"){
        totalInvest = P;
        totalValue = P*((Math.pow(1+i2,time_periods.value)));
    }

    totalReturn = totalValue - totalInvest;

    const totalR = Math.round(totalValue)
    const investR = Math.round(totalInvest)
    const returnR = Math.round(totalReturn)

    const totalOut = totalR.toLocaleString();
    const totalInvestOut = investR.toLocaleString();
    const totalReturnOut = returnR>0?returnR.toLocaleString():0;


    invest_amount_out.innerHTML = totalInvestOut;
    return_amount_out.innerHTML = totalReturnOut;
    total_amount_out.innerHTML = totalOut;

}

const whatisselected = ()=>{

}


