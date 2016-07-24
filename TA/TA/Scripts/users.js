$(document).ready(function () {

    var editbtn = '<a style="cursor: pointer;" class=\"command-edit\" data-row-id={ID}><span class=\"fa fa-pencil-square-o\"></span></a>'

    var grid = $("#Users").bootgrid({
        ajax: true,
        url: "/User/List",
        formatters: {
            "edit": function (column, row) {
                return editbtn.replace('{ID}', row.Id);
            }
        }
    }).on("loaded.rs.jquery.bootgrid", function () {
        grid.find(".command-edit").on("click", function (e) {
            alert("You pressed edit on row: " + $(this).data("row-id"));
            $('#EditUserModal').modal().show();
        }).end();
    });
});