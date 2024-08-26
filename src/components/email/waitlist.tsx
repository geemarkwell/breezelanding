import * as React from 'react';

interface WaitlistProps {
  firstName: string;
}

export const Waitlist: React.FC<Readonly<WaitlistProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);