
let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingValue = document.getElementsByClassName('monthsaving-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsaving-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.shoose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money,time;


startBtn.addEventListener('click', function(){
    time = prompt("Виведіть дату в форматі РРРР-ММ-ДД","");
    money = +prompt(" Ваш бюджет за місяць","");

    while(isNaN(money) || money == '' || money == null ){
        money = +prompt(" Ваш бюджет за місяць?","");
    }
    appDate.budjet = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
        && a!= '' && b != '' && a.lenght < 50 ){
            console.log("done");
            appDate.expenses[a] = b;
            sum += +b;
        }else {
            i = i-1
        }
    };
    expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0 ; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + ' ' ;
    }
});

countBtn.addEventListener('click',function(){

    if(appDate.budjet != undefined){
        appDate.MoneyPerDay = (appDate.budjet / 30).toFixed();
        dayBudgetValue.textContent = appDate.MoneyPerDay;
    
        if(appDate.MoneyPerDay < 100){
            levelValue.textContent = "У вас мінімальний рівень достатку";
        }else if(appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000){
            console.log("У вас середній рівень достатку ");
        }else if (appDate.MoneyPerDay > 2000 ) {
            levelValue.textContent = "У вас високий рівень достатку ";
        }else{
            levelValue.textContent = "При вводі даних сталася помилка";
        };
    } else{
        dayBudgetValue.textContent =  "При вводі даних сталася помилка";
    }
})

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appDate.income = items.split (", ");
    incomeValue.textContent = appDate.income;
});

checkSavings.addEventListener('click', function(){
    if(appDate.savings == true){
        appDate.savings = false;
    }else{
        appDate.savings = true;
    }
});

sumValue.addEventListener('click',function(){
    if(appDate.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appDate.monthIncome = sum/100/12 * percent;
        appDate.yearIncome = sum/100 * percent;
        
        monthSavingValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('click',function(){
    if(appDate.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
    
    appDate.monthIncome = sum/100/12 * percent;
    appDate.yearIncome = sum/100 * percent;
    
    monthSavingValue.textContent = appDate.monthIncome.toFixed(1);
    yearSavingValue.textContent = appDate.yearIncome.toFixed(1);
    }
})


let appDate = {
    budjet:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings: false

};
