import React from 'react';
import { IconType } from 'react-icons';
import { MdUpcoming } from 'react-icons/md';

interface WorkInProgressProps {
  icon?: IconType;
  title?: string;
  description?: string;
  footerText?: string;
  className?: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({
  icon: Icon = MdUpcoming,
  title = "Work in Progress",
  description = "We're currently building this section. Please check back later for updates.",
  footerText = "Check back soon for updates!",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-20 text-center ${className}`}>
      <Icon className="mb-4 text-7xl text-gray-400" />
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="mb-4 max-w-md text-gray-600">
        {description}
      </p>
      <p className="text-sm text-gray-500">{footerText}</p>
    </div>
  );
};

export default WorkInProgress; 