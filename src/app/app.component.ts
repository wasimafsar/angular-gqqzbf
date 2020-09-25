import { Component } from '@angular/core';

// If you want to use require, please first install node.
// npm install @types/node --save
var lamejs = require("lamejs");

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  channels = 1; //1 for mono or 2 for stereo
  sampleRate = 44100; //44.1khz (normal mp3 samplerate)
  kbps = 128; //encode 128kbps mp3
  mp3encoder = new lamejs.Mp3Encoder(this.channels, this.sampleRate, this.kbps);
  mp3Data = [];
}
