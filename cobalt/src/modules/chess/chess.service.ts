import {UserService} from "@modules/user";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {FilterQuery, Model, QueryOptions, Types} from "mongoose";

import {ChessGameDocument, ChessGame, ChessGameCreationAttributes} from "./schemas";

@Injectable()
export class ChessService {
  constructor(
    @InjectModel(ChessGame.name)
    private readonly chessGameModel: Model<ChessGameDocument>,
    private readonly userService: UserService,
  ) {}

  findOne(filter: FilterQuery<ChessGameDocument>, options?: QueryOptions): Promise<ChessGameDocument> {
    return this.chessGameModel.findOne(filter, options).exec();
  }

  count(options?: QueryOptions): Promise<number> {
    return this.chessGameModel.estimatedDocumentCount(options).exec();
  }

  create(options: ChessGameCreationAttributes): Promise<ChessGameDocument> {
    return this.chessGameModel.create(options);
  }
}