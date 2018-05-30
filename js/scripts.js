$(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    $(".personalName").text(person1Input);
    $("#letter").show();
    $("#formOne").hide();
    event.preventDefault();
  });
});
