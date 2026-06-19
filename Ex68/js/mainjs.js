function load_catalog_from_external_xml(dataset, body_catalog) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            //handling when loading data successfully
            //XML DOM và HTML DOM sẽ xử lý tiếp, AJAX kết thúc nhiệm kỳ
            var xmlDoc = xhr.responseXML;
            if (xmlDoc && xmlDoc.documentElement) {
                render_xml2html(xmlDoc, body_catalog);
            } else {
                console.error("Failed to parse XML");
            }
        } else {
        }
    };
}

function render_xml2html(xmlDoc, body_catalog) {
    var catalog_tags = xmlDoc.getElementsByTagName("CD");
    for (var i = 0; i < catalog_tags.length; i++) {
        var cd_tag = catalog_tags[i];
        var title_tag = cd_tag.getElementsByTagName("TITLE")[0];
        var artist_tag = cd_tag.getElementsByTagName("ARTIST")[0];
        var company_tag = cd_tag.getElementsByTagName("COMPANY")[0];
        var country_tag = cd_tag.getElementsByTagName("COUNTRY")[0];
        var price_tag = cd_tag.getElementsByTagName("PRICE")[0];
        var year_tag = cd_tag.getElementsByTagName("YEAR")[0];

        var title = title_tag && title_tag.textContent;
        var artist = artist_tag && artist_tag.textContent;
        var company = company_tag && company_tag.textContent;
        var country = country_tag && country_tag.textContent;
        var price = price_tag && price_tag.textContent;
        var year = year_tag && year_tag.textContent;

        var tr = document.createElement("tr");
        var td_title = document.createElement("td");
        var td_artist = document.createElement("td");
        var td_company = document.createElement("td");
        var td_country = document.createElement("td");
        var td_price = document.createElement("td");
        var td_year = document.createElement("td");

        td_title.textContent = title;
        td_artist.textContent = artist;
        td_company.textContent = company;
        td_country.textContent = country;
        td_price.textContent = price;
        td_year.textContent = year;

        tr.appendChild(td_title);
        tr.appendChild(td_artist);
        tr.appendChild(td_company);
        tr.appendChild(td_country);
        tr.appendChild(td_price);
        tr.appendChild(td_year);
        body_catalog.appendChild(tr);
    }
}
