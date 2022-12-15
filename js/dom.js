// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку
//  з'являється <div>. При пропажі фокусу - <div> так само пропадає

//использовать адд лисенер и вставить элемент

const text = document.querySelector('.text');
console.log(text)
document.querySelector('p').style.color = 'red'
const container = document.getElementById('parent')
const div = document.createElement('div');
div.classList.add('black')
div.textContent = 'Hello world!'

text.addEventListener('mouseover', function(event) {
    
    container.appendChild(div)
    
})

text.addEventListener('mouseleave', function(event) {
    
    div.remove()
        
    })





// во втором нужно криэйт элемент, аппенд чайлд

//если первый вложенный массив то 1.1 если второй то 2.1 и тд


const element = document.createElement('div')
element.classList.add('block')
element.textContent = 'Hello!'
text.addEventListener('click', function() {
    container.appendChild(element)
})


text.addEventListener('dblclick', function() {
    element.remove(element)
})
