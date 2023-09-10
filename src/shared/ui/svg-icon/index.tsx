import React, { CSSProperties } from 'react';

export interface IProps {
  style?: CSSProperties;
  id?: string | number;
  className?: string;
  onClick?: () => void;
  Component?: any;
}

export const SvgIcon = React.forwardRef<any, IProps>(
  ({ style, className, onClick, Component, id }: IProps, ref): React.ReactElement => {
    if (!Component || typeof Component === 'string') {
      return <></>;
    }

    return (
      <Component
        onClick={onClick}
        className={className}
        style={style}
        id={id + Math.random().toString()}
      />
    );
  },
);


