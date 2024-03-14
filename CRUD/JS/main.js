var nameId = document.getElementById('name');
var grid = document.getElementById('grid');
var mail = document.getElementById('mail');
var cource = document.getElementById('cource');
var contact = document.getElementById('contact');
var tablebody = document.getElementById('tablebody');
var selectedBody = document.getElementById('selectedBody');
var data;



// Create Data
const addData = () => {

    event.preventDefault();

        if(localStorage.getItem("data") == null){
            data = [];
        }
        else{
            data = JSON.parse(localStorage.getItem("data"));
        }

        var myObj = {
            name : nameId.value,
            grid : grid.value,
            mail : mail.value,
            cource : cource.value,
            contact : contact.value,
        }


        data.push(myObj);

        localStorage.setItem("data", JSON.stringify(data));

        displayData();

        nameId.value = "";
        grid.value = "";
        mail.value = "";
        cource.value = "";
        contact.value = "";

};




// Print Data
const displayData = () => {

    if(localStorage.getItem("data") == null){

        data = [];
        tablebody.innerHTML = `<p>No Data Found</p>`;
    }
    else{

        data = JSON.parse(localStorage.getItem("data"));
        tablebody.innerHTML = "";

        data.forEach((myObj, index) => {

            tablebody.innerHTML += `<tr>
                            <td class="text-light">${index + 1}</td>
                            <td class="text-light">${myObj.name}</td>
                            <td class="text-light">${myObj.grid}</td>
                            <td class="text-light">${myObj.mail}</td>
                            <td class="text-light">${myObj.cource}</td>
                            <td class="text-light">${myObj.contact}</td>
                            <td><button class="bg-warning text-light border-none rounded me-2" onclick="editData(${index})">Edit</button>
                            <button class="bg-danger text-light border-none rounded me-2" onclick="deleteData()">Delete</button>
                            <button class="bg-info text-light border-none rounded me-2" onclick="selectData(${index})">Select</button></td>
                        </tr>`; 

        });
    }
};

document.onload = displayData();



//Update Data
const editData = (index) => {

    if(localStorage.getItem("data") == null){
        data = [];
    }
    else{
        data = JSON.parse(localStorage.getItem("data"));
    }

    nameId.value = data[index].name;
    grid.value = data[index].grid;
    mail.value = data[index].mail;
    cource.value = data[index].cource;
    contact.value = data[index].contact;

    document.querySelector("#submit").onclick = function(){

        data[index].name = nameId.value;
        data[index].grid = grid.value;
        data[index].mail = mail.value;
        data[index].cource = cource.value;
        data[index].contact = contact.value;


        localStorage.setItem("data", JSON.stringify(data));

        displayData();

        nameId.value = "";
        grid.value = "";
        mail.value = "";
        cource.value = "";
        contact.value = "";



    }

};





// Delete Data
const deleteData = (index) => {
    
    if(localStorage.getItem("data") == null){
        data = [];
    }
    else{
        data = JSON.parse(localStorage.getItem("data"));
    }

    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    displayData();

};




// Select Data
var dataStorage = JSON.parse(localStorage.getItem("data"));    
const selectData = (index) => {
    
    if(localStorage.getItem("data") == null){
        data = [];
    }
    else{
        data = JSON.parse(localStorage.getItem("data")); 
    }
    
    
    dataStorage.push(data[index]);
    
    localStorage.setItem("selectList", JSON.stringify(dataStorage));
    
    counterData();
    // selectDisplayData();
    // selectedData();
    
};
const counterData = () => {
    
    counter.innerHTML = dataStorage.length;
    
};
counterData();


// Create Data[Select]
const selectedData = () => {

    event.preventDefault();


        var details;
        if(localStorage.getItem("details") == null){
            details = [];
        }
        else{
            details = JSON.parse(localStorage.getItem("details"));
        }

        var selectMyObj = {
            name : nameId.value,
        }

        details.push(selectMyObj);

};




// Print Data[Select]
const selectDisplayData = () => {

    var data;
    if(localStorage.getItem("data") == null){

        details = [];
        selectedBody.innerHTML = `<p>No Data Found</p>`;
    }
    else{

        data = JSON.parse(localStorage.getItem("data"));
        selectedBody.innerHTML = "";

        data.forEach((selectMyObj, index) => {

            selectedBody.innerHTML += `<tr>
                            <td class="text-dark">${index + 1}</td>
                            <td class="text-dark">${selectMyObj.name}</td>
                        </tr>`; 

        });
    }
};

document.onload = selectDisplayData();
