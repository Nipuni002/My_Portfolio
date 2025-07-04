import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export const Tabs = ({ children, defaultValue, className = "", ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-gray-900 p-1 border border-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({ children, value, className = "", ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  const getActiveStyles = (value) => {
    switch (value) {
      case 'Frontend':
        return 'bg-indigo-900/30 text-indigo-300 border-indigo-500';
      case 'Backend':
        return 'bg-purple-900/30 text-purple-300 border-purple-500';
      case 'DevOps':
        return 'bg-blue-900/30 text-blue-300 border-blue-500';
      case 'Other':
        return 'bg-violet-900/30 text-violet-300 border-violet-500';
      default:
        return 'bg-indigo-900/30 text-indigo-300 border-indigo-500';
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 ${
        isActive 
          ? `${getActiveStyles(value)} border` 
          : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
      } ${className}`}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, className = "", ...props }) => {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== value) return null;

  return (
    <div
      className={`mt-6 focus-visible:outline-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};