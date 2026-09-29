import { GameInfo } from '../types';
import { rpgGames } from './games/rpg';
import { mmorpgGames } from './games/mmorpg';
import { idleGames } from './games/idle';
import { subcultureGames } from './games/subculture';
import { actionGames } from './games/action';

// Aggregate full game library (32+ leading mobile games)
export const INITIAL_GAMES: GameInfo[] = [
  ...actionGames,
  ...rpgGames,
  ...mmorpgGames,
  ...subcultureGames,
  ...idleGames
];
