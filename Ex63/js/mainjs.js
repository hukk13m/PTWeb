function load_data(emps, emp_body) {
    for (i = 0; i < emps.length; i++) {
        emp = emps[i];
        tr = create_tr(emp);
        emp_body.appendChild(tr);
    }
}
function create_tr(emp) {
    tr = document.createElement("tr");
    td_name = document.createElement("td");
    td_name.innerHTML = emp.Name;
    tr.appendChild(td_name);
    td_email = document.createElement("td");
    td_email.innerHTML = emp.Email;
    tr.appendChild(td_email);
    td_gender = document.createElement("td");
    td_gender.innerHTML = emp.Gender;
    tr.appendChild(td_gender);
    td_birthday = document.createElement("td");
    td_birthday.innerHTML = emp.Birthday;
    tr.appendChild(td_birthday);
    td_hobby = document.createElement("td");
    td_hobby.innerHTML = emp.Hobbies;
    tr.appendChild(td_hobby);
    td_color = document.createElement("td");
    td_color.innerHTML = emp.Color || emp.Colors || "";
    tr.appendChild(td_color);
    return tr;
}
function create_new_emp() {
    Name = document.getElementById("Name").value;
    Email = document.getElementById("Email").value;
    Gender = document.querySelector('input[name="Gender"]:checked').value;
    Birth_day = document.getElementById("birth_date").value;
    Birth_month = document.getElementById("birth_month").value;
    Birth_year = document.getElementById("birth_year").value;
    Birthday = Birth_day + "/" + Birth_month + "/" + Birth_year;

    Hobbies = [];
    if (document.getElementById("shopping").checked) Hobbies.push("Shopping");
    if (document.getElementById("tourism").checked) Hobbies.push("Tourism");
    if (document.getElementById("chat").checked) Hobbies.push("Chat");
    if (document.getElementById("read").checked) Hobbies.push("Reading");
    if (document.getElementById("music").checked) Hobbies.push("Music");

    color_element = document.querySelector('input[name="color"]:checked');
    Colors = color_element.value;

    emp = {
        Name: Name,
        Email: Email,
        Gender: Gender,
        Birthday: Birthday,
        Hobbies: Hobbies.join(", "),
        Colors: Colors,
    };
    emp_body = document.getElementById("bodyemp");
    tr = create_tr(emp);
    emp_body.appendChild(tr);
}
function reset_form() {
    document.querySelector("form").reset();
    document.getElementById("Name").focus();
}
