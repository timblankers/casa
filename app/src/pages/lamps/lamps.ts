import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

export class Lamp {
  id: number;
}

const LAMPS: Lamp[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

@Component({
  selector: 'page-lamps',
  templateUrl: 'lamps.html'
})
export class LampsPage {

  lamps = LAMPS;

  constructor(public navCtrl: NavController, private _http: Http) {

  }

  triggerLamp(lampId, action) {
    if (action == "on") {
      return this._http.get('http://192.168.0.106:3000/turnOn/'+lampId)
      .map((res: Response) => res.json())
       .subscribe(data => {
              console.log(data);
      });
    } else {
      return this._http.get('http://192.168.0.106:3000/turnOff/'+lampId)
      .map((res: Response) => res.json())
       .subscribe(data => {
              console.log(data);
      });
    }
  }

  triggerAll(action) {
    this.lamps.forEach(lamp => {
      if (action == "on") {
        this.triggerLamp(lamp.id, "on");
      } else {
        this.triggerLamp(lamp.id, "off");        
      }
    }) 
  }
}
