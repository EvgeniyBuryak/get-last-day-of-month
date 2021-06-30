function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert(getLastDayOfMonth(2007, 5)); // 30
alert(getLastDayOfMonth(2013, 0)); // 31
alert(getLastDayOfMonth(2021, 1)); // 28