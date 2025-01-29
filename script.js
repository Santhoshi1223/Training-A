const employees = [
    {
        empId: 1,
        empName: "Jogeshwar Rao",
        empCompany: "Google",
        empSalary: 80000,
        empAddress: {
            empCity: "Hyderabad",
            empArea: "Madhapur"
        }
    },
    {
        empId: 2,
        empName: "Phanindra",
        empCompany: "Amazon",
        empSalary: 90000,
        empAddress: {
            empCity: "Banglore",
            empArea: "Rameshwar Nagar"
        }
    },
    {
        empId: 3,
        empName: "Sabitha",
        empCompany: "Aj pvt sols",
        empSalary: 100000,
        empAddress: {
            empCity: "Mumbai",
            empArea: "Bay Street"
        }
    },
        {
            empId: 4,
            empName: "Suneetha",
            empCompany: "San's Sols",
            empSalary: 100000,
            empAddress: {
                empCity: "Hyderabad",
                empArea: "Banjara Hills"
            }
        },
        {
            empId: 5,
            empName: "Rama Raju",
            empCompany: "Flipkart",
            empSalary: 90000,
            empAddress: {
                empCity: "Pune",
                empArea: "Narsingi"
            }
        }
];

function generateTable(data) {
    let table = `<table>
                    <thead>
                        <tr>
                            <th>Emp ID</th>
                            <th>Emp Name</th>
                            <th>Emp Company</th>
                            <th>Emp Salary</th>
                            <th>Emp City</th>
                            <th>Emp Area</th>
                        </tr>
                    </thead>
                    <tbody>`;

    data.forEach(emp => {
        table += `<tr>
                    <td>${emp.empId}</td>
                    <td>${emp.empName}</td>
                    <td>${emp.empCompany}</td>
                    <td>$${emp.empSalary.toLocaleString()}</td>
                    <td>${emp.empAddress.empCity}</td>
                    <td>${emp.empAddress.empArea}</td>
                  </tr>`;
    });

    table += `</tbody></table>`;

    
    document.getElementById("table-container").innerHTML = table;
}


document.addEventListener("DOMContentLoaded", () => {
    generateTable(employees);
});

