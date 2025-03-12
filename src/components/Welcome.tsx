import React from 'react';

export const Welcome: React.FC = () => (
  <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <h1 className="text-2xl font-bold mb-2">🤖 Hello, I am David</h1>
    <p>
    Welcome to your neurodivergent-friendly corner of the internet! This is a safe and supportive space for folks with autism, ADHD, dyslexia, and more, where you can find helpful ideas and strategies tailored to your unique brain.
    </p>
    <p>
      <a className="underline" href="https://davidjenner.cc">
        davidjenner.cc
      </a>
    </p>
  </div>
);

export default Welcome;
