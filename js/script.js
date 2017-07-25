
$(function() {

// choose select .onclick
  $('.dropdown').on('change', function(){
     event.preventDefault();

     
// header collapse
    $('.headercontainer').addClass('headercollapse').removeClass('.headercontainer');
    $('.logo').addClass('logocollapse').removeClass('.logo');
    $('.selectionchoice').addClass('selectioncollapse').removeClass('.selectionchoice');
    
// loader
    $('.loader').show();


 // json fetch this is where the 12 stories will come from with jquery get value from select field   
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
  // only want 12 stories
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
  });
  })
});