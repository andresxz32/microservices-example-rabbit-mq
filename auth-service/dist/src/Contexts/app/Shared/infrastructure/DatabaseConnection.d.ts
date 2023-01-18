import { ConfigService } from '@nestjs/config';
export declare class DatabaseConnection {
    private readonly configService;
    private readonly connectionString;
    constructor(configService: ConfigService);
    get: () => string;
}
