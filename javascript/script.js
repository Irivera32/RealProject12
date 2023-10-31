
$(document).ready(function(){
  $(".btn2").mousedown(function(){
    $(this).css('background-color', 'green')

});
});

$(document).ready(function(){
  $(".btn").mousedown(function(){
    $(this).css('background-color', 'red');


  
    })
  })
    
  
  $(document).ready(function(){
    $(".btn2").click(function(){
      $(".quiz").append("<p>That is Correct</p>")
    })
  });

  $(document).ready(function(){
    $(".btn").click(function(){
      $(".quiz").append("<p>That is Incorrect</p>")
    })
  });

  
     







var disableButton = (e) => {
  console.log("buttonPressed");
  $('.btn').prop('disabled', true);
};

$(document).on('click', '.btn', disableButton);




var disableButton = (e) => {
  console.log("buttonPressed");
  $('.btn2').prop('disabled', true);
};

$(document).on('click', '.btn2', disableButton);


var disableButton = (e) => {
  console.log("buttonPressed");
  $('.btn').prop('disabled', true);
};

$(document).on('click', '.btn2', disableButton);





var disableButton = (e) => {
  console.log("buttonPressed");
  $('.btn2').prop('disabled', true);
};

$(document).on('click', '.btn', disableButton);




















