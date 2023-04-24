import { Controller, Get, Query } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { MathService } from "./math/math.service";

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  getHello() {
    return "Hello World!";
  }

  @Get("/math")
  async getMath(
    @Query("name") name: string,
    @Query("numbers") numbers: string,
  ): Promise<{ [key: string]: number }> {
    const sum = await lastValueFrom(
      this.mathService.getResponse(numbers.split(",").map(Number)),
    );

    return { [`${name} your total for given numbers is:`]: sum };
  }
}
