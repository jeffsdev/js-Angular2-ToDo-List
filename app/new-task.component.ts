import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Blank template</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>

    <select #newPriority>
      <option value="high">High</option>
      <option value="normal">Normal</option>
      <option value="low">Low</option>
    </select>

    <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value]);
    userDescription.value = "";
    userPriority.value = "";
  }
  // addPriority(userPriority: HTMLSelectElement){
  //   this.onSubmitNewTask.emit(userPriority.value);
  //   userPriority.value = "";
  // }
}
