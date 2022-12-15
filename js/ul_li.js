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
//////////////////////////////////////
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const li = document.createElement("li");
//     li.textContent = element;
//     ul.appendChild(li);

//     if (Array.isArray(element)) {
//       counter+=1
//       const ul2 = document.createElement("ul");
//       ul.appendChild(ul2);
//       for (let j = 0; j < array[i].length; j++) {  // вложенный цикл запускает ВСЕ свои итерации на каждую итерацию основного
//         const li2 = document.createElement("li");
//         let element2 = element[j];
//         li2.textContent = i + "." + element2;
//         ul2.appendChild(li2);
//       }
//     }
//   }
/////////////////////////////////
//const para = document.createElement("p");
// const node = document.createTextNode("This is new.");  //creating element node
// para.appendChild(node); //append it to an existing element
//перфект когда мы не говорим когда это слцчилось
// for(let i = 0; i < array.length; i++) {
//     const element = array[i]
//     const li = document.createElement('li')
//     li.textContent = element
//     console.log(ul.appendChild(li))

//     if(Array.isArray(element)) {
//         const ul2 = document.createElement('ul');
//         ul.appendChild(ul2)
//         for(let j = 0; j < array[i].length; j++) {
//             const li2 = document.createElement('li')
//             let element2 = element[j]
//             li2.textContent = element +  '.' + element2
//             console.log(ul2.appendChild(li2))
//         }
//     }
// }

// counter++
// const element = array[i]
// const li = document.createElement('li')
// li.textContent = element
// console.log(ul.appendChild(li))

// if(Array.isArray(element)) {
//     const ul2 = document.createElement('ul');
//     ul.appendChild(ul2)
//     let sub = generateList(element, counter+1)
//     console.log(sub)
// }

