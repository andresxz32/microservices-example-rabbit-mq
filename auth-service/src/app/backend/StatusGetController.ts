import { Controller, Get, HttpCode } from '@nestjs/common';


@Controller()
export class StatusGetController {

    constructor() { }

    @Get('status')
    check(): string {
        return "Ok";
    }
}
