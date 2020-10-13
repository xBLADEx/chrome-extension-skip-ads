'use strict';

function skipAd() {
  var video = document.querySelector('video');
  video.currentTime = video.duration;
}

function continueButton() {
  var continueButton = document.querySelector('.ytp-ad-skip-button');

  if (continueButton) {
    continueButton.click();
  }
}

function run() {
  skipAd();
  continueButton();
}

run();
