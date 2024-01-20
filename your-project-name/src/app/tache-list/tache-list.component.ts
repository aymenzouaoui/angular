import { Component, OnInit } from '@angular/core';
import { TacheService } from '../TacheService';


@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {
  taches: any[] = [];

  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.loadTaches();
  }

  loadTaches() {
    this.tacheService.getAllTache().subscribe(
      (data: any) => {
        this.taches = data;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  moveToTrash(id: string) {
    this.tacheService.moveToTrash(id).subscribe(
      () => {
        // Update the task list or perform other actions as needed
        this.loadTaches();
      },
      (error) => {
        console.error('Error moving to trash:', error);
      }
    );
  }

  restoreFromTrash(id: string) {
    this.tacheService.restoreFromTrash(id).subscribe(
      () => {
        // Update the task list or perform other actions as needed
        this.loadTaches();
      },
      (error) => {
        console.error('Error restoring from trash:', error);
      }
    );
  }

  deletePermanently(id: string) {
    this.tacheService.deletePermanently(id).subscribe(
      () => {
        // Update the task list or perform other actions as needed
        this.loadTaches();
      },
      (error) => {
        console.error('Error deleting permanently:', error);
      }
    );
  }
}
