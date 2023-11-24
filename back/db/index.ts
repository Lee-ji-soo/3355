import mongoose from 'mongoose';

let cached = global.mongoos;

if (!cached) {
  cached = global.mongoos = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .set({ debug: true, strictQuery: false })
      .connect(process.env.MONGODB_SRV || '', {
        dbName: 'samo',
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

async function dbDisconnect() {
  cached.conn?.disconnect();
}

export { dbConnect, dbDisconnect };
