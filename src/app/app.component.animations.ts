import { trigger, state, transition, style, animate } from '@angular/animations';

export const animations = [
  trigger('appear', [
    state('void', style({ height: 0, opacity: 0.2 })),
    transition('void => *', animate(200, style({ height: '*', opacity: 1 }))),
  ])
];
