import { Module } from '@nestjs/common';
import { chatModule } from './chat/chat.module';

@Module({
  imports: [chatModule],
})
export class AppModule {}
