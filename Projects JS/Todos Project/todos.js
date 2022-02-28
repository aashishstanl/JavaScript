//Taking reference of the classes of tags in the const variable

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const Name = document.querySelector('.name');

//creating the list when user add in the todo to do

const generateTemplate = todo => {

    const html =`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

//adding value &checking if any spaces and triming it
    const todo = addForm.add.value.trim();
//checking if the adding box is empty and add only if it has length
    if(todo.length){
        generateTemplate(todo);
    //after adding the box to be at orginal position
        addForm.reset();
    }

    
});

//delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        
    }
});

//searching todos
const filterTodos = (term) => {
    //consoling the item in the ul and changing it into array from collection
    
    Array.from(list.children)
//filtering out the list that does not have the word that the user has typed to searched
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    //after filtering adding the class name 'filtered' to the list which does not have the word
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
// removing the class 'filtered' from the list when the user undo the word that has typed
    .forEach((todo) => todo.classList.remove('filtered'));
};
//keyup event

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

Name.addEventListener('copy', e => {
    Name.textContent = 'Thank you  for copying!';
    Name.style.color ='whitesmoke';
});


setTimeout(() => {
    alert('Time pass mt kr kaam add kr le😜!');
}, 5000);


setTimeout(() => {
    alert('Delete bhi kr skte ho aap jo kaam ho gya hai');
}, 30000);
