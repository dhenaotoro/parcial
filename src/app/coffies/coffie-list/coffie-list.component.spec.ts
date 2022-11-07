/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CoffieListComponent } from './coffie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffiesService } from '../coffies.service';
import { Coffie } from '../coffie';

describe('CoffieListComponent', () => {
  let component: CoffieListComponent;
  let fixture: ComponentFixture<CoffieListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffieListComponent ],
      providers: [CoffiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffieListComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;

    for(let i = 0; i < 3; i++) {
      const coffie = new Coffie(
        i,
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word()
      );
      component.coffies.push(coffie);
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate <tr.tr-custom> contains 3 rows', () => {
    expect(debug.queryAll(By.css('tr.tr-custom'))).toHaveSize(3);
  });

  it('should validate <td.nombre> contains all of name values', () => {
    const tr = debug.queryAll(By.css('td.nombre'));
    tr.forEach(trElement => {
      const result = component.coffies.find(coffie => coffie.nombre === trElement.nativeElement.textContent)
      expect(result).not.toBeNull()
    })
  });

  it('should validate <td.tipo> contains all of name values', () => {
    const tr = debug.queryAll(By.css('td.tipo'));
    tr.forEach(trElement => {
      const result = component.coffies.find(coffie => coffie.tipo === trElement.nativeElement.textContent)
      expect(result).not.toBeNull()
    })
  });

  it('should validate <td.region> contains all of name values', () => {
    const tr = debug.queryAll(By.css('td.region'));
    tr.forEach(trElement => {
      const result = component.coffies.find(coffie => coffie.region === trElement.nativeElement.textContent)
      expect(result).not.toBeNull()
    })
  });
});
