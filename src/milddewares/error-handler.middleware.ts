import {Request, Response, NextFunction} from 'express';
import { StatusCodes } from "http-status-codes";
import DatabaseError from '../models/errors/database.error.model';
import ForbiddemError from '../models/errors/forbidden.error.model';

function errorHandler(e: any, req: Request, res: Response, next: NextFunction){
     if(e instanceof DatabaseError){
       res.sendStatus(StatusCodes.BAD_REQUEST)
     } else if ( e instanceof ForbiddemError ) {
       res.sendStatus(StatusCodes.FORBIDDEN)
     } else{
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}
export default errorHandler;
