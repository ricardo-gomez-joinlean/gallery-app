import { Module } from '@nestjs/common';

import { DatabaseModule } from "./database"
import { ApiRoutesModule } from "./controllers/api"

@Module({
  imports: [ DatabaseModule, ApiRoutesModule ],
})
export class AppModule {}
