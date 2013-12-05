installChromeExtension = function() {
  chrome.webstore.install('https://chrome.google.com/webstore/detail/bdodanfnechhfccidchokdnhdilbamga', function(data) {
    console.log('success: '+data);
    disableInstallButton();
  }, function(data) {
    console.log('fail: '+data);
  });
};

disableInstallButton = function () {
  console.log('cccccccc');
  $('#install-button')
    .prop('disabled', true);
  $('#install-button span')
    .text('chrome extension installed!');
}
