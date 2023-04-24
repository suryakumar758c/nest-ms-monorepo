import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MathService } from "./math/math.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "MATH_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 8088,
        },
      },
    ]),
    HttpModule.register({}),
  ],
  controllers: [AppController],
  providers: [AppService, MathService],
})
export class AppModule {}
