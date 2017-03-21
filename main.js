const API_KEY = '70b1xnkas2cgkwuf46r6elr6';
$.ajax({
  type: 'GET',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=' + API_KEY + '&keywords="apartment therapy"&includes=Images,Shop',
  dataType: 'jsonp',
  success: function(data, status, xhr) {
    data['results'].forEach(function(element, index, array){
      $('body').append('<div class="card" id="card' + index + '"></div>');
      $('#card' + index + '').append('<a class="cardAnchorTag" href="' + element['url'] + '"></a>');
      $('#card' + index + ' .cardAnchorTag').append('<img src="' + element['Images'][0]['url_570xN'] + '"></img>');
      $('#card' + index + ' .cardAnchorTag').append('<div class="infoCard"></div>');
      $('#card' + index + ' .infoCard').append('<div class="itemTitle">' + element['title'] + '</div>');
      $('#card' + index + ' .infoCard').append('<div class="shopName">' + element['Shop']['shop_name'] + '</div>')
      $('#card' + index + ' .infoCard').append('<div class="itemPrice">$' + element['price'] + '</div>');
    })
  }
})
function renderHeader() {
  $('body').append('<header></header>');
  $('header').append('<a class="etsyLogo" src="etsy-logo.png"><img src="https://www.etsy.com/assets/dist/images/etsylogo@2x.20170228151449.png"></img></a><i class="fa fa-search" aria-hidden="true"></i><a>Sell on Etsy</a><i class="fa fa-home" aria-hidden="true"></i><i class="fa fa-heart" aria-hidden="true"></i><i class="fa fa-user" aria-hidden="true"></i><i class="fa fa-shopping-cart" aria-hidden="true"></i>');
  $('header').append('');
  $('header').append();
}

function renderFooter() {
  $('body').append('<footer></footer>')
}

renderHeader();
renderFooter();
