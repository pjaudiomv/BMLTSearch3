import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapSearchPage } from './map-search.page';

describe('MapSearchPage', () => {
  let component: MapSearchPage;
  let fixture: ComponentFixture<MapSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
