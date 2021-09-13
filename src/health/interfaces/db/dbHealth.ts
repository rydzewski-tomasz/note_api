import { getDb } from '../../../share/interfaces/db/dbSetup';

async function isValidConnection(): Promise<boolean> {
  const db = getDb();

  try {
    const result: any = await db.raw(`select * from information_schema.tables where table_schema='public'`);
    return !!result?.rows?.length;
  } catch (e) {
    return false;
  }
}

export default {
  isValidConnection
}
