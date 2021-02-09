import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss'],
})
export class AddMachineComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  machineControl = new FormControl('', Validators.required);
  recipeControl = new FormControl('', Validators.required);

  machines = [
    { value: 'smelter', viewValue: 'Smelter' },
    { value: 'constructor', viewValue: 'Constructor' },
    { value: 'assembler', viewValue: 'Assembler' },
  ];

  recipes = [
    { value: 'ironIngot', viewValue: 'Iron Ingot' },
    { value: 'copperIngot', viewValue: 'Copper Ingot' },
    { value: 'concrete', viewValue: 'Concrete' },
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: this.machineControl,
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: this.recipeControl,
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', [Validators.required, Validators.min(0), Validators.max(250)]],
      fourthCtrl: ['', [Validators.required, Validators.min(1)]],
    });
    this.thirdFormGroup.setValue({
      thirdCtrl: '100',
      fourthCtrl: '1',
    });
  }

  ngOnInit(): void {}
}
