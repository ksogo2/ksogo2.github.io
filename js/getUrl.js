$(function () {
  $("#pullDown1").change(function() {
    alert("test 0");
    if ($(this).val() != '') {
      //window.location.href = $(this).val();
    }
  })
  $("#testPullDown").change(function() {
    if ($(this).val() != '') {
      var selectedVal = $(this).val();
      $.getJSON("data/starting_station.json", function(json){
        $(json.megurin).each(function(){
          if(this.name == selectedVal){
            window.location.href = "map.html?megurin=" + this.name;
            //$(".testArea").append(this.name + "," + this.latitude + "," + this.longitude + "<br>");
          }
        });
      });
    }
  })
});