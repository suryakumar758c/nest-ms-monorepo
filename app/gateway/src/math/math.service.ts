import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class MathService {
  constructor(@Inject("MATH_SERVICE") private client: ClientProxy) {}

  getResponse(numbers: number[]): Observable<number> {
    return this.client.send("sum", numbers);
  }
}
