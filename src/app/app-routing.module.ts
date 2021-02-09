import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineListComponent } from './machine-list/machine-list.component';

const routes: Routes = [
  { path: '', component: MachineListComponent },
  { path: 'add-machine', component: AddMachineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
