function getLastDayOfMonth(year, month) {

    let date = new Date(year, month);    

    do {
        date.setDate(date.getDate() + 1);
    } while (date.getMonth() == month)

    date.setDate(date.getDate() - 1);

    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));