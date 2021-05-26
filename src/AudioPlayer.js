const KEY_TO_CLIP_URL_MAP = {
  Q: "./audio_clips/808sub.wav",
  W: "./audio_clips/iELECTRIBE-kick-10.wav",
  E: "./audio_clips/iELECTRIBE-kick-7.wav",
  A: "./audio_clips/lowerthud.wav",
  S: "./audio_clips/schumacher2.wav",
  D: "./audio_clips/snappy-clappy.wav",
  Z: "./audio_clips/spindown.wav",
  X: "./audio_clips/synth-blobble-zap.wav",
  C: "./audio_clips/whuuup.wav"
};

export function playAudioClip(keyPressed) {
  const audioURL = KEY_TO_CLIP_URL_MAP[keyPressed];
  let audioElement = new Audio(audioURL);
  audioElement.play();
}
