declare namespace NodeJS {
    export interface ProcessEnv {
        APP_PORT:number,
        APP_JWT_TOKEN_EXPIRY_TIME: number,
        APP_JWT_TOKEN_SECRET: string
    }
}
