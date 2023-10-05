import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-controller3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller3.component.html',
  styleUrls: ['./controller3.component.scss']
})
export class Controller3Component {
  constructor(private counterServ : CounterService){

  }



  increaseCounter(){
    this.counterServ.increaseCount();

  }

  resetCounter(){
    this.counterServ.resetCount();

  }

}
