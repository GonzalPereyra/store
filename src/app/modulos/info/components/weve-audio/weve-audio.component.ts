import { Component, ElementRef, Input, ViewChild } from '@angular/core';


import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-weve-audio',
  standalone: true,
  imports: [],
  templateUrl: './weve-audio.component.html',
  styleUrl: './weve-audio.component.css'
})
export class WeveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer
    ngAfterViweInit() {
      this.ws = WaveSurfer.create({
        url: this.audioUrl,
        container: this.container.nativeElement
      })
      

    }

    playPause(){
      this.ws.playPause();
        
  }


}
