import { Component, OnInit } from '@angular/core';
import { Coffie } from '../coffie';
import { CoffiesService } from '../coffies.service';

@Component({
  selector: 'app-coffie-list',
  templateUrl: './coffie-list.component.html',
  styleUrls: ['./coffie-list.component.css']
})
export class CoffieListComponent implements OnInit {

  coffies: Array<Coffie> = []

  constructor(private coffiesService: CoffiesService) { }

  getCoffies(): void {
    this.coffiesService.getCoffies().subscribe(coffies => {
      this.coffies = coffies
    })
  }

  ngOnInit() {
    this.getCoffies()
  }

}
