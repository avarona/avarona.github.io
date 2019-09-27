import * as React from 'react';

import './styles.css';
import Icon from 'components/Icon';

type Props = {
  text: string;
  svgIcon?: string;
  onClick?: () => void;
};

const Button = ({ text, svgIcon, onClick }: Props) => (
  <div className="button-container" onClick={onClick}>
    {!!svgIcon && <Icon svg={svgIcon} alt={`${text} icon`} />}
    <div className="button-text">{text}</div>
  </div>
);

export default Button;
