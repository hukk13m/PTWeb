// Load XML file (dataset) via AJAX and render into the provided tbody element
function load_customers_from_external_xml(datasetPath, body_element) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", datasetPath, true);
    xhr.overrideMimeType("text/xml");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                var xmlDoc = xhr.responseXML;
                if (!xmlDoc && xhr.responseText) {
                    xmlDoc = new DOMParser().parseFromString(
                        xhr.responseText,
                        "application/xml",
                    );
                }
                if (xmlDoc) {
                    render_xml2html(xmlDoc, body_element);
                }
            } else {
                body_element.innerHTML =
                    '<tr><td colspan="4">Failed to load dataset: ' +
                    xhr.status +
                    "</td></tr>";
            }
        }
    };
    xhr.send();
}

function render_xml2html(xmlDoc, body_element) {
    // clear existing rows
    body_element.innerHTML = "";
    var student_tags = xmlDoc.getElementsByTagName("student");
    for (var i = 0; i < student_tags.length; i++) {
        var st = student_tags[i];
        var id =
            (st.getElementsByTagName("id")[0] &&
                st.getElementsByTagName("id")[0].textContent) ||
            "";
        var name =
            (st.getElementsByTagName("name")[0] &&
                st.getElementsByTagName("name")[0].textContent) ||
            "";
        var birthday =
            (st.getElementsByTagName("birthday")[0] &&
                st.getElementsByTagName("birthday")[0].textContent) ||
            "";
        var gender =
            (st.getElementsByTagName("gender")[0] &&
                st.getElementsByTagName("gender")[0].textContent) ||
            "";

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.textContent = id.trim();
        td2.textContent = name.trim();
        td3.textContent = birthday.trim();
        td4.textContent = gender.trim();

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        body_element.appendChild(tr);
    }
}
