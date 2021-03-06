import { Args, Query, Resolver } from '@nestjs/graphql'
import { SearchService } from '@app/dao/search.service'
import { UseInterceptors } from '@nestjs/common'
import { SyncingInterceptor } from '@app/shared/interceptors/syncing-interceptor'

@Resolver('Search')
@UseInterceptors(SyncingInterceptor)
export class SearchResolvers {
  constructor(private readonly searchService: SearchService) {}

  @Query()
  async search(@Args('query') query: string) {
    return this.searchService.search(query)
  }
}
