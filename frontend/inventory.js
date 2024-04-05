const URL = 'http://localhost:8282/books';   //port is in my yml file

let allBooks = [];   //array to store all books

//document gives access to html
document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {

        //readyState 4 gives response from server
        if(xhr.readyState === 4) {

            //JSON.parse() parses JSON into js objects
            let books = JSON.parse(xhr.responseText);  
            //use response text to contain response from the server
            
            //adds books to table
            books.forEach(newBook => {
                addBookToTable(newBook);
            });
        }
    }
    //sets the request method and the url to send the request to
    xhr.open('GET', URL);
    xhr.send();
});


document.getElementById('new-book-form').addEventListener('submit', (event) => {

    // event object gives info about the event that we are listening for
    event.preventDefault();         //preventDefault() is going to prevent the form from refreshing the page 

    // FormData takes in the html tags for your form
    let inputData = new FormData(document.getElementById('new-book-form'));

    // use .get() to retrieve a field from form data and pass in the NAME attribute from the <input> tag
    let newBook = {  
        title : inputData.get('new-book-title'),
        author : inputData.get('new-book-author'),
        quantity : inputData.get('new-book-quantity'),
        price : inputData.get('new-book-price'),
        warehouse : {
            location : inputData.get('new-warehouse-location')
        }
    }
    doPostRequest(newBook);
});

//POPULATE TABLE
function addBookToTable(newBook) {
    console.log(newBook);

    //create necessary DOM elements for book
    let tr = document.createElement('tr');          
    let id = document.createElement('input');          
    let title = document.createElement('td');       
    let author = document.createElement('td'); 
    let quantity = document.createElement('td');
    let price = document.createElement('td');       
    let warehouse = document.createElement('td');    
    let editBtn = document.createElement('td');     
    let deleteBtn = document.createElement('td'); 
    
    // Configure the hidden input field for the ID
    id.type = 'hidden';  // Set input type to 'hidden'
    id.value = newBook.id;  // Set the value to the book ID

    id.innerText = newBook.id;
    title.innerText = newBook.title;
    author.innerText = newBook.author;
    quantity.innerText = newBook.quantity;
    price.innerText = newBook.price;
    warehouse.innerText = newBook.warehouse.location;

    editBtn.innerHTML =
    `<button class="btn btn-primary" id="edit-button" onclick="activateEditForm(${newBook.id})">Edit</button>`  

    deleteBtn.innerHTML =
    `<button class="btn btn-primary" id="delete-button" onclick="activateDeleteForm(${newBook.id})">Delete</button>`

    //add <td> tag as nested children to the <tr> tag in our html page
    tr.appendChild(id);
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(quantity);
    tr.appendChild(price);
    tr.appendChild(warehouse);
    tr.appendChild(editBtn);
    tr.appendChild(deleteBtn);

    //set id attribute for the <tr> tag
    tr.setAttribute('id', 'TR' + newBook.id);

    //add <tr> tag to the <tbody> tag
    //look through DOM , look for book table body and append the tr element
    document.getElementById('book-table-body').appendChild(tr);

    //add new book to list of books
    allBooks.push(newBook);

}

async function doPostRequest(newBook) {

    console.log(newBook);
    let returnedData = await fetch(URL + '/book', {    //returnedData contains info from our postrequest
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json' //server is expecting JSON in the body
        },
        body : JSON.stringify(newBook)     //turns js object into json
    });

    //.json() to deserialize the JSON back into js object - this ALSO returns a promise
    //await lets us return the promises with our data
    // Log the raw response content
    //console.log('Response:', await returnedData.text());
    let bookJson = await returnedData.json();

    console.log('BOOK JSON' + bookJson);

    //add book to table
    addBookToTable(bookJson);

    // Close the modal
    $('#staticBackdrop').modal('hide');

    //reset the form
    document.getElementById('new-book-form').reset();

}


//UPDATE BOOK TABLE
document.getElementById('update-book-form').addEventListener('submit', (event) => {
    event.preventDefault();  

    //retrieving data from the update form
    let inputData = new FormData(document.getElementById('update-book-form'));

    //MAKE SURE TO INCLUDE IDS WHEN DOING A PUT REQUEST because form data can't access values from disabled fields 
    let book = {
        id : document.getElementById('update-book-id').value,  
        title : inputData.get('update-book-title'),
        author : inputData.get('update-book-author'),
        quantity : inputData.get('update-book-quantity'),
        price : inputData.get('update-book-price'),
        warehouse : {
            id : document.getElementById('update-warehouse-id').value,
            location : inputData.get('update-warehouse-location')
        }
    }


    fetch(URL + '/book', {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
        }, 
        body : JSON.stringify(book)
    })
    .then((data) => {
        //handle all 100, 200, and 300 status response codes
        //serialize the response into JSON
        return data.json();
    })
    .then((bookJson) => {      //handles the promise returned by data.json

        //add updated book to our table
        updateBookInTable(bookJson);

        // Close the modal
         $('#editBookModal').modal('hide');
    })
    .catch((error) => {
        //handle all 400 and 500 status response codes
        console.error(error);
    })

});


document.getElementById('delete-book-form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    // get the data from the form since all the fields are disabled and FormData wont capture them
    let bookId = document.getElementById('delete-book-id').value;
    let titleOnForm = document.getElementById('delete-book-title').value;
    let authorOnForm = document.getElementById('delete-book-author').value;
    let quantityOnForm = document.getElementById('delete-book-quantity').value;
    let priceOnForm = document.getElementById('delete-book-price').value;
    let warehouseId = document.getElementById('delete-warehouse-id').value;
    let warehouseLocationOnForm = document.getElementById('delete-warehouse-location').value;
    //let warehouseCapacityOnForm = document.getElementById('delete-warehouse-capacity').value;

    let book = {
        id : bookId,
        title : titleOnForm,
        author : authorOnForm, 
        quantity : quantityOnForm,
        price : priceOnForm,
        warehouse : {
            id : warehouseId,
            location : warehouseLocationOnForm
        }
    }

    fetch(URL + '/book', {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(book)
    })
    .then((data) => {

        //delete request returns no-content
        //check that the response we get back is a 204 - No Content and then we can delete it
        if(data.status === 204) {

            //removes a book from the table
            removeBookFromTable(book);

            // Close the modal
         $('#deleteBookModal').modal('hide');

            //RESET!
            resetAllForms();
        }
    })
    .catch((error) => {
        console.error(error);
    })
});

function updateBookInTable(book) {
    document.getElementById('TR' + book.id).innerHTML = `
    <td style="display: none;">${book.id}</td>    
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.quantity}</td>
    <td>${book.price}</td>
    <td>${book.warehouse.location}</td>
    <td><button class="btn btn-primary" id="editButton" onclick="activateEditForm(${book.id})">Edit</button></td>
    <td><button class="btn btn-primary" id="deleteButton" onclick="activateDeleteForm(${book.id})">Delete</button></td>
    `;
}

//bring up the edit form!!!!
function activateEditForm(bookId) {
    // find the book and its <tr> that needs to be edited
    for(let b of allBooks) {
        if(b.id === bookId) {
            document.getElementById('update-book-id').value = b.id;
            document.getElementById('update-book-title').value = b.title;
            document.getElementById('update-book-author').value = b.author;
            document.getElementById('update-book-quantity').value = b.quantity;
            document.getElementById('update-book-price').value = b.price;
            document.getElementById('update-warehouse-id').value = b.warehouse.id;
            document.getElementById('update-warehouse-location').value = b.warehouse.location;
        }

    }

    
    // Open the edit modal
    $('#editBookModal').modal('show');
    
}

function activateDeleteForm(bookId) {
    // find the book and its <tr> that needs to be deleted
    for(let b of allBooks) {
        if(b.id === bookId) {
            document.getElementById('delete-book-id').value = b.id;
            document.getElementById('delete-book-title').value = b.title;
            document.getElementById('delete-book-author').value = b.author;
            document.getElementById('delete-book-quantity').value = b.quantity;
            document.getElementById('delete-book-price').value = b.price;
            document.getElementById('delete-warehouse-id').value = b.warehouse.id;
            document.getElementById('delete-warehouse-location').value = b.warehouse.location;
        }
    }

    // Open the delete modal
    $('#deleteBookModal').modal('show');

}

function removeBookFromTable(book) {
    //removing the <tr> tag from the table when a book gets deleted
    const element = document.getElementById('TR' + book.id);
    element.remove();
}


//RESET!!! 
function resetAllForms() {

    //CLEARS DATA FROM ALL FORMS
    document.getElementById('new-book-form').reset();
    document.getElementById('update-book-form').reset();
    document.getElementById('delete-book-form').reset();

}
