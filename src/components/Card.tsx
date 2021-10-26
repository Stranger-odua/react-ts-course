import React, {useState} from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}


interface CardProps {
  width?: string
  height?: string
  variant: CardVariant
  onClick: (num: number) => void
}


const Card: React.FC<CardProps> =
  ({
     width,
     height,
     variant,
     onClick,
     children
   }) => {
  const [state, setState] = useState(0)

    return (
      <div style={{
        width, height,
        border: variant === CardVariant.outlined ? '1px solid gray' : '1px solid red',
        background: variant === CardVariant.primary ? 'lightgray' : ''
      }}
      onClick={() => onClick(state)}
      >
        {children}
      </div>
    );
  };

export default Card;
