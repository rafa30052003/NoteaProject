import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttton.component.html',
  styleUrls: ['./buttton.component.css']
})
export class ButttonComponent {
  @Input('clase') clase:string = 'btn btn-primary';
  @Input('texto') texto:string = 'Botón';
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
