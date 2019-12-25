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
                    <td>${data.userInfo[i].id}</td>
                    <td>${data.userInfo[i].name}</td>
                    <td>${data.userInfo[i].surname}</td>
                    <td>${data.userInfo[i].country}</td>
                    <td>${data.userInfo[i].city}</td>
                    <td>${data.userInfo[i].dateOfBirth}</td>
                    <td>${data.userInfo[i].gender}</td>
                    <td>
                        <button class="btn btn-success" type="submit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        <button class="btn btn-danger" type="submit"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                `
            }

            // var name = document.getElementById('name').value;
            // var surname = document.getElementById('name').value;
            // var country = document.getElementById('name').value;z
            // var city = document.getElementById('name').value;
            // var birthday = document.getElementById('name').value;
            // var gender = document.getElementById('name').value;

            $(document).on('click', '#submit', function() {
                let usersArray = [];
                var info = document.getElementById('info');
                usersArray.push({
                    data,
                    name: info[0].value,
                    surname: info[1].value,
                    country: info[2].value,
                    city: info[3].value,
                    dateOfBirth: info[4].value,
                    gender: info[5].value,
                });
                localStorage.setItem('data', JSON.stringify(usersArray));
                const users = JSON.parse(localStorage.getItem('data'));

                for (let i = 0; i < users[0].length; i++) {
                    let tr2 = document.createElement('tr');
                    tbody.appendChild(tr2);
                    tr2.innerHTML += `
                    <td>${2}</td>
                    <td>${users[0].name}</td>
                    <td>${users[0].surname}</td>
                    <td>${users[0].country}</td>
                    <td>${users[0].city}</td>
                    <td>${users[0].dateOfBirth}</td>
                    <td>${users[0].gender}</td>
                    <td>
                        <button class="btn btn-success" type="submit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        <button class="btn btn-danger" type="submit"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                `
                }
            });
        }
    });
});
