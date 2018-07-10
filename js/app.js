$(function(){
//Variables
  
  var sourceReddit = 'https://www.reddit.com/top.json' 
  var sourceDigg = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json' 
  var sourceMash = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json'
  var name = 'sean';
  var numOfPets = 2;
  var pet = 'cat';
  var sex = 'male';
  var pinky = `my name is ${name} and I have ${numOfPets} ${pet}s.`; 
  var full = `my name is ${name} and I have ${numOfPets} ${pet}s they are ${sex}s.`;  

//Fuction Init
//
  function init(){
    window.onload = getDigg;
    $('#digg').on('click', getDigg)
    $('#reddit').on('click', getReddit)
    $('#mash').on('click', getMash)    
  }

  init();

//Digg

    function getDigg(){
    $.ajax({
      method: 'GET',
      url: sourceDigg,
      data: { format: 'json' },
      success: renderDigg,
    })
  }

    function renderDigg(json){
    var $content = $('#main').empty();
    var data;
     data = json;
      for(i=0; i< 50; i++){ 
       var itemDigg = $("<li>").append(pinky);
       $content.append(itemDigg); 
     }//end for
  }

//Reddit

    function getReddit(){
    $.ajax({
      method: 'GET',
      url: sourceReddit,
      data: { format: 'json' },
      success: renderReddit,
    })
  }
    function renderReddit(json){
    var data;
    var $content = $('#main').empty();
     data = json;
      for(i=0; i< 50; i++){ 
       var itemReddit = $("<li>").append(full);
       $content.append(itemReddit); 
     }//end for
  }

//Masable
    function getMash(){
    $.ajax({
      method: 'GET',
      url: sourceMash,
      data: { format: 'json' },
      success: renderMash,
    })
  }

    function renderMash(json){ 
    var data;
    var $content = $('#main').empty();
     data = json;
      for (var i=0; i<50; i++) { 
      // var imgMash =  $('<img>').attr('src', data.new[i].responsive_images.url);
      var titleMash = $("<h3>" + json.new[i].title + "</h3>");
      // var contentMash = $("<h6>" + json.new[i].content.plain + "</h6>") 
      // var impMash = $("0"); 
      var $itemMash = $('<article />').addClass('article').appendTo($content)
      // $('<section />').addClass('featuredImage').attr(imgMash).appendTo($itemMash)
      $('<section />').addClass('articleContent').attr(titleMash).appendTo($itemMash)
      // $('<section />').addClass('impressions').attr(impMash).appendTo($itemMash)
      $('<div  />').addClass('clearfix').appendTo($itemMash)
    }

     }//end for     
  })
