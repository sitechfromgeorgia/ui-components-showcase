'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

// Kibo UI inspired Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-slate-600 bg-transparent hover:bg-slate-800 text-white',
  secondary: 'bg-slate-800 text-white hover:bg-slate-700',
  ghost: 'hover:bg-slate-800 text-white',
  link: 'text-primary underline-offset-4 hover:underline',
};

const buttonSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

export function Button({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Advanced Button with Loading State and Icons
interface AdvancedButtonProps extends ButtonProps {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
}

export function AdvancedButton({
  children,
  isLoading = false,
  leftIcon,
  rightIcon,
  loadingText = 'Loading...',
  disabled,
  ...props
}: AdvancedButtonProps) {
  return (
    <Button disabled={disabled || isLoading} {...props}>
      <div className="flex items-center gap-2">
        {isLoading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
            />
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-1">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-1">{rightIcon}</span>}
          </>
        )}
      </div>
    </Button>
  );
}

// Button Group Component
interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function ButtonGroup({
  children,
  className,
  orientation = 'horizontal',
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        'inline-flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md',
        orientation === 'vertical' && '[&>button:first-child]:rounded-t-md [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-b-md [&>button:last-child]:rounded-r-none',
        className
      )}
      role="group"
    >
      {children}
    </div>
  );
}

// Button Demo Component
export default function ButtonShowcase() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const handleLoadingDemo = (key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Kibo UI Button Components</h2>
        <p className="text-slate-400">Accessible and customizable button components with shadcn/ui styling</p>
      </div>

      {/* Basic Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Button Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🚀</Button>
        </div>
      </div>

      {/* Advanced Buttons with Loading */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Advanced Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <AdvancedButton
            variant="default"
            leftIcon="📤"
            isLoading={loadingStates.upload}
            loadingText="Uploading..."
            onClick={() => handleLoadingDemo('upload')}
          >
            Upload File
          </AdvancedButton>
          
          <AdvancedButton
            variant="outline"
            rightIcon="→"
            isLoading={loadingStates.next}
            loadingText="Processing..."
            onClick={() => handleLoadingDemo('next')}
          >
            Next Step
          </AdvancedButton>
          
          <AdvancedButton
            variant="destructive"
            leftIcon="🗑️"
            isLoading={loadingStates.delete}
            loadingText="Deleting..."
            onClick={() => handleLoadingDemo('delete')}
          >
            Delete Item
          </AdvancedButton>
        </div>
      </div>

      {/* Button Groups */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Button Groups</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-400 mb-2">Horizontal Group</p>
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </div>
          
          <div>
            <p className="text-sm text-slate-400 mb-2">Vertical Group</p>
            <ButtonGroup orientation="vertical">
              <Button variant="secondary">Top</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Bottom</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Interactive Demo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
            <h4 className="font-medium text-white mb-4">Hover Effects</h4>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Button variant="default" className="w-full justify-start">
                  🎯 Hover to slide
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Button variant="outline" className="w-full">
                  🔍 Hover to scale
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
            <h4 className="font-medium text-white mb-4">State Management</h4>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                className="w-full"
                disabled
              >
                Disabled Button
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => alert('Button clicked!')}
              >
                Click Me!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}