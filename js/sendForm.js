function sendToGoogle() {
    let nameField = $('#name').val()
    //let emailField = 

    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdPg0_xFoW2It9UBZv40wA8aPTwR05u9MzUuszlx2QZf3EM1Q/formResponse",
        data: {
            "entry.352931399": nameField,
        },
        type: "POST",
        dataType: "xml",
        success: function (message) {
            $('#formContact').trigger('reset')
        }
    })

    return false;
}