
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    var now = moment().format("h A");
    var times = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM",
    "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"];

    $(".Hour").each(function(i){
        $(this).text(moment().hour(i+8).format("h A"))
    })
    console.log(now);
// Past setting
    $('.HourRow').each(function(i) {
        if (times.indexOf(now) > i) {
            $(`#${i}`).addClass("past");
            $(`#save-${i}`).prop('disabled', true);
            $(`#save-${i}`).addClass('past');
            $(`#hour-${i}`).addClass('past');
// present setting
        } else if (times.indexOf(now) == i) {
            $(`#${i}`).addClass('present');
            $(`#save-${i}`).addClass('present');
            $(`#save-${i}`).prop('disabled', false);
            $(`#hour-${i}`).addClass('present');
// future settings
        } else if (times.indexOf(now) < i) {
            $(`#${i}`).addClass('future');
            $(`#save-${i}`).addClass('future');
            $(`#save-${i}`).prop('disabled', false);
            $(`#hour-${i}`).addClass('future');
        }
    });
    
});

//section of click

$("button").on("click", function(){
    $("input, select, textarea").each(function(){
        var value = $(this).val(),
            name = $(this).attr("name");
            localStorage[name]=value;
})});