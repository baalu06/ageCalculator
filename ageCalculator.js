function ageCalculator(){
    //Todo 
    //Validate date, validate date is before current date
    const dateValue = new Date(document.getElementById('dateInput').value);
    
    var {years, months, days} = dateDiffInDays(dateValue);
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
}
function dateDiffInDays(birthDate) {
    const currentDate =new Date();
    const diff = currentDate.getTime() - birthDate.getTime();
    const ageDate = new Date(diff);
    const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  // Adjust for months and days if necessary
  if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += daysInMonth;
  }
  return {years, months, days};
}