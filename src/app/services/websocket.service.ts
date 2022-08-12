import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:5000');
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }
}
