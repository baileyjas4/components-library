import React from 'react';
import { AlertBoxProps } from '../types'; 

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  return (
    <div className={`p-4 border-l-4 rounded-md shadow-sm mb-4 ${alertStyles[type]}`} role="alert">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="font-bold">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
          <p className="text-sm">{message}</p>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-lg font-bold opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </div>

      {/* This renders any extra HTML/Components passed inside the AlertBox tags */}
      {children && (
        <div className="mt-2 text-sm border-t border-black border-opacity-10 pt-2">
          {children}
        </div>
      )}
    </div>
  );
};