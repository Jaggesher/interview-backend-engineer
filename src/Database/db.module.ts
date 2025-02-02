import { Module } from '@nestjs/common';
import { SqliteService } from './sqlite/sqlite.service';

@Module({
  providers: [SqliteService],
  exports: [SqliteService],
})
export default class DBModule {}
