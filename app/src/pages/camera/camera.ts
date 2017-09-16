import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  private photoSrc: String;

  constructor(public navCtrl: NavController, private _http: Http) {
    this.photoSrc = "http://192.168.0.106/pics/latestLQ.jpg?" + new Date().getTime();
  }

  takePhoto(lampId, action) {
    return this._http.get('http://192.168.0.106:3000/takePhoto')
    .map((res: Response) => res.json())
      .subscribe(data => {
        setTimeout(function() {
          this.photoSrc = "http://192.168.0.106/pics/latestLQ.jpg?" + new Date().getTime();
         }, 7000);
        console.log(data);
    });
  }
}
