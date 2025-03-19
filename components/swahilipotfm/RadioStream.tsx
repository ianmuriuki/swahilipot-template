import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/RadioStream.module.css';

interface RadioStreamProps {
  streamUrl: string;
  title: string;
}

export default function RadioStream({ streamUrl, title }: RadioStreamProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  // Cleanup function to pause the audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying]);
}