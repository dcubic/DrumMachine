export function playAudioClip(keyPressed) {
  let audioElementID = "audio-";
  audioElementID = audioElementID.concat(keyPressed);
  const audioElementCurrent = document.getElementById(audioElementID);
  console.log(audioElementCurrent);
  const audioPromise = audioElementCurrent.play();
  console.log("audioPromise");
  console.log(audioPromise);
  if(audioPromise !== undefined) {
    audioPromise.then(() => {
      console.log("Does the audio play?");
    }).catch(error => {
      console.log("error");
    });
  }
}
