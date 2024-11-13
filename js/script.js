// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

const form= document.getElementById('addForm')
const list = document.getElementById('employees')

const $ = (id) => document.getElementById(id)





// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
const employeeCountOutput = document.getElementById('empCount') 
let employeeCount = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES

    const id = $('id').value
    const name = $('name').value
    const extension = $('extension').value
    const email = $('email').value
    const department = $('department').value


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let row = list.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    row.insertCell().appendChild(document.createTextNode(id))
    row.insertCell().appendChild(document.createTextNode(name))
    row.insertCell().appendChild(document.createTextNode(extension))
    row.insertCell().appendChild(document.createTextNode(email))
    row.insertCell().appendChild(document.createTextNode(department))


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    const deleteCell = row.insertCell(); 
    const deleteButton = document.createElement('button')
    
    deleteButton.textContent = 'X'
    deleteButton.className = 'btn btn-danger btn-sm float-end delete'
    deleteButton.onclick = () => deleteEmployee(row)
    deleteCell.appendChild(deleteButton)

    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++
    updateEmployeeCount()

})

// DELETE EMPLOYEE


function updateEmployeeCount() { 
    employeeCountOutput.textContent = employeeCount

 }

 // Function to delete an employee 
 function deleteEmployee(row) 
 { 
    if (confirm('Are you sure you want to delete this employee?')) {
         list.deleteRow(row.rowIndex);
         // Decrement employee count and update the output
          employeeCount-- 
          updateEmployeeCount()
        }

}
