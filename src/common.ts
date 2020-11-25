import { Context } from "@remult/core";
import { CookieBasedJwt } from '@remult/core/src/cookieBasedJwt';
export const context = new Context();
export const authorization = new CookieBasedJwt(context);