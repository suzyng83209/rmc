require(
['facebook', 'ext/jquery', 'util'],
function(_facebook, $, util) {
  if (util.getQueryParam('logout')) {
    _facebook.logout();
  }

  $('.header-bg').css('opacity', 1.0);
  $('.sign-up-box').addClass('animated');

  _facebook.initConnectButton('HOME');

  mixpanel.track('Impression: Landing page');
});
