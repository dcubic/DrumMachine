export function playAudioClip(keyPressed) {
  let audioElementID = "audio-";
  audioElementID = audioElementID.concat(keyPressed);
  const audioElementCurrent = document.getElementById(audioElementID);
  console.log(audioElementCurrent);
  const audioPromise = audioElementCurrent.play();

  if(audioPromise !== undefined) {
    audioPromise.then(() => {

    }).catch(error => {
      console.log(audioElementID);
      console.log(audioElementCurrent);
    });
  }
}
