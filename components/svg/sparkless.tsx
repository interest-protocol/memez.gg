import { FC } from 'react';

import { SVGProps } from './svg.types';

const Sparkless: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <path
      d="M18 10.1516L14.6128 11.3833C14.1218 11.5618 13.743 11.9601 13.5894 12.4595L12.2948 16.6667C12.256 16.793 12.0773 16.793 12.0384 16.6667L10.7439 12.4595C10.5902 11.9601 10.2114 11.5618 9.72047 11.3833L6.3333 10.1516C6.1918 10.1001 6.1918 9.89998 6.3333 9.84856L9.72047 8.61681C10.2114 8.43831 10.5902 8.03995 10.7439 7.54066L12.0384 3.3334C12.0773 3.20715 12.256 3.20715 12.2948 3.3334L13.5894 7.54066C13.743 8.03995 14.1218 8.43831 14.6128 8.61681L18 9.84856C18.1415 9.89998 18.1415 10.1001 18 10.1516Z"
      fill={props.fill || '#F5B722'}
      fillOpacity="0.7"
      stroke={props.fill || '#F5B722'}
      strokeOpacity="0.7"
      strokeWidth="2.88"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.62538 4.37507C4.01883 4.50622 4.32756 4.81495 4.45871 5.2084C4.52544 5.40861 4.80864 5.40861 4.87538 5.2084C5.00653 4.81495 5.31526 4.50622 5.70871 4.37507C5.90892 4.30834 5.90892 4.02514 5.70871 3.9584C5.31526 3.82725 5.00653 3.51852 4.87538 3.12507C4.80864 2.92486 4.52544 2.92486 4.45871 3.12507C4.32756 3.51852 4.01883 3.82725 3.62538 3.9584C3.42517 4.02514 3.42517 4.30834 3.62538 4.37507Z"
      stroke={props.fill || '#F5B722'}
      strokeOpacity="0.7"
      strokeWidth="1.44"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.54184 16.0418C6.14839 16.173 5.83966 16.4817 5.70851 16.8751C5.64177 17.0754 5.35857 17.0754 5.29184 16.8751C5.16069 16.4817 4.85196 16.173 4.45851 16.0418C4.2583 15.975 4.2583 15.6919 4.45851 15.6251C4.85196 15.494 5.16069 15.1852 5.29184 14.7918C5.35857 14.5915 5.64177 14.5915 5.70851 14.7918C5.83966 15.1852 6.14839 15.494 6.54184 15.6251C6.74205 15.6919 6.74205 15.975 6.54184 16.0418Z"
      stroke={props.fill || '#F5B722'}
      strokeOpacity="0.7"
      strokeWidth="1.44"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Sparkless;
