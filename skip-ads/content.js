'use strict';

function skipAd() {
  const video = document.querySelector('video');
  const twitchAd = document.querySelector('[data-a-target="ax-overlay"]');

  if (twitchAd) {
    twitchAd.remove();
  }

  // Twitch Ad is in a wrapped iframe so don't progress Twitch video
  if (!video.hasAttribute('playsinline')) {
    video.currentTime = video.duration;
  }
}

function continueButton() {
  const continueButton = document.querySelector('.ytp-ad-skip-button');

  if (continueButton) {
    continueButton.click();
  }
}

function run() {
  skipAd();
  continueButton();
}

run();
