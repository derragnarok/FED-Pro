let number = prompt("Введіть п'ятизначне число:");

if (/^\d{5}$/.test(number)) {
  let result = number.split('').join(' ');
  console.log(result);
  alert(result); // для наочності
} else {
  alert("Будь ласка, введіть коректне п'ятизначне число.");
}
