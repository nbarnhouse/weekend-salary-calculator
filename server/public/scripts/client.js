//Global Variables to store the index of each row and the starting Monthly total.
let currentIndex = 1;
let totalMonthly = 6000;

//Form submission function
function addEmp(event) {
    event.preventDefault();
    //console.log('test');

    // Add form data to the page. 
    var form = document.getElementById("myForm");
    //Variables for the form
    let firstVal = document.querySelector('#firstNameInput').value;
    let lastVal = document.querySelector('#lastNameInput').value;
    let idVal = document.querySelector('#idInput').value;
    let titleVal = document.querySelector('#titleInput').value;
    let salaryVal = document.querySelector('#annualSalaryInput').value;

    // Add The employee Data to the page
    let employeeTable = document.querySelector('#employeeData');

       employeeTable.innerHTML += `
            <tr>
                <td>${firstVal}</td>
                <td>${lastVal}</td>
                <td>${idVal}</td>
                <td>${titleVal}</td>
                <td>$${salaryVal}</td>
                <td><button onclick="this.closest('tr').remove()">Delete</button></td>
            </tr>
        `;
        currentIndex ++;
        form.reset();

    //Bring in Monthly Total to the page
    let totalIncomeMonthly = document.querySelector('#TotalMonthly');

    let footerElement = document.querySelector('#footerElement');
    totalMonthly += salaryVal /12;

    totalMonthly = totalMonthly.toFixed(2);

    if (totalMonthly > 20000) {
        footerElement.classList.add('over-budget');
    }
    
    totalIncomeMonthly.innerHTML = `${totalMonthly}`;
    console.log(`Current Index: ${currentIndex}`)
    

};

 