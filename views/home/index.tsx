import { Box, Motion } from '@interest-protocol/ui-kit';
import { Audio, AudioElementProps, Img } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

import { Layout } from '@/components';
import Shadow from '@/components/shadow';
import { SOCIAL_LINK } from '@/constants/socials';

const Home: FC = () => {
  const audioRef = useRef<AudioElementProps>(null);
  const [firstPlay, setFirstPlay] = useState(true);

  const playSound = () => {
    const element = audioRef.current as HTMLAudioElement;
    if (element && element.paused && firstPlay) {
      setFirstPlay(false);
      element.play();
    }
  };

  const toggleSound = () => {
    const element = audioRef.current as HTMLAudioElement;
    if (element) {
      if (element.paused) element.play();
      else element.pause();
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', playSound);
    return () => window.removeEventListener('mousemove', playSound);
  }, []);

  return (
    <Layout>
      <Motion
        zIndex="0"
        top="-40%"
        right="0%"
        position="absolute"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Shadow />
      </Motion>
      <Motion
        onClick={toggleSound}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, repeatType: 'reverse' }}
      >
        <Img src="/logo.webp" />
      </Motion>
      <Box gap="xs" mx="auto" bottom="2rem" display="flex" position="absolute">
        {SOCIAL_LINK.map(({ title, pathname, Icon }) => (
          <Link
            key={v4()}
            href={pathname}
            target="_blank"
            rel="noreferrer"
            title={`Follow us on ${title}`}
          >
            <Box color="#fff" width="2.5rem" height="2.5rem">
              <Icon maxHeight="100%" maxWidth="100%" width="100%" />
            </Box>
          </Link>
        ))}
      </Box>
      <Audio src="/gg.mp3" ref={audioRef} />
    </Layout>
  );
};

export default Home;
