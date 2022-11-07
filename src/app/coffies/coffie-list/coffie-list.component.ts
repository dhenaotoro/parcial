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
  totalOrigen: number = 0
  totalBlend: number = 0

  constructor(private coffiesService: CoffiesService) { }

  getCoffies(): void {
    this.coffiesService.getCoffies().subscribe(coffies => {
      this.coffies = coffies
      this.calculateOriginCoffie()
      this.calculateBlendCoffie()
    })
  }

  calculateOriginCoffie(): void {
    const originCoffie = this.coffies.filter(coffie => coffie.tipo === "Café de Origen")
    this.totalOrigen = originCoffie.length;
  }

  calculateBlendCoffie(): void {
    const blendCoffie = this.coffies.filter(coffie => coffie.tipo === "Blend")
    this.totalBlend = blendCoffie.length;
  }

  ngOnInit() {
    this.getCoffies()
  }

}
