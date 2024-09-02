import {Circle, makeScene2D, Rect} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  const background = createRef<Rect>();
  view.add(<Rect ref={background} size={1920} fill={'whitesmoke'} />);

  const circle = createRef<Circle>();
  view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

  // yield* circle().scale(2, 0).to(1, 2);
  // yield* circle().position.x(0, 0).to(1920/2, 2);


  yield* all(
    circle().scale(2, 0).to(1, 2),
    circle().position.x(-1920/2, 0).to(1920/2, 2),
    circle().fill('whitesmoke', 0).to('lightseagreen', 2),
    background().fill('lightseagreen', 0).to('whitesmoke', 2)
  );

});
