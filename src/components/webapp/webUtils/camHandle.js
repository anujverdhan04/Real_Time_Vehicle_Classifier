/**
 * Class to handle webcam
 */
// export class Webcam {
//     /**
//      * Open webcam and stream it through video tag.
//      * @param {HTMLVideoElement} videoRef video tag reference
//      */
//     open = (videoRef) => {
//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices
//           .getUserMedia({
//             audio: false,
//             video: {
//               facingMode: "environment",
//             },
//           })
//           .then((stream) => {
//             videoRef.srcObject = stream;
//           });
//       } else alert("Can't open Webcam!");
//     };
  
//     /**
//      * Close opened webcam.
//      * @param {HTMLVideoElement} videoRef video tag reference
//      */
//     close = (videoRef) => {
//       if (videoRef.srcObject) {
//         videoRef.srcObject.getTracks().forEach((track) => {
//           track.stop();
//         });
//         videoRef.srcObject = null;
//       } else alert("Please open Webcam first!");
//     };
//   }
export class Webcam {
  /**
   * Open webcam and stream it through video tag.
   * @param {HTMLVideoElement} videoRef - Reference to the HTMLVideoElement where the webcam stream will be displayed.
   */
  open = (videoRef) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = {
        audio: false,
        video: {
          facingMode: { ideal: "environment" } // Use the environment (rear) camera if available
        }
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          videoRef.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
          alert('Failed to access webcam. Please check your camera permissions.');
        });
    } else {
      alert("Can't open Webcam! Your browser may not support webcam access.");
    }
  };

  /**
   * Close opened webcam.
   * @param {HTMLVideoElement} videoRef - Reference to the HTMLVideoElement that is currently displaying the webcam stream.
   */
  close = (videoRef) => {
    if (videoRef.srcObject) {
      videoRef.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      videoRef.srcObject = null;
    } else {
      alert("Please open Webcam first!");
    }
  };
}
