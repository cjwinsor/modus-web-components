// eslint-disable-next-line
import { FunctionalComponent, h } from '@stencil/core';

interface IconProps {
  color?: string;
  onClick?: () => void;
  size?: string;
}

export const IconTune: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class="icon-tune"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color ?? 'currentColor'}
    height={props.size ?? 16}
    width={props.size ?? 16}
    onClick={props.onClick}
    viewBox="0 0 24 24">
    <path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1ZM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1Zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1ZM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1Zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1Zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1Z" />
  </svg>
);
