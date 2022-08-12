import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  webSocketService: WebsocketService;
  constructor(webSocketService: WebsocketService) {
    this.webSocketService = webSocketService;
  }

  ngOnInit(): void {}
}
