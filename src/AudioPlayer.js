export function playAudioClip(keyPressed) {
  let audioElementID = "audio-";
  audioElementID = audioElementID.concat(keyPressed);
  const audioElementCurrent = document.getElementById(audioElementID);
  const audioPromise = audioElementCurrent.play();
  if(audioPromise !== undefined) {
    audioPromise.then(() => {
      // console.log("Does the audio play?");
    }).catch(error => {
      // console.log("error");
    });
  }
}
