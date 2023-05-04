import TrackPlayer, {RepeatMode} from 'react-native-track-player';

import playlistData from '../screens/Media/data/playlist.json';

export const QueueInitialTracksService = async (): Promise<void> => {
  //@ts-ignore
  await TrackPlayer.add([...playlistData]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
