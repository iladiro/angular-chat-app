import {Injectable} from "@angular/core";

@Injectable()
export class WarningAnimation {

  constructor() {}  

  flashingTab(message: string): number {
    let toggle_status = true;
    let interval = setInterval(function(){
      if(toggle_status) {
        document.title = message;
      } else {
        document.title = "Bracco";
      }
      toggle_status = !toggle_status;
    }, 1000);
    return +interval
  }

  stopFlashingTab(interval: number) {
    document.addEventListener("click", function() {
      clearInterval(interval);
      document.title = "Bracco";
    });
  }

  soundNotifications() {
    let audioPlayer = <HTMLVideoElement> document.getElementById("notifications");
    audioPlayer.play();
  }

}
