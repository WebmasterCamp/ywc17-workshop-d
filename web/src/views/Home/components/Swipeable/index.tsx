import React from 'react';
import { useSwipeable } from 'react-swipeable';
import CardTile from '../../../../core/components/CardTile';

const getOrder = ({ index, pos, numItems }: any) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const initialState = { pos: 0, sliding: false, dir: 'NEXT' };

const Swipeable = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const slide = (dir: any) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => slide('NEXT'),
    onSwipedRight: () => slide('PREV'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div {...handlers}>
      {['', ''].map(_ => (
        <CardTile
          title="มีใครว่างบ้างงง"
          img="https://images.unsplash.com/photo-1561113500-8f4ad4f80a93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          details={[
            {
              title: 'ทักษะ',
              detail: 'อังกฤษ',
            },
            {
              title: 'ค่าตอบแทน',
              detail: '100',
            },
            {
              title: 'สถานที่',
              detail: 'bkkF',
            },
          ]}
        />
      ))}
    </div>
  );
};

function reducer(state: { pos: number }, { type, numItems }: any) {
  switch (type) {
    case 'reset':
      return initialState;
    case 'PREV':
      return {
        ...state,
        dir: 'PREV',
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case 'NEXT':
      return {
        ...state,
        dir: 'NEXT',
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Swipeable;
