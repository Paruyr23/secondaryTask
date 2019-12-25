$( document ).ready(function() {
    $.ajax({
        url: 'json/info.json',
        data:'userInfo',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            localStorage.setItem('data', JSON.stringify(data.userInfo));
            addTable(data.userInfo);
        }
    });

    document.getElementById( 'add' ).onclick = function(event){
        event.preventDefault();
        const data = JSON.parse(localStorage.getItem('data'));
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var country = document.getElementById('country').value;
        var city = document.getElementById('city').value;
        var birthday = document.getElementById('birthday').value;
        var gender = $('input[name=inlineRadioOptions]:checked', '#info').val();
        var user = {
            name: name,
            surname: surname,
            country: country,
            city: city,
            dateOfBirth: birthday,
            gender:gender
        };
        data.push(user);
        localStorage.setItem('data', JSON.stringify(data));
        if(data) {
            $('#table').html('');
            addTable(data);
        }
        $('#info')[0].reset();
    };

    function addTable (arr) {
        for (let i = 0; i < arr.length; i++) {
            const tr = document.createElement('tr');
            $('#table').append(tr);
            tr.innerHTML += `
                <td>${i + 1}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].surname}</td>
                <td>${arr[i].country}</td>
                <td>${arr[i].city}</td>
                <td>${arr[i].dateOfBirth}</td>
                <td>${arr[i].gender}</td>
                <td>
                    <button class="btn btn-success" type="submit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    <button class="btn btn-danger" type="submit" id="${i + 1}" onclick="removeEl(${i + 1})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
                `
        }
    }


    function removeEl(id){
        console.log(id)
    }
});