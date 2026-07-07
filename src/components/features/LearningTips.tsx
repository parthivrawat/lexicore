import React, { useState, useEffect } from 'react'

export interface LearningTip {
  title: string
  content: string
  icon: string
}

interface LearningTipsProps {
  tips: LearningTip[]
  theme?: 'amber' | 'blue'
  className?: string
}

export const LearningTips: React.FC<LearningTipsProps> = ({ 
  tips, 
  theme = 'amber',
  className = '' 
}) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  // Rotate tips every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [tips.length])

  const themeClasses = {
    amber: {
      container: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-700',
      badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200',
      dot: 'bg-amber-500',
      dotInactive: 'bg-amber-300 dark:bg-amber-700',
      title: 'text-gray-900 dark:text-white',
      content: 'text-gray-700 dark:text-gray-300'
    },
    blue: {
      container: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-gray-200 dark:border-gray-600',
      badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
      dot: 'bg-blue-500',
      dotInactive: 'bg-blue-300 dark:bg-blue-700',
      title: 'text-blue-900 dark:text-blue-200',
      content: 'text-blue-700 dark:text-blue-300'
    }
  }

  const classes = themeClasses[theme]

  return (
    <div className={`rounded-3xl border p-8 shadow-soft ${classes.container} ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${classes.badge}`}>
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Learning Tip
        </span>
        <div className="flex gap-1 ml-auto">
          {tips.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTipIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${idx === currentTipIndex ? `${classes.dot} w-6` : classes.dotInactive}`}
              aria-label={`Go to tip ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative min-h-[100px]">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              idx === currentTipIndex
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-4xl">{tip.icon}</div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${classes.title}`}>{tip.title}</h3>
                <p className={`leading-relaxed ${classes.content}`}>{tip.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
