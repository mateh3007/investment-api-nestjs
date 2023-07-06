import { createShareDtoOutput } from '../dto/create-share.dto';
import { getShareDtoInput, getShareDtoOutput } from '../dto/get-share.dto';
import { ShareEntity } from './share.entity';

export abstract class IShareRepository {
  abstract create(data: ShareEntity): Promise<createShareDtoOutput>;
  abstract getOne(data: getShareDtoInput): Promise<getShareDtoOutput>;
  abstract getAll(): Promise<createShareDtoOutput[]>;
}
