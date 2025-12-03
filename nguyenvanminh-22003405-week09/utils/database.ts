import * as SQLite from 'expo-sqlite';

export interface TaskEntity {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

export async function setupDatabase(db: SQLite.SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  
  // Get current database version
  const result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  const currentVersion = result?.user_version ?? 0;
  
  if (currentVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER DEFAULT 0,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export async function addTaskAsync(db: SQLite.SQLiteDatabase, title: string): Promise<void> {
  if (title.trim() === '') return;
  
  await db.runAsync(
    'INSERT INTO tasks (title, completed) VALUES (?, ?);',
    title.trim(),
    0
  );
}

export async function updateTaskStatusAsync(
  db: SQLite.SQLiteDatabase,
  id: number,
  completed: boolean
): Promise<void> {
  await db.runAsync(
    'UPDATE tasks SET completed = ? WHERE id = ?;',
    completed ? 1 : 0,
    id
  );
}

export async function deleteTaskAsync(
  db: SQLite.SQLiteDatabase,
  id: number
): Promise<void> {
  await db.runAsync('DELETE FROM tasks WHERE id = ?;', id);
}

export async function getAllTasksAsync(
  db: SQLite.SQLiteDatabase
): Promise<{ pending: TaskEntity[], completed: TaskEntity[] }> {
  const pending = await db.getAllAsync<TaskEntity>(
    'SELECT * FROM tasks WHERE completed = ? ORDER BY created_at DESC',
    0
  );
  
  const completed = await db.getAllAsync<TaskEntity>(
    'SELECT * FROM tasks WHERE completed = ? ORDER BY created_at DESC',
    1
  );

  return { pending, completed };
}