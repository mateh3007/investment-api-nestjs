import { ShareEntity } from 'src/core/shares/entity/share.entity';
import { IShareRepository } from 'src/core/shares/entity/share.irepository';
import { prisma } from '../../ORM/prisma/prisma';
import { createShareDtoOutput } from 'src/core/shares/dto/create-share.dto';
import {
  getShareDtoInput,
  getShareDtoOutput,
} from 'src/core/shares/dto/get-share.dto';

export class ShareRepositoryInMemory implements IShareRepository {
  async create(data: ShareEntity): Promise<createShareDtoOutput> {
    const share = new ShareEntity(data);
    const output = await prisma.investment.create({
      data: {
        ...share,
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: undefined,
      },
    });
    return output;
  }

  async getOne(data: getShareDtoInput): Promise<getShareDtoOutput> {
    return await prisma.investment.findUnique({
      where: {
        symbol: data.symbol,
      },
    });
  }

  async getAll(): Promise<createShareDtoOutput[]> {
    return await prisma.investment.findMany();
  }
}
