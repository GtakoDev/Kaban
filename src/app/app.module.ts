import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {DragDropModule} from 'primeng/dragdrop';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import {TreeModule} from 'primeng/tree';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { SearchComponent } from './components/search/search.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TaskCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ButtonModule,
    RippleModule,
    CardModule,
    FormsModule,
    ToggleButtonModule,
    TreeModule,
    DialogModule,
    ContextMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
