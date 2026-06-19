function load_customers_from_external_xml(dataset, body_student) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xmlDoc = xhr.responseXML;
            if (!xmlDoc && xhr.responseText) {
                xmlDoc = new DOMParser().parseFromString(
                    xhr.responseText,
                    "application/xml",
                );
            }
            if (xmlDoc) {
                render_xml2html(xmlDoc, body_student);
            }
        } else {
            // handling when data can't be loaded
        }
    };
}

function render_xml2html(xmlDoc, body_student) {
    // clear existing rows
    body_student.innerHTML = "";
    var student_tags = xmlDoc.getElementsByTagName("student");
    for (var i = 0; i < student_tags.length; i++) {
        var student_tag = student_tags[i];
        var id_tag = student_tag.getElementsByTagName("id")[0];
        var name_tag = student_tag.getElementsByTagName("name")[0];
        var birthday_tag = student_tag.getElementsByTagName("birthday")[0];
        var gender_tag = student_tag.getElementsByTagName("gender")[0];

        student_id = id_tag.childNodes[0].nodeValue.trim();
        student_name = name_tag.childNodes[0].nodeValue.trim();
        birthday = birthday_tag.childNodes[0].nodeValue.trim();
        gender = gender_tag.childNodes[0].nodeValue.trim();

        //HTML DOM
        tr = document.createElement("tr");
        td_id = document.createElement("td");
        td_name = document.createElement("td");
        td_birthday = document.createElement("td");
        td_gender = document.createElement("td");

        td_id.innerHTML = student_id;
        var a = document.createElement("a");
        a.href = "../Ex66/student.html?id=" + encodeURIComponent(student_id); //AI
        a.textContent = student_name;
        td_name.appendChild(a);
        td_birthday.innerHTML = birthday;
        td_gender.innerHTML = gender;

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_birthday);
        tr.appendChild(td_gender);
        body_student.appendChild(tr);
    }
}
