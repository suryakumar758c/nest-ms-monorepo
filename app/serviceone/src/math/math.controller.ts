import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class MathController {
  @MessagePattern('sum')
  accumulate(@Payload() data: number[]): number {
    console.log({ data });
    return (data || []).reduce((a, b) => a + b);
  }
}
