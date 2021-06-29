function getLastDayOfMonth(year, month) {

    let date = new Date(year, month);    

    date.setDate(date.getDate() + 29);

    if (!(date.getMonth() == month)) {
        if (year % 4 == 0) return "29 (высокосный год, февраль)";
        return "28 (невысокосный год, февраль)";
    }
    
    return ((date.getDate() + 1) == month) ? 31 : 30;
}

alert(getLastDayOfMonth(2007, 1));
alert(new Date(2007, 1, 28));