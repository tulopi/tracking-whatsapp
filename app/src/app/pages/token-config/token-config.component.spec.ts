import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenConfigComponent } from './token-config.component';

describe('TokenConfigComponent', () => {
  let component: TokenConfigComponent;
  let fixture: ComponentFixture<TokenConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
