import React from 'react';

const SearchIcon = props => (
  <svg viewBox='0 0 13 14' width={13} height={14} {...props}>
    <g fill='none' fillRule='evenodd'>
      <g transform='translate(1 1)'>
        <circle cx={5} cy={5} r={5} stroke='#D7D3DE' strokeWidth={1.2} />
        <path
          fill='#D7D3DE'
          fillRule='nonzero'
          d='M7 9.414L8.414 8l2.829 2.828a1 1 0 1 1-1.414 1.414L7 9.415z'
        />
      </g>
    </g>
  </svg>
);

export default SearchIcon;
