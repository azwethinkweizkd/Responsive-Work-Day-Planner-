//display the current day for the calendar

$(function () {
  // Write all of the jquery inside this function

  // VARIABLE DECLARATIONS

  // Display the date to the user
  // First grab the element where we first want it displayed
  let currentDay = $("#currentDay");
  //   console.log(currentDay);

  //Display the current date in the element in the header
  currentDay.text(moment().format("dddd MMM Do"));

  //Currently I am able to write text in the area, but not capturing the day and also not storing in local stoarge

  //Dynamically color time blocks based off time of day

  //FUNCTIONS
  //function will be responsible for checking time and determining what class to add - passt, present, or future
  function checkTime() {
    //grab current hour using moment js
    let currentHour = moment().hours();
    // console.log(currentHour);

    //need to grab the block hour from the HTML
    //loop through block hours
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      //   console.log(typeof blockHour);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });

    //check the current hour against block hour
  }
  checkTime();
  //EVENT HANDLERS
  $(".saveBtn").on("click", function () {
    //need to capture information that the use has inputed. and we need to store that info into local storage

    //Need to capture the value of that input and need to know what time block it is attached to

    let value = $(this).siblings(".description").val();
    // console.log(value);
    let time = $(this).parent().attr("id");
    // console.log(time);

    localStorage.setItem(time, value);
  });

  //display the items that are in local storage into the time blocks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
