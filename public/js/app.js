function displayMessage(type, msg) {
  const markup = `<div class="alert alert--${type}">${msg}</div>`
  $("body").prepend(markup)
  setTimeout(() => {
    $(".alert").remove()
  }, 3000)
}

//Prep Date
var d = new Date()
var month = d.getMonth() + 1
var day = d.getDate()
var dateStr =
  d.getFullYear() +
  "-" +
  (month < 10 ? "0" : "") +
  month +
  "-" +
  (day < 10 ? "0" : "") +
  day

// //TAGGING
// var themeInput = document.querySelector("input[name=themeInput]")
// var peopleInput = document.querySelector("input[name=peopleInput]")
// var authorInput = document.querySelector("input[name=authorInput]")

// tagify = (input) => {
//   new Tagify(input, { whitelist: ["brains", "more brains"] })
// }

$(document).ready(function () {
  //FORM SUBMISSION
  $("#date").val(dateStr)

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
