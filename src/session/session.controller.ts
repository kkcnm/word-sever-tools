import { Body, Controller,HttpCode,Post } from '@nestjs/common';
import { SessionService } from "./session.service";
import { Session } from "./session.dto";

@Controller('session')
export class SessionController {
    constructor(private readonly sessionService: SessionService) {}

    @Post()
    @HttpCode(200)
    getSession(@Body() session: Session) : object{
        return this.sessionService.getSession(session);
    }
}
