function load_customers_from_external_xml(dataset, body_employee, filterRole) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset, true);
    xhr.responseType = "document";
    xhr.overrideMimeType("text/xml");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            var xmlDoc = xhr.responseXML;
            if (!xmlDoc && xhr.responseText) {
                xmlDoc = new DOMParser().parseFromString(
                    xhr.responseText,
                    "application/xml",
                );
            }
            if (xmlDoc) {
                render_xml2html(xmlDoc, body_employee, filterRole);
            }
        } else {
        }
    };
    xhr.send();
}

function render_xml2html(xmlDoc, body_employee, filterRole) {
    body_employee.innerHTML = "";
    var employee_tags = xmlDoc.getElementsByTagName("employee");
    for (var i = 0; i < employee_tags.length; i++) {
        var employee_tag = employee_tags[i];
        var employee_role = employee_tag.getAttribute("title");
        if (filterRole && filterRole !== "" && filterRole !== employee_role) {
            continue;
        }
        var employee_id = employee_tag.getAttribute("id");
        var name_tag = employee_tag.getElementsByTagName("name")[0];
        var phone_tag = employee_tag.getElementsByTagName("phone")[0];
        var employee_name = name_tag
            ? name_tag.textContent || name_tag.childNodes[0].nodeValue
            : "";
        var employee_phone = phone_tag
            ? phone_tag.textContent || phone_tag.childNodes[0].nodeValue
            : "";

        var tr = document.createElement("tr");
        var td_id = document.createElement("td");
        var td_role = document.createElement("td");
        var td_name = document.createElement("td");
        var td_phone = document.createElement("td");

        td_id.innerHTML = employee_id;
        td_role.innerHTML = employee_role;
        td_name.innerHTML = employee_name;
        td_phone.innerHTML = employee_phone;

        tr.appendChild(td_id);
        tr.appendChild(td_role);
        tr.appendChild(td_name);
        tr.appendChild(td_phone);
        body_employee.appendChild(tr);
    }
}
