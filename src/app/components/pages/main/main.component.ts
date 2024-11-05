import { Component, OnInit } from '@angular/core';
import {timer} from "rxjs";
import {Router} from "@angular/router";


declare var bootstrap: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const timer$ = timer(10000);
    timer$.subscribe(()=>{
      this.openModal();
    })
  }

  openModal():void {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  }

  navigateToCatalog():void {
    const modalElement = document.getElementById('myModal');
    const modal = bootstrap.Modal.getInstance(modalElement);

    if (modalElement) {
      if (modal) {
        modalElement.addEventListener('hidden.bs.modal', () => {
          this.router.navigate(['/catalog']);
        });
        modal.hide();
      }
    }
  }

}
