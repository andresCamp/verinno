import React from 'react'

interface FeatureCardProps {
    title: string;
    text: string;
    text2: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({title, text, text2}) => {
  return (
    <div className='flex flex-col items-center text-slate-600 justify-center bg-slate-100 shadow-xl rounded-xl p-8 py-10'>
      

      <h1 className='text-xl'>
        {title}
      </h1>
    
      <p>
        {text}
      </p>

      <p>
        {text2}
      </p>
    </div>
  )
}

export default FeatureCard