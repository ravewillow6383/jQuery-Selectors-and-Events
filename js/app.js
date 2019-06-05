function startApp(){

  loadData();
  // dropMenu();

  //   attachListeners();

}

function loadData(){

  const success = hornPic => displayPage(hornPic);

  const failure = error => console.error(error);

  $.get('data/page-1.json', 'json')
    .then(success)
    .catch(failure);
}

function displayPage(hornPic) {

  hornPic.forEach(horn => {
    const $newHorn = $('.photo-template').clone();

    $newHorn.find('h2').text(horn.title);
    $newHorn.find('img').attr('src', horn.image_url);
    $newHorn.find('#description').text(horn.description);
    $newHorn.find('#hornQuantity').text(horn.horns);
    $newHorn.removeClass('photo-template');

    $('.hornPic').append($newHorn);


  });
}

let dropdown = $('#drop-down-menu');
dropdown.empty();

dropdown.append('<option selected="true" disabled> Choose Something');
dropdown.prop('selectedIndex', 0);

const url = 'data/page-1.json';
$.getJSON(url, function (data){
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.default).text(entry.keyword));
  });
});

// const myKeyword =
// function dropMenu(keywordList) {
//   // const keywordArray = [];

//   keywordList.forEach(horn => {
//     const $newKeyword = $('.dropMenu').clone();

//     $newKeyword.find('select').text(horn.keyword);
//     $newKeyword.removeClass('dropMenu');

//     $('.dropMenu').append($newKeyword);
//   })
// }

// function attachListeners() {
//   $('input').on('change', event => {
//     const $choice = $(event.target);
//     const type =$choice.val();

//     if (value === 'default'){

//     }
//   })
// }

$(startApp);
