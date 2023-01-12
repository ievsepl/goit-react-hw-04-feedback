import { useState } from 'react';

export const useSetFeedback = name => {
  console.log(name);
  const [nameFeedback, setNameFeedback] = useState(name);
  const newFeedback = () => setNameFeedback(nameFeedback + 1);
  return { newFeedback };
};
