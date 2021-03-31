export * from './nonRef.service';
import { NonRefService } from './nonRef.service';
export * from './ref.service';
import { RefService } from './ref.service';
export const APIS = [NonRefService, RefService];
