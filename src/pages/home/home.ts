import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '../../environments/environments';
import { GoogleMaps, GoogleMap, Marker, Environment } from '@ionic-native/google-maps';

@Component( {
  selector: 'page-home',
  templateUrl: 'home.html'
} )
export class HomePage {
  map: GoogleMap;

  constructor ( public navCtrl: NavController ) {

  }

  loadMap () {
    Environment.setEnv( {
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': environment.API_KEY
    } );
    this.map = GoogleMaps.create( 'map_canvas' );
  }

  pin () {
    this.map.addMarker( {
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    } ).then( ( marker: Marker ) => {
      marker.showInfoWindow();
    } )
  }



  ionViewDidLoad () {
    this.loadMap();
  }

}
