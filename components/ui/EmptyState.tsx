import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon && (
        <div className="w-16 h-16 bg-secondary text-muted-foreground rounded-2xl flex items-center justify-center mb-6">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">{description}</p>
      
      {action && (
        <button 
          onClick={action.onClick}
          className="bg-foreground text-background font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
