let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentDayOfWeek = date.getDay();
let getFirstDayOfCurrentMonth = new Date(currentYear, currentMonth)
let cases = ""

let days = document.querySelector('#days');
let dates = document.querySelector('#dates');
let months = document.querySelector('#months');
let years = document.querySelector('#years');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

const daysInWeekArray = ["dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const monthArray = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jui", "Aou", "Sep", "Oct", "Nov", "Dec"];

let firstDayOfCurrentMonth = daysInWeekArray[getFirstDayOfCurrentMonth.getDay()]

if (currentYear % 4) {
    fevrier = 29;
} else {
    fevrier = 28;
}

const numberOfDayInMonth = [31, fevrier, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

days.innerHTML = daysInWeekArray[currentDayOfWeek];
dates.innerHTML = currentDate;
months.innerHTML = monthArray[currentMonth];
years.innerHTML = currentYear;

function time() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}
setInterval(time, 1000);

let yearContainer = document.querySelector('#yearContainer')
let monthContainer = document.querySelector('#monthContainer')

const DateObject = {
    year: currentYear,
    month: monthArray[currentMonth],
    date: currentDate,
    dayOfTheWeek: daysInWeekArray[currentDayOfWeek],
    numberOfDays: numberOfDayInMonth[currentMonth],
    firstDayOfMonth: firstDayOfCurrentMonth,
    firstDayOfMonthIndex: getFirstDayOfCurrentMonth.getDay(),
    monthIndex: currentMonth
}

yearContainer.innerHTML = DateObject.year
monthContainer.innerHTML = DateObject.month

window.onload = () => {
    displayCalendar()
}

function displayCalendar() {
    let startPosition = ""
    if (DateObject.firstDayOfMonthIndex === 1) {
        startPosition = 0
    }
    if (DateObject.firstDayOfMonthIndex === 2) {
        startPosition = 1
    }
    if (DateObject.firstDayOfMonthIndex === 3) {
        startPosition = 2
    }
    if (DateObject.firstDayOfMonthIndex === 4) {
        startPosition = 3
    }
    if (DateObject.firstDayOfMonthIndex === 5) {
        startPosition = 4
    }
    if (DateObject.firstDayOfMonthIndex === 6) {
        startPosition = 5
    }
    if (DateObject.firstDayOfMonthIndex === 0) {
        startPosition = 6
    }

    for (let i = 1; i <= DateObject.numberOfDays; i++) {
        let cases = document.querySelector('#id' + (startPosition + i))
        cases.innerHTML = i
    }
    let checkActiveYear = parseInt(yearContainer.innerHTML)
    let checkActiveMonth = monthArray.indexOf(monthContainer.innerHTML)
    if (checkActiveYear === currentYear && checkActiveMonth === currentMonth) {
        let activeDay = document.querySelector('#id' + (startPosition + currentDate))
        activeDay.classList.add('activeDay')
    }

}

let upMonthArrow = document.querySelector('#monthRightArrow')
upMonthArrow.addEventListener('click', () => {
    upMonth()
})

function upMonth() {
    for (let i = 1; i <= 42; i++) {
        let cases = document.querySelector('#id' + i)
        cases.innerHTML = ""
        cases.classList.remove('activeDay')
    }
    let displayedYear = parseInt(yearContainer.innerHTML)
    let displayedMonth = monthContainer.innerHTML
    let indexOfDisplayedMonth = monthArray.indexOf(displayedMonth)
    if (indexOfDisplayedMonth === 11) {
        displayedYear = displayedYear + 1
        let yearUp = new Date(displayedYear, 0)
        let followingYear = yearUp.getFullYear()
        console.log(followingYear);
        yearContainer.innerHTML = followingYear
        let followingMonth = yearUp.getMonth()
        monthContainer.innerHTML = monthArray[followingMonth]
        let getIndexOfFirstDayOfFollowingMonth = yearUp.getDay()
        let startPosition = ""
        if (getIndexOfFirstDayOfFollowingMonth === 1) {
            startPosition = 0
        }
        if (getIndexOfFirstDayOfFollowingMonth === 2) {
            startPosition = 1
        }
        if (getIndexOfFirstDayOfFollowingMonth === 3) {
            startPosition = 2
        }
        if (getIndexOfFirstDayOfFollowingMonth === 4) {
            startPosition = 3
        }
        if (getIndexOfFirstDayOfFollowingMonth === 5) {
            startPosition = 4
        }
        if (getIndexOfFirstDayOfFollowingMonth === 6) {
            startPosition = 5
        }
        if (getIndexOfFirstDayOfFollowingMonth === 0) {
            startPosition = 6
        }

        for (let i = 1; i <= numberOfDayInMonth[followingMonth]; i++) {
            let cases = document.querySelector('#id' + (startPosition + i))
            cases.innerHTML = i
        }
        let checkActiveYear = parseInt(yearContainer.innerHTML)
        let checkActiveMonth = monthArray.indexOf(monthContainer.innerHTML)
        if (checkActiveYear === currentYear && checkActiveMonth === currentMonth) {
            let activeDay = document.querySelector('#id' + (startPosition + currentDate))
            activeDay.classList.add('activeDay')
        }
    } else if (indexOfDisplayedMonth < 11) {
        let monthUp = new Date(displayedYear, indexOfDisplayedMonth + 1)
        followingMonth = monthUp.getMonth()
        monthContainer.innerHTML = monthArray[followingMonth]
        getIndexOfFirstDayOfFollowingMonth = monthUp.getDay()
        let startPosition = ""
        if (getIndexOfFirstDayOfFollowingMonth === 1) {
            startPosition = 0
        }
        if (getIndexOfFirstDayOfFollowingMonth === 2) {
            startPosition = 1
        }
        if (getIndexOfFirstDayOfFollowingMonth === 3) {
            startPosition = 2
        }
        if (getIndexOfFirstDayOfFollowingMonth === 4) {
            startPosition = 3
        }
        if (getIndexOfFirstDayOfFollowingMonth === 5) {
            startPosition = 4
        }
        if (getIndexOfFirstDayOfFollowingMonth === 6) {
            startPosition = 5
        }
        if (getIndexOfFirstDayOfFollowingMonth === 0) {
            startPosition = 6
        }

        for (let i = 1; i <= numberOfDayInMonth[followingMonth]; i++) {
            let cases = document.querySelector('#id' + (startPosition + i))
            cases.innerHTML = i
        }
        let checkActiveYear = parseInt(yearContainer.innerHTML)
        let checkActiveMonth = monthArray.indexOf(monthContainer.innerHTML)
        if (checkActiveYear === currentYear && checkActiveMonth === currentMonth) {
            let activeDay = document.querySelector('#id' + (startPosition + currentDate))
            activeDay.classList.add('activeDay')
        }
    }
}

let downMonthArrow = document.querySelector('#monthLeftArrow')
downMonthArrow.addEventListener('click', () => {
    downMonth()
})

function downMonth() {
    for (let i = 1; i <= 42; i++) {
        let cases = document.querySelector('#id' + i)
        cases.innerHTML = ""
        cases.classList.remove('activeDay')
    }
    let displayedYear = parseInt(yearContainer.innerHTML)
    let displayedMonth = monthContainer.innerHTML
    let indexOfDisplayedMonth = monthArray.indexOf(displayedMonth)
    if (indexOfDisplayedMonth === 0) {
        displayedYear = displayedYear - 1
        let yearDown = new Date(displayedYear, 11)
        let backYear = yearDown.getFullYear()
        console.log(backYear);
        yearContainer.innerHTML = backYear
        let backMonth = yearDown.getMonth()
        monthContainer.innerHTML = monthArray[backMonth]
        let getIndexOfFirstDayOfBackMonth = yearDown.getDay()
        let startPosition = ""
        if (getIndexOfFirstDayOfBackMonth === 1) {
            startPosition = 0
        }
        if (getIndexOfFirstDayOfBackMonth === 2) {
            startPosition = 1
        }
        if (getIndexOfFirstDayOfBackMonth === 3) {
            startPosition = 2
        }
        if (getIndexOfFirstDayOfBackMonth === 4) {
            startPosition = 3
        }
        if (getIndexOfFirstDayOfBackMonth === 5) {
            startPosition = 4
        }
        if (getIndexOfFirstDayOfBackMonth === 6) {
            startPosition = 5
        }
        if (getIndexOfFirstDayOfBackMonth === 0) {
            startPosition = 6
        }

        for (let i = 1; i <= numberOfDayInMonth[backMonth]; i++) {
            let cases = document.querySelector('#id' + (startPosition + i))
            cases.innerHTML = i
        }
        let checkActiveYear = parseInt(yearContainer.innerHTML)
        let checkActiveMonth = monthArray.indexOf(monthContainer.innerHTML)
        if (checkActiveYear === currentYear && checkActiveMonth === currentMonth) {
            let activeDay = document.querySelector('#id' + (startPosition + currentDate))
            activeDay.classList.add('activeDay')
        }
    } else if (indexOfDisplayedMonth > 0) {
        let monthDown = new Date(displayedYear, indexOfDisplayedMonth - 1)
        backMonth = monthDown.getMonth()
        monthContainer.innerHTML = monthArray[backMonth]
        getIndexOfFirstDayOfBackMonth = monthDown.getDay()
        let startPosition = ""
        if (getIndexOfFirstDayOfBackMonth === 1) {
            startPosition = 0
        }
        if (getIndexOfFirstDayOfBackMonth === 2) {
            startPosition = 1
        }
        if (getIndexOfFirstDayOfBackMonth === 3) {
            startPosition = 2
        }
        if (getIndexOfFirstDayOfBackMonth === 4) {
            startPosition = 3
        }
        if (getIndexOfFirstDayOfBackMonth === 5) {
            startPosition = 4
        }
        if (getIndexOfFirstDayOfBackMonth === 6) {
            startPosition = 5
        }
        if (getIndexOfFirstDayOfBackMonth === 0) {
            startPosition = 6
        }

        for (let i = 1; i <= numberOfDayInMonth[backMonth]; i++) {
            let cases = document.querySelector('#id' + (startPosition + i))
            cases.innerHTML = i
        }
        let checkActiveYear = parseInt(yearContainer.innerHTML)
        let checkActiveMonth = monthArray.indexOf(monthContainer.innerHTML)
        if (checkActiveYear === currentYear && checkActiveMonth === currentMonth) {
            let activeDay = document.querySelector('#id' + (startPosition + currentDate))
            activeDay.classList.add('activeDay')
        }
    }
}