import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeComponent } from './tic-tac-toe.component';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with X', () => {
    component.newGame();
    expect(component.player).toBe('X');
  });

  it('should place X in the first square when the first move is made', () => {
    component.newGame();
    component.makeMove(0);
    expect(component.squares![0]).toBe('X');
  });

  it('should calculate winner correctly', () => {
    component.newGame();
    component.squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(component.calculateWinner()).toBe('X');
  });
});
