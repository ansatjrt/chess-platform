import {Types} from "mongoose";

export type ChessSide = "white" | "black";

export type ChessType = "bullet" | "blitz" | "rapid" | "classical";

export type ChessResult = "1/2:1/2" | "1:0";

export interface ChessControl {
  time: number;
  increment: number;
  delay: number;
}

export interface ChessPlayer {
  id: Types.ObjectId;
  clock: number;
  last: number | null;
  rating: number;
}

export interface ChessEntity {
  white: ChessPlayer;
  black: ChessPlayer;
  control: ChessControl;
  premove: string | null;
  type: ChessType;
  flags: {
    hasDrawBeenOffered: boolean;
    isDrawOfferValid: boolean;
    isStarted: boolean;
  };
  notation: {
    fen: string | null;
    pgn: string | null;
  };
}