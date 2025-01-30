//Task: Take a array of employee objects, where each object contains properties such as empid, empname, empcompany, 
//empsalary and empaddress where empaddress is further having two more properties of object such as empcity and emparea.
//print these properties in the form of a table on the UI by using javascript.
let empDetails = [
    {
    empid:1,
    empname:"Bhavana",
    empcompany:"Microsoft",
    empsalary:1000000,
    empaddress:{
        empcity:"Hyd",
        emparea:"Kompally"
    }   
    },
    {
    empid:2,
    empname:"Dimple",
    empcompany:"Infosys",
    empsalary:900000,
    empaddress:{
        empcity:"Hyd",
        emparea:"Miyapur"
    }
    },
    {
    empid:3,
    empname:"Gitu",
    empcompany:"TCS",
    empsalary:950000,
    empaddress:{
        empcity:"Hyd",
        emparea:"Dulapally"
    }
    },
    {
    empid:4,
    empname:"Prasanna",
    empcompany:"Wipro",
    empsalary:710000,
    empaddress:{
        empcity:"Hyd",
        emparea:"Suchitra"
    }
    },
    {
    empid:4,
    empname:"Akshitha",
    empcompany:"Accenture",
    empsalary:820000,
    empaddress:{
        empcity:"Hyd",
        emparea:"Gachibowli"
    }
    }

];
//console.log(empDetails);
//let x = JSON.stringify(empDetails);
//console.log("JSON object "+x);

function generateTable() {
    const tbody = document.querySelector("#employeeTable tbody");

    empDetails.forEach(emp => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.empid}</td>
            <td>${emp.empname}</td>
            <td>${emp.empcompany}</td>
            <td>${emp.empsalary}</td>
            <td>${emp.empaddress.empcity}</td>
            <td>${emp.empaddress.emparea}</td>
        `;
        tbody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", generateTable);

