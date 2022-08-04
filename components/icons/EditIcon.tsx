import * as React from 'react';

export const EditIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.02011 4.02011C2.54522 3.49501 3.25741 3.20001 4.00001 3.20001H11C11.4418 3.20001 11.8 3.55818 11.8 4.00001C11.8 4.44184 11.4418 4.80001 11 4.80001H4.00001C3.68175 4.80001 3.37653 4.92644 3.15148 5.15148C2.92644 5.37653 2.80001 5.68175 2.80001 6.00001V20C2.80001 20.3183 2.92644 20.6235 3.15148 20.8485C3.37653 21.0736 3.68175 21.2 4.00001 21.2H18C18.3183 21.2 18.6235 21.0736 18.8485 20.8485C19.0736 20.6235 19.2 20.3183 19.2 20V13C19.2 12.5582 19.5582 12.2 20 12.2C20.4418 12.2 20.8 12.5582 20.8 13V20C20.8 20.7426 20.505 21.4548 19.9799 21.9799C19.4548 22.505 18.7426 22.8 18 22.8H4.00001C3.25741 22.8 2.54521 22.505 2.02011 21.9799C1.49501 21.4548 1.20001 20.7426 1.20001 20V6.00001C1.20001 5.25741 1.49501 4.54522 2.02011 4.02011Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2.67867C19.6496 2.67867 19.3135 2.81788 19.0657 3.06568L9.72237 12.409L9.09949 14.9005L11.591 14.2776L20.9343 4.93431C21.1821 4.68651 21.3213 4.35043 21.3213 3.99999C21.3213 3.64956 21.1821 3.31348 20.9343 3.06568C20.6865 2.81788 20.3504 2.67867 20 2.67867ZM17.9343 1.93431C18.4822 1.38646 19.2252 1.07867 20 1.07867C20.7748 1.07867 21.5178 1.38646 22.0657 1.93431C22.6135 2.48216 22.9213 3.22521 22.9213 3.99999C22.9213 4.77478 22.6135 5.51783 22.0657 6.06568L12.5657 15.5657C12.4632 15.6682 12.3347 15.7409 12.194 15.7761L8.19403 16.7761C7.92141 16.8443 7.63302 16.7644 7.43431 16.5657C7.23561 16.367 7.15573 16.0786 7.22388 15.806L8.22388 11.806C8.25905 11.6653 8.33179 11.5368 8.43431 11.4343L17.9343 1.93431Z"
        fill="currentColor"
      />
    </svg>
  );
});

EditIcon.displayName = 'EditIcon';