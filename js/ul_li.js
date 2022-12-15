// Написати функцію generateList(array), яка приймає масив із чисел та масивів
// чисел (наприклад [1,2, 3]) і генерує список з елементів:

// let el= document.getElementById("test");
// el.classList.add("t1"); //додаємо клас t1
// el.classList.toggle("t1"); //видаляємо  клас t1
// el.classList.toggle("t1"); // додаємо клас t1

// alert( el.classList );


// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.menu');
// menuBtn.addEventListener('click', function(){
// 	menu.classList.toggle('active');
// })
//////////////////////////////////////////////////////////
const ul = document.createElement("ul");
ul.style.margin = "100px";
let container = document.querySelector(".container");
container.appendChild(ul);
let counter = 0;

function generateList(array) {
  for (let i = 1; i < array.length; i++) {
    
    const element = array[i];
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);

    if (Array.isArray(element)) {
      counter++
      const ul2 = document.createElement("ul");
      ul.appendChild(ul2);
      for (let j = 0; j < array[i].length; j++) {
        const li2 = document.createElement("li");
        let element2 = element[j];
        li2.textContent =  counter + "." + element2;
        ul2.appendChild(li2);
      }
    }
  }
}

generateList([1, 2, 3, [1, 2, 3,4], 4,5]);
//////////////////////////////////////////////////////

