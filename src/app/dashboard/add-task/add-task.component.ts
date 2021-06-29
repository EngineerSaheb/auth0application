import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  picker: FormGroup;

  public addTask = new FormControl('');
  public technologyAndTools = new FormControl('');
  public taskPurpose = new FormControl('');
  public workingGithubUrl = new FormControl();
  public startDate = new FormControl('');
  public endDate = new FormControl('');
  public workingHours = new FormControl('');
  public projectType = new FormControl('');
  disableSelect = new FormControl(false);

  constructor(
    private dashboardService: DashboardService,
    private _router: Router,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    
  }
  
  addTaskInOurList(key) {
    const submitdata = {};
        if(key === "ad") {
          submitdata['add_task'] = this.addTask['value'];
          submitdata['technology_and_tools'] = this.technologyAndTools['value'];
          submitdata['task_purpose'] = this.taskPurpose['value'];
          submitdata['working_github_url'] = this.workingGithubUrl['value'];
          submitdata['start_working_date'] = this.startDate['value'];
          submitdata['end_working_date'] = this.endDate['value'];
          submitdata['working_hours'] = this.workingHours['value'];
        }
        this.dashboardService.completeAddWorkingTask(submitdata)
          .subscribe((data: any) => {
            if (data) {
              this._snackBar.open('add working task successfully in our list', 'Ok', {
                duration: 2000,
              });
            }
            else
              this._snackBar.open('Something went wrong please try again', 'Ok', {
                duration: 2000,
              });
        });
  }
}
