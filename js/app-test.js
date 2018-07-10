/*
  Please add all Javascript code to this file.
*/

// Mashable: http://mashable.com/stories.json
// Reddit: https://www.reddit.com/top.json
// Digg: http://digg.com/api/news/popular.json

// $(function(){

//   var sourceOneURL = 'http://mashable.com/stories.json'
//   var sourceTwoURL = 'https://www.reddit.com/top.json' 
//   var sourceThreeOneURL = 'http://digg.com/api/news/popular.json' 


//   function init(){

//     // $('#view-sourceOne').on('click', getAll)
//     // $('#view-sourceTwo').on('click', getAll)
//     // $('#view-sourceThree').on('click', getAll)
//     // $('#new-book').on('click', renderNew)
//   }

//   init();



//   $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
//   	function(results){

//   console.log(results);

//   results.data.feed.forEach(
//   	function(result){
//     // $(".featuredImage").append("<img src="+result.media.images.url+"/>")	
//     $(".articleContent").append("<h3>"+result.content.title+"</h3>")
//   })
// })



//   $(function(){
// 	var diggURL = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json'
// 	var reditURL = 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json'
// 	var mashURL = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json'	
//   function init(){
//     $('#digg').on('click', digg)
//     $('#redit').on('click', redit)
//     $('#mash').on('click', mash)

//   }

//   init();


//   function digg(){
//     $.ajax({
//       method: 'GET',
//       url: diggURL,
//       data: { format: 'json' },
//       success: renderAll,
//     })
//   }

//   function renderAll(article){
//     var $content = $('#main').empty();
//     article.forEach(function(article) {
// 		var $articleDiv = $('<article />').addClass('article').appendTo($content)
// 			$('<img />').attr('src', article.image).addClass('featuredImage').appendTo($articleDiv)
// 			$('<h3 />').text(article.title).appendTo($articleDiv)
// 			$('<h3 />').text(article.title).appendTo($articleDiv)
// 			$('<img />').attr('src', article.image).appendTo($articleDiv)

//       // $articleDiv.on('click', function() {
//       //   getOne(article.id)
//       // })
//     })

//   }

  // function getOne(id){
  //   var showRouteForBook = baseURL + '/' + id
  //   $.ajax({
  //     method: 'GET',
  //     url: showRouteForBook,
  //     success: renderOne,
  //   })
  // }

  // function renderOne(book){
  //   var $content = $('#content').empty();
  //   var $bookDiv = $('<div />').addClass('book').appendTo($content)
  //   $('<h3 />').text(book.title).appendTo($bookDiv)
  //   $('<img />').attr('src', book.image).appendTo($bookDiv)
  //   $('<p />').text(book.author).appendTo($bookDiv)
  //   $('<p />').text(book.release_date).appendTo($bookDiv)
  // }

  // function renderNew(){
  //   var $content = $('#content').empty();

  //   var $form = $('<form>').appendTo($content)
  //   $form.on('submit', postNew)
  //   // add your event listener!
  //   $('<h2>').text('New Book').appendTo($form);

  //   $('<label>').text('title').appendTo($form);
  //   $('<input>', {name: 'title'}).appendTo($form);

  //   $('<label>').text('image').appendTo($form);
  //   $('<input>', {name: 'image'}).appendTo($form);

  //   $('<label>').text('author').appendTo($form);
  //   $('<input>', {name: 'author'}).appendTo($form);

  //   $('<label>').text('Release Date').appendTo($form);
  //   $('<input>', {name: 'release_date'}).appendTo($form);

  //   $('<button>').text('Create Book!!!!!').appendTo($form);

  // }


  // function postNew(event){
  //   console.log(event)
  //   event.preventDefault()
  //   console.log('title element', event.target.title.value)
  //   console.log('image element', event.target.image.value)
  //   console.log('Hello World')
  //   var dataToBeSent = {
  //     title: event.target.title.value,
  //     image:  event.target.image.value,
  //     author: event.target.author.value,
  //     release_date:  event.target.release_date.value
  //   }
  //      $.ajax({
  //     method: 'POST',
  //     url: baseURL,
  //     data: dataToBeSent,
  //     success: getAll
  //   }) 

  // }

// })




$(document).ready(function(){




var data;

$.ajax({
url:'https://api.gilt.com/v1/sales/active.json?apikey=7c191e4dce1f581544c7c5775646e9e099dc9cd3e8e75da130fbf37e5af570eb',
success:function(json){
data = json;

for(i=0; i< 50; i++)

{

$body = $('body');
var soul = `<section id="main" class="container">`;
var spirit = `<article class="article">`;
var img =  $('<img>').attr('src', data.sales[i].image_urls['161x110'][0].url);






var item = $(spirit)
.append(`<section class="featuredImage">`+ img)   
.append("<h3>" + json.sales[i].name + "</h3>")
.append(json.sales[i].description.substring(0, 100) + "...") 
.append("<br><i>Store: " + json.sales[i].store + "</i>");


var goto = $("<a>").attr('href', data.sales[0].sale_url).text('Go to Sale');

item.append(goto);

$body.append(item);

}
//end for
}
});



});


          // <article class="article">
          //   <section class="featuredImage">
          //     <img src="images/article_placeholder_1.jpg" alt="" />
          //   </section>
          //   <section class="articleContent">
          //       <a href="#"><h3>Test article title</h3></a>
          //       <h6>Lifestyle</h6>
          //   </section>
          //   <section class="impressions">
          //     526
          //   </section>
          //   <div class="clearfix"></div>
          // </article>


// var pet = 'cat';
// var name = 'sean';
// var numOfPets = 482;
// var catLady = true;




// var intro = 'hi my name is ' + name + 'and I have' ;

// var intro2 = `my name is ${name} and I have ${numOfPets} ${pet}s`

  





// var data;

// $.ajax({
//   url:'https://api.gilt.com/v1/sales/active.json?apikey=ce2dc5a5fefb561750c9a7f76976ef3f29a3bb37de3a2b58a4f5bd868e61e070',
//   success:function(json){
//    data = json;
//     for(i=0; i< 50; i++){
//      $body = $('body'); 
//      var img =  $('<img>').attr('src', data.sales[i].image_urls['161x110'][0].url);
//      var item = $("<li>").append(img)
//                          .append("<h3>" + json.sales[i].name + "</h3>")
//                          .append(json.sales[i].description.substring(0, 100) + "...") 
//                          .append("<br><i>Store: " + json.sales[i].store + "</i>");  
//      var goto = $("<a>").attr('href', data.sales[0].sale_url).text('Go to Sale');
//      item.append(goto);
//      $body.append(item); 
//    }//end for
//   }
// });
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// $(document).ready(function(){
  
//   var urlSearch = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
//   var term = "rainbow";
//   var urlData = urlSearch + term;
//   $.get(urlData, function(data){
    
//     var title;
//     var description;
//     var link;
//     for (var i = 0; i<data[1].length; i++) {
//       title = $("<h1></h1>").text(data[1][i]);
//       description = $("<p></p>").text(data[2][i]);
//       link = $("<a></a>").text('link').attr("href", data[3][i]);
      
//       content = $('body').append(title, description, link);
      
//     }
      
      
    
//   }, 'jsonp');
   
// });