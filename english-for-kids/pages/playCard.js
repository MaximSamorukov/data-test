import './style/playCard.css';
import makeTrainCard from './makeTrainCard';
import makePlayCard from './makePlayCard';

// Function returns play card based on the current mode (isPlay).
// Imports:
// makeTrainCard - used to construct dom element of train card if the mode is train (isPlay !== false);
// makePlayCard - used to construct dom element of play card if the mode is play (isPlay !== true);
export default function playCard(context, data) {
  const { isPlay, inGame } = context;

  if (isPlay) {
    return makePlayCard(context, data);
  } else {
    return makeTrainCard(context, data);
  }

}