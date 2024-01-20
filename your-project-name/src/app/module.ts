import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TacheListComponent } from './tache-list/tache-list.component'; // Adjust the path based on your project structure
import { TacheService } from './TacheService';

@NgModule({
  declarations: [
    AppComponent,
    TacheListComponent,

  ],
  imports: [
    HttpClientModule,
 
  ],
  providers: [TacheService], // Add TacheService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
