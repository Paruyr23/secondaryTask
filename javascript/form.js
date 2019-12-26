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
        $("a").last().addClass( "nav-link active" );
        $("#messages").addClass( "active" );
        $("#edit").removeClass( " active" );
        $("a").first().removeClass("active");
    };

    function addTable (arr) {
        for (let i = 0; i < arr.length; i++) {
            const tr = document.createElement('tr');
            tr.setAttribute('id',`${i + 1}`);
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
                    <button class="btn btn-success button-edit" type="button" value="edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    <button class="btn btn-danger button-delete" type="button" value="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
                `
        }
    }

    function deleteRow(row) {
        document.getElementById('mainTable').deleteRow(row);
    }
    function tableclick(del) {
        if(!del)
            del = window.event;

        if(del.target.value === "delete")
            deleteRow( del.target.parentNode.parentNode.rowIndex );
    }
    document.getElementById('mainTable').addEventListener('click',tableclick,false);


    console.log(localStorage.getItem('data'))

    $(document).on("click", ".button-edit", function() {
        function change()
        {
            var elem = document.getElementById("add");
            if (elem.value === "Add") elem.value = "Update";
            else elem.value = "Update";
        }
                $("a").last().removeClass("active");
                $("#messages").removeClass("active");
                $("#edit").addClass("active");
                $("a").first().addClass("active");
    });
});
