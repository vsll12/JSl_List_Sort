//1.Sorting the array

let items3 = document.querySelectorAll('#list li');

let sorted_array = Array.from(items3).sort((a,b) => b.innerText - a.innerText );

let items4 = document.querySelector('#list');

items4.innerHtml = '';

sorted_array.forEach(item => items4.appendChild(item));











