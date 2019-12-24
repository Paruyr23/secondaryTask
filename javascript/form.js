$(document).ready(function() {
    $.ajax({
        url: 'json/info.json',
        data:'userInfo',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            let tbody = document.getElementById("table");
            for (let i = 0; i < data.userInfo.length; i++) {
                let tr = document.createElement('tr');
                tbody.appendChild(tr);
                tr.innerHTML += `
                    <td>${data.userInfo[i].name}</td>
                    <td>${data.userInfo[i].surname}</td>
                    <td>${data.userInfo[i].country}</td>
                    <td>${data.userInfo[i].city}</td>
                    <td>${data.userInfo[i].dateOfBirth}</td>
                    <td>${data.userInfo[i].gender}</td>
                    <td>
                        <button class="btn btn-success" type="submit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        <button class="btn btn-danger" type="reset"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                `
            }
        }
    });
});
