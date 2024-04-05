const URL = 'http://localhost:8282/warehouse';   //port is in my yml file

let allWarehouses = [];   //array to store all warehouses

//document gives access to html
document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {

        //readyState 4 gives response from server
        if(xhr.readyState === 4) {

            //JSON.parse() parses JSON into js objects
            let warehouses = JSON.parse(xhr.responseText);  
            //use response text to contain response from the server
            
            //adds warehouses to table
            warehouses.forEach(newWarehouse => {
                addWarehouseToTable(newWarehouse);
            });

            populateBooksArray();
        }
    }
    //sets the request method and the url to send the request to
    xhr.open('GET', URL);
    xhr.send();
});


function populateBooksArray() {
    // Perform an AJAX request to retrieve data related to books
    let bookXHR = new XMLHttpRequest();

    bookXHR.onreadystatechange = () => {
        if (bookXHR.readyState === 4) {
            if (bookXHR.status === 200) {
                // Parse the JSON response to get the book data
                let bookData = JSON.parse(bookXHR.responseText);

                // Assuming bookData is an array of book objects
                // Populate the books array with the received data
                books = bookData;

                // Once the books array is populated, manipulate the DOM
                //manipulateDOMWithBooks();
            } else {
                console.error('Error fetching book data:', bookXHR.statusText);
            }
        }
    };

    // Adjust the URL and request method based on your server endpoint
    bookXHR.open('GET', 'http://localhost:8282/books');
    bookXHR.send();
}



document.getElementById('new-warehouse-form').addEventListener('submit', (event) => {

    // event object gives info about the event that we are listening for
    event.preventDefault();         //preventDefault() is going to prevent the form from refreshing the page 

    // FormData takes in the html tags for your form
    let inputData = new FormData(document.getElementById('new-warehouse-form'));

    // use .get() to retrieve a field from form data and pass in the NAME attribute from the <input> tag
    let newWarehouse = {  
        location : inputData.get('new-warehouse-location'),
        capacity : inputData.get('new-warehouse-capacity')
    };

   // newWarehouse.id = generateUniqueId(); // You need to implement this function
    doPostRequest(newWarehouse);
});

//POPULATE TABLE
function addWarehouseToTable(newWarehouse) {
    console.log(newWarehouse);

    //create necessary DOM elements for warehouse
    let tr = document.createElement('tr');          
    let id = document.createElement('input');                
    let location = document.createElement('td');   
    let capacity = document.createElement('td');  
    let books = document.createElement('td');  // Add a new <td> for the books array
    let editBtn = document.createElement('td');     
    let deleteBtn = document.createElement('td'); 
    
    // Configure the hidden input field for the ID
    id.type = 'hidden';  // Set input type to 'hidden'
    id.value = newWarehouse.id;  // Set the value to the warehouse id

    id.innerText = newWarehouse.id;
    location.innerText = newWarehouse.location;

    id.innerText = newWarehouse.id;
    location.innerText = newWarehouse.location;
    
    // Check if newWarehouse.capacity is undefined
    if (newWarehouse.capacity !== undefined) {
        capacity.innerText = newWarehouse.capacity;
    } else {
        capacity.innerText = "8000"; // Set capacity to an empty string or a default value
    }
    

    //capacity.innerText = newWarehouse.capacity;

    // Iterate over the books array and create a paragraph element for each book title
    if (newWarehouse.books) {
        newWarehouse.books.forEach(function(book) {
            let bookTitle = document.createElement("p");
            bookTitle.textContent = book.title;
            books.appendChild(bookTitle);
        });
    }

    editBtn.innerHTML =
    `<button class="btn btn-primary" id="edit-button" onclick="activateEditForm(${newWarehouse.id})">Edit</button>`  

    deleteBtn.innerHTML =
    `<button class="btn btn-primary" id="delete-button" onclick="activateDeleteForm(${newWarehouse.id})">Delete</button>`

    //add <td> tag as nested children to the <tr> tag in our html page
    tr.appendChild(id);
    tr.appendChild(location);
    tr.appendChild(capacity);
    //tr.appendChild(books);
    tr.appendChild(editBtn);
    tr.appendChild(deleteBtn);

    //set id attribute for the <tr> tag
    tr.setAttribute('id', 'TR' + newWarehouse.id);

    //add <tr> tag to the <tbody> tag
    //look through DOM , look for warehouse table body and append the tr element
    document.getElementById('warehouse-table-body').appendChild(tr);

    //add new warehouse to list of warehouses
    allWarehouses.push(newWarehouse);

}

async function doPostRequest(newWarehouse) {

    console.log(newWarehouse);
    let returnedData = await fetch(URL + '/add', {    //returnedData contains info from our postrequest
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json' //server is expecting JSON in the body
        },
        body : JSON.stringify(newWarehouse)     //turns js object into json
    });

    //.json() to deserialize the JSON back into js object - this ALSO returns a promise
    //await lets us return the promises with our data
    // Log the raw response content
    //console.log('Response:', await returnedData.text());
    let warehouseJson = await returnedData.json();

    console.log('WAREHOUSE JSON' + warehouseJson);

    //add warehouse to table
    addWarehouseToTable(warehouseJson);

    // Close the modal
    $('#staticBackdrop').modal('hide');

    //reset the form
    document.getElementById('new-warehouse-form').reset();

}


//UPDATE WAREHOUSE TABLE
document.getElementById('update-warehouse-form').addEventListener('submit', (event) => {
    event.preventDefault();  

    //retrieving data from the update form
    let inputData = new FormData(document.getElementById('update-warehouse-form'));

    //MAKE SURE TO INCLUDE IDS WHEN DOING A PUT REQUEST because form data can't access values from disabled fields 
    let warehouse = {
        id : document.getElementById('update-warehouse-id').value,  
        location : inputData.get('update-warehouse-location'),
        capacity : inputData.get('update-warehouse-capacity')
        
    }


    fetch(URL + '/update', {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
        }, 
        body : JSON.stringify(warehouse)
    })
    .then((data) => {
        //handle all 100, 200, and 300 status response codes
        //serialize the response into JSON
        return data.json();
    })
    .then((warehouseJson) => {      //handles the promise returned by data.json

        //add updated warehouse to our table
        updateWarehouseInTable(warehouseJson);

        // Close the modal
         $('#editWarehouseModal').modal('hide');
    })
    .catch((error) => {
        //handle all 400 and 500 status response codes
        console.error(error);
    })

});


document.getElementById('delete-warehouse-form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    // get the data from the form since all the fields are disabled and FormData wont capture them
    let warehouseId = document.getElementById('delete-warehouse-id').value;
    let warehouseLocationOnForm = document.getElementById('delete-warehouse-location').value;
    let warehouseCapacityOnForm = document.getElementById('delete-warehouse-capacity').value;
    

    let warehouse = {
        id : warehouseId,
        location : warehouseLocationOnForm,
        capacity : warehouseCapacityOnForm
    }

    fetch(URL + '/trash', {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(warehouse)
    })
    .then((data) => {

        //delete request returns no-content
        //check that the response we get back is a 204 - No Content and then we can delete it
        if(data.status === 204) {

            //removes a warehouse from the table
            removeWarehouseFromTable(warehouse);

            // Close the modal
         $('#deleteWarehouseModal').modal('hide');

            //RESET!
            resetAllForms();
        }
    })
    .catch((error) => {
        console.error(error);
    })
});

function updateWarehouseInTable(warehouse) {
    document.getElementById('TR' + warehouse.id).innerHTML = `
    <td style="display: none;">${warehouse.id}</td>    
    <td>${warehouse.location}</td>
    <td>${warehouse.capacity}</td>
    <td><button class="btn btn-primary" id="editButton" onclick="activateEditForm(${warehouse.id})">Edit</button></td>
    <td><button class="btn btn-primary" id="deleteButton" onclick="activateDeleteForm(${warehouse.id})">Delete</button></td>
    `;
}

//bring up the edit form!!!!
function activateEditForm(warehouseId) {
    // find the warehouse and its <tr> that needs to be edited
    for(let w of allWarehouses) {
        if(w.id === warehouseId) {
            document.getElementById('update-warehouse-id').value = w.id;
            document.getElementById('update-warehouse-location').value = w.location;
            document.getElementById('update-warehouse-capacity').value = w.capacity;
        }

    }

    
    // Open the edit modal
    $('#editWarehouseModal').modal('show');
    

}

function activateDeleteForm(warehouseId) {
    // find the warehouse and its <tr> that needs to be deleted

    for(let w of allWarehouses) {
        if(w.id === warehouseId) {
            document.getElementById('delete-warehouse-id').value = w.id;
            document.getElementById('delete-warehouse-location').value = w.location;
            document.getElementById('delete-warehouse-capacity').value = w.capacity;
        }

    }

    // Open the delete modal
    $('#deleteWarehouseModal').modal('show');

}

function removeWarehouseFromTable(warehouse) {
    //removing the <tr> tag from the table when a warehouse gets deleted
    const element = document.getElementById('TR' + warehouse.id);
    element.remove();
}


//RESET!!! 
function resetAllForms() {

    //CLEARS DATA FROM ALL FORMS
    document.getElementById('new-warehouse-form').reset();
    document.getElementById('update-warehouse-form').reset();
    document.getElementById('delete-warehouse-form').reset();

}
