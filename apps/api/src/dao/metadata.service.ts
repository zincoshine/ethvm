import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MetadataEntity } from '@app/orm/entities/metadata.entity'
import { DbConnection } from '@app/orm/config'

@Injectable()
export class MetadataService {

  constructor(
    @InjectRepository(MetadataEntity, DbConnection.Principal)
    private readonly metadataRepository: Repository<MetadataEntity>,
  ) {
  }

  async isSyncing(): Promise<boolean | undefined> {
    const entry = await this.metadataRepository.findOne({
      where: {
        key: 'sync_status',
      },
      cache: true,
    })
    return entry ? JSON.parse(entry.value) : undefined
  }

}
