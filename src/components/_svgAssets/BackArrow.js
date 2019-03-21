import React from 'react';

const BackArrow = props => (
  <svg viewBox='0 0 18 10' width={18} height={10} {...props}>
    <g fill='none' fillRule='evenodd'>
      <g transform='translate(2 1)'>
        <rect
          width={15}
          height={2}
          x={1}
          y={3}
          fill='#FFF'
          fillRule='nonzero'
          rx={1}
        />
        <path
          stroke='#FFF'
          strokeLinecap='round'
          strokeWidth={2}
          d='M5.5 8l-5-4 5-4'
        />
      </g>
    </g>
  </svg>
);

export default BackArrow;
