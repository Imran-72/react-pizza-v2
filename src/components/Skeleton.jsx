import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={458}
    viewBox="0 0 260 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="118" cy="123" r="109" />
    <rect x="7" y="271" rx="0" ry="0" width="216" height="97" />
    <rect x="14" y="236" rx="0" ry="0" width="210" height="28" />
  </ContentLoader>
);

export default Skeleton;
