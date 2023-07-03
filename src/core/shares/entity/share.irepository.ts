import { createShareDtoOutput } from '../dto/create-share.dto';
import { ShareEntity } from './share.entity';

export abstract class IUserRepository {
  abstract create(data: ShareEntity): Promise<createShareDtoOutput>;
}
