function displayMessage(type, msg) {
  const markup = `<div class="alert alert--${type}">${msg}</div>`
  $("body").prepend(markup)
  setTimeout(() => {
    $(".alert").remove()
  }, 3000)
}

$(document).ready(function () {
  $("form").submit(function (event) {
    var data = {}
    $(".form-input").each(function () {
      if (this.value) {
        data[this.id] = this.value
      }
    })

    $.ajax({
      type: "POST",
      url: `/api/v1/${$(".form-submit").attr("id")}`,
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json",
    })
      .done(function (data) {
        displayMessage("success", "yep")
        $(".form-input").val("")
      })
      .fail(function (error) {
        displayMessage("error", error.responseJSON.message)
      })

    event.preventDefault()
  })
})
