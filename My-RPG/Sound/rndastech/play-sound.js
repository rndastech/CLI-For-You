import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const platform = os.platform();
const filePath = path.join(__dirname, 'test.mp3');

(async () => {
  try {
    if (platform === 'win32' || platform === 'darwin') {
      const sound = await import('sound-play');
      await sound.default.play(filePath);
      console.log(`Sound playback completed on ${platform}!`);
    } else if (platform === 'linux') {
      const PlaySound = (await import('play-sound')).default;
      const player = PlaySound();

      player.play(filePath, (err) => {
        if (err) {
          console.error(`Error during playback on ${platform}:`, err);
        } else {
          console.log(`Sound playback completed on ${platform}!`);
        }
      });
    } else {
      console.error(`Unsupported platform: ${platform}`);
    }
  } catch (err) {
    console.error(`Error during playback on ${platform}:`, err);
  }
})();
