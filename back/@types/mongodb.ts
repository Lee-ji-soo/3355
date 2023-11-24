// @types/mongodb.ts
import { Mongoose } from 'mongoose';

/* eslint-disable no-var */

declare global {
  var mongoos: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}
