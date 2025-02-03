import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({
  duration = 5000,
  length = 109,
  height = 2,
  progressColor = '#FFD700',
  emptyColor = '#333333',
  onComplete = () => {}, // Callback function for completion
  start = false, // Prop to control whether the progress bar should start
  full = false, // Prop to control whether the progress bar should be full
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (full) {
      // If full is true, set progress to 100%
      setProgress(1);
      return;
    }
    if (!start) {
      // If start is false, reset progress
      setProgress(0);
      return;
    }

    const steps = 100; // Increase the number of steps for smoother animation
    const interval = duration / steps;

    const updateProgress = () => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1 / steps;
        return newProgress >= 1 ? 1 : newProgress;
      });
    };

    const intervalId = setInterval(updateProgress, interval);

    return () => {
      console.log('ProgressBar: useEffect cleanup');
      clearInterval(intervalId);
      // Call onComplete function when the animation completes
    };
  }, [duration, start, full]);

  useEffect(() => {
    if (progress === 1) {
      onComplete();
    }
  }, [onComplete, progress]);

  return (
    <Progress.Bar
      progress={progress}
      width={length}
      height={height}
      color={progressColor}
      unfilledColor={emptyColor}
      animated
      animationType="timing"
      borderColor={emptyColor}
    />
  );
};

export default ProgressBar;
