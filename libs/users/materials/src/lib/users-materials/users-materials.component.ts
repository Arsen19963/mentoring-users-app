import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe, NgForOf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

export interface Section {
  name: string;
  updated: Date;
}
export interface Courses {
  id: number,
  name: string;
}
@Component({
  selector: 'users-users-materials',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatDividerModule, DatePipe, NgForOf],
  templateUrl: './users-materials.component.html',
  styleUrls: ['./users-materials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class UsersMaterialsComponent {

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
  courses:Courses[] = [
    { id: 1, name: "Angular For Beginners" },
    { id: 2, name: "Angular Core Deep Dive" },
    { id: 3, name: "Angular Forms In Depth" },
  ];
}
