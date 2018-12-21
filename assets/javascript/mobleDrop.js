//this code control the drop down for mobile
$(document).ready(function () {
    $(document).on("click", "#mbbtn", function () {
        if ($(this).attr("drop") == "0") {
            $("#mbbtn").attr("drop", "1");
            $("#navDrop").addClass("show");
        }
        else {
            $(this).attr("drop", "0");
            $("#navDrop").removeClass("show");
        }

    })
})