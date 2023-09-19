import { Module } from '@nestjs/common';
import { SeriesModule } from './modules/series/series.module';

@Module({
  imports: [SeriesModule],
})
export class AppModule {}
