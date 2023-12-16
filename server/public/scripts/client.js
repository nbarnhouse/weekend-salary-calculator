//Global Variables to store the index of each row and the starting Monthly total.
let currentIndex = 1;
let totalMonthly = 6000;

    let totalIncomeMonthly = document.querySelector('#TotalMonthly');
    totalIncomeMonthly.innerHTML = `${totalMonthly}`;

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
    let allSalaries = 0;
    let salaryCells = document.querySelectorAll('#employeeData td:nth-child(5)');

    for (let salaryCell of salaryCells) {
        let salary = parseFloat(salaryCell.textContent.replace('$', ''));
        allSalaries += salary;
    }

    //Divide by 12 to make a monthly cost
    totalMonthly = allSalaries /12;
    //Convert number to 2 decimal places
    totalMonthly = totalMonthly.toFixed(2);

    //Analyze value and apply overbudget css
    let totalIncomeMonthly = document.querySelector('#TotalMonthly');
    totalIncomeMonthly.innerHTML = `${totalMonthly}`;
    let footerElement = document.querySelector('#footerElement');

    if (totalMonthly > 20000) {
        TotalMonthly.classList.add('over-budget');
    } else {
        TotalMonthly.classList.remove('over-budget');
    }
    
    //Add total to DOM
    totalIncomeMonthly.innerHTML = `${totalMonthly}`;
    console.log(`Current Index: ${currentIndex}`)

};

 