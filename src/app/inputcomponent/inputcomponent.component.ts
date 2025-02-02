import { Component, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NgFor, NgIf } from '@angular/common';


export interface Workout {
  type: string;
  minutes: number;
}

export interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

const userData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    workouts: [
      { type: 'Swimming', minutes: 60 },
      { type: 'Running', minutes: 20 },
    ],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    workouts: [
      { type: 'Yoga', minutes: 50 },
      { type: 'Cycling', minutes: 40 },
    ],
  },
];

@Component({
  selector: 'app-inputcomponent',
  standalone: true,
  imports: [
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    NgFor,
    NgIf,
  
  ],
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css'],
})
export class InputcomponentComponent {
  name1 = '';
  workout = '';
  minutes = 0;
  filterWorkoutType = ''; // Add a property to store the workout type filter

  displayedColumns: string[] = ['name', 'workout', 'minutes'];
  dataSource = new MatTableDataSource<User>(userData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Chart data and options
  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
   
  }

  onSubmit() {
    if (this.name1.trim() !== '' && this.workout.trim() !== '' && this.minutes > 0) {
      const newId = userData.length > 0 ? userData.length + 1 : 1;
      userData.push({
        id: newId,
        name: this.name1,
        workouts: [{ type: this.workout, minutes: this.minutes }],
      });

      this.dataSource = new MatTableDataSource<User>(userData);
      this.dataSource.paginator = this.paginator;

      this.name1 = '';
      this.workout = '';
      this.minutes = 0;

   
    } else {
      alert('Please fill in all the fields.');
    }
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue; // Apply filter to the entire data
  }

  filterByWorkoutType(workoutType: string) {
    this.filterWorkoutType = workoutType.toLowerCase();

    if (this.filterWorkoutType) {
      this.dataSource.filterPredicate = (data: User, filter: string) => {
        return data.workouts.some(w => w.type.toLowerCase().includes(filter));
      };
      this.dataSource.filter = this.filterWorkoutType;
    } else {
      this.dataSource.filter = '';
    }
  }
}