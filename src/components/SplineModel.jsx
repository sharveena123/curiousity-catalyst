
import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineModel = ({ className }) => {
  return (
    <div className={`${className} relative w-full h-full min-h-[300px]`}>
      <Spline 
        scene="https://prod.spline.design/Nr7ysxICv7oEWtiX/scene.splinecode" 
        className="w-full h-full"
      />
    </div>
  );
};

export default SplineModel;
