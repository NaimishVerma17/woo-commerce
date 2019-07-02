import {Component, Input, OnInit} from '@angular/core';
import {IMessage} from '@ec-shared/models/message';
import {IUser} from '@ec-shared/models/users';
import {ApiService} from '@ec-core/services/api.service';
import {ConversationalController} from '@ec-core/controllers/conversational.controller';
import {IRoom} from '@ec-shared/models/room';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnInit {
  @ Input() userRoom: IRoom;
  @ Input() firstName: string;
  @ Input() profileUrl: string;

  constructor(private apiService: ApiService,
              private conversationalController: ConversationalController) {
  }

  ngOnInit() {

    this.conversationalController.getSelectedUserId().pipe(take(1)).subscribe(id => {
        this.apiService.getUserDetails(id).pipe(take(1)).subscribe((res: IUser) => {
          this.firstName = res.firstName;
          this.profileUrl = res.profileUrl;
        });

      }
    );
    }
}
