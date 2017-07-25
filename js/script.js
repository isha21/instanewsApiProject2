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

  var choice =$('.dropdown').val(),
      url = 'https://api.nytimes.com/svc/topstories/v2/' + choice + '.json';
      url += '?' + $.param({
     'api-key': '400551b6bccb49268e4376e6cb6180bc' });

  
    $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json'
    })

.done(function(data){
  var newsStories  = ''; 
  var results = data.results.filter(function(value){
    return value.multimedia.length >= 5;
  })
  results.splice(12);

 $.each(results, function(key,value){
   var images = value.multimedia[4].url,
       words = value.abstract,
       url = value.url;

       newsStories += '<li class="textpict">';
       newsStories += '<a href=' + url + '>';
       newsStories += '<div class="article" style="background-image: url(' + images + ')">';
       newsStories += '<p class="words" >';
       newsStories += words;
       newsStories += '</p></div></a></li>';    
      });

      $('.stories').html(newsStories)
  })
});