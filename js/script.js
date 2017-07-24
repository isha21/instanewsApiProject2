// this is pseudo code to undrstand what needs to be done for the java script to be delted later
// choose select .onclick
// header collapse
// .empty will empty data
// event prevent default
// loader
// json fetch this is where the 12 stories will be look up get jquery get value from select field
// then fetch ajax make sure only getting 12 stories in a picture use method.filter
// then put into list in html
// append data
// header dissappear
// .fail
// there needs to be a function for each step above .append .fail etc


// $(function() {


  $('.dropdown').on('change', function(){
    //  event.preventDefault();

     

    $('.headercontainer').addClass('headercollapse').removeClass('.headercontainer');
    $('.logo').addClass('logocollapse').removeClass('.logo');
    $('.selectionchoice').addClass('selectioncollapse').removeClass('.selectionchoice');
    // $('.selector').addClass('selectorcollapse').removeclass('selector');

   

    $('.loader').show();

  var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
      url += '?' + $.param({
  'api-key': '400551b6bccb49268e4376e6cb6180bc'
});

$.ajax({
  url: url,
  method: 'GET',

})

.done(function(result) {
  console.log(result);
})
.fail(function(err) {
  throw err;
    });
  })
// });