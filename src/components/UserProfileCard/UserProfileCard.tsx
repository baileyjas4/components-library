import React from 'react';
import { UserProfileCardProps } from '../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true, // Defaulting to true
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <div className="flex items-center space-x-4">
        {user.avatarUrl && (
          <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full" />
        )}
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          {showEmail && <p className="text-gray-600">{user.email}</p>}
          {showRole && <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{user.role}</span>}
        </div>
      </div>
      
      {/* Component Composition: Rendering children passed from parent */}
      <div className="mt-4">
        {children}
      </div>

      {onEdit && (
        <button 
          onClick={() => onEdit(user.id)}
          className="mt-4 w-full bg-green-600 text-blue py-2 rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};