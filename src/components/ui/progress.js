import React from 'react';

export const Progress = ({ 
  value = 0, 
  className = "", 
  indicatorClassName = "",
  ...props 
}) => {
  return (
    <div
      className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-800 ${className}`}
      {...props}
    >
      <div
        className={`h-full w-full flex-1 transition-all duration-500 ${indicatorClassName}`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};