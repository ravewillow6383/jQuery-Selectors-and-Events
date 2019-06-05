function startApp(){

  loadData();

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

    $('.hornPic').append($newHorn)
  });
}

// function attachListeners() {
//   $('input').on('change', event => {
//     const $choice = $(event.target);
//     const type =$choice.val();

//     if (type === '')
//   })
// }

$(startApp);
