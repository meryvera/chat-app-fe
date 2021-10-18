import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerChannelComponent } from './container-channel.component';

describe('ContainerChannelComponent', () => {
  let component: ContainerChannelComponent;
  let fixture: ComponentFixture<ContainerChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
