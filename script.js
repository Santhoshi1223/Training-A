// const employees = [
//     {
//         empId: 1,
//         empName: "Jogeshwar Rao",
//         empCompany: "Google",
//         empSalary: 80000,
//         empAddress: {
//             empCity: "Hyderabad",
//             empArea: "Madhapur"
//         }
//     },
//     {
//         empId: 2,
//         empName: "Phanindra",
//         empCompany: "Aj pvt sols",
//         empSalary: 90000,
//         empAddress: {
//             empCity: "Banglore",
//             empArea: "Rameshwar Nagar"
//         }
//     },
//     {
//         empId: 3,
//         empName: "Sabitha",
//         empCompany: "San's Sols",
//         empSalary: 100000,
//         empAddress: {
//             empCity: "Mumbai",
//             empArea: "Bay Street"
//         }
//     },
//         {
//             empId: 4,
//             empName: "Suneetha",
//             empCompany: "Amazon",
//             empSalary: 100000,
//             empAddress: {
//                 empCity: "Hyderabad",
//                 empArea: "Banjara Hills"
//             }
//         },
//         {
//             empId: 5,
//             empName: "Rama Raju",
//             empCompany: "Flipkart",
//             empSalary: 90000,
//             empAddress: {
//                 empCity: "Pune",
//                 empArea: "Narsingi"
//             }
//         }
// ];

// function generateTable(data) {
//     let table = `<table>
//                     <thead>
//                         <tr>
//                             <th>Emp ID</th>
//                             <th>Emp Name</th>
//                             <th>Emp Company</th>
//                             <th>Emp Salary</th>
//                             <th>Emp City</th>
//                             <th>Emp Area</th>
//                         </tr>
//                     </thead>
//                     <tbody>`;

//     data.forEach(emp => {
//         table += `<tr>
//                     <td>${emp.empId}</td>
//                     <td>${emp.empName}</td>
//                     <td>${emp.empCompany}</td>
//                     <td>$${emp.empSalary.toLocaleString()}</td>
//                     <td>${emp.empAddress.empCity}</td>
//                     <td>${emp.empAddress.empArea}</td>
//                   </tr>`;
//     });

//     table += `</tbody></table>`;

    
//     document.getElementById("table-container").innerHTML = table;
// }


// document.addEventListener("DOMContentLoaded", () => {
//     generateTable(employees);
// });



document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Username validation (!empty)
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username cannot be empty.";
        isValid = false;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Email validation (@, !empty)
    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email with '@'.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation (length = 6)
    if (password.length !== 6) {
        document.getElementById("passwordError").textContent = "Password must be exactly 6 characters.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Confirm Password validation (must match password, !empty)
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Confirm password cannot be empty.";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    // Show success alert if all validations pass
    if (isValid) {
        alert("Form is submitted successfully");
        document.getElementById("signupForm").reset();
    }
});
