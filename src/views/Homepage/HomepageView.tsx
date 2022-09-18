import { PixiComponent, Stage } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';

interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: number;
}

const Rectangle = PixiComponent<RectangleProps, Graphics>('Rectangle', {
  applyProps: (ins, _, props) => {
    ins.x = props.x;
    ins.beginFill(props.color);
    ins.drawRect(props.x, props.y, props.width, props.height);
    ins.endFill();
  },
  create: () => new Graphics(),
});
export const HomepageView = (): JSX.Element => (
  <Stage height={300} options={{ backgroundAlpha: 0 }} width={300}>
    <Rectangle color={0xff_00_00} height={100} width={100} x={100} y={100} />
  </Stage>
);
