<template>
  <v-container pa-1>
    <v-layout>
      <v-flex xs12 hidden-sm-and-up>
        <div class="token-mobile">
          <v-layout grid-list-xs row wrap align-center justify-start fill-height class="pl-3 pr-3 pt-2 pb-2">
            <v-flex xs2 pl-1 pr-1>
              <div class="token-image">
                <v-img v-if="!token.image" :src="require('@/assets/icon-token.png')" contain />
                <v-img v-else :src="token.image" contain />
              </div>
            </v-flex>
            <v-flex xs8 pr-0 pt-0>
              <v-layout row wrap align-end justify-start pl-2>
                <p class="black--text text-uppercase font-weight-medium mb-0 pr-1">{{ token.symbol }} -</p>
                <p class="black--text font-weight-medium mb-0 pr-1">{{ token.name }}</p>
              </v-layout>
              <v-layout row align-end justify-start pl-2>
                <p class="black--text text-truncate mb-0 pr-1">${{ price }}</p>
                <template v-if="token.priceChangeSymbol !== 'null'">
                  <p :class="token.priceChangeClass">( {{ token.priceChangeFormatted }}%</p>
                  <v-img v-if="token.priceChangeSymbol === '+'" :src="require('@/assets/up.png')" height="18px" max-width="18px" contain></v-img>
                  <v-img v-if="token.priceChangeSymbol === ''" :src="require('@/assets/down.png')" height="18px" max-width="18px" contain></v-img>
                  <p :class="token.priceChangeClass">)</p>
                </template>
              </v-layout>
              <v-layout row align-center justify-start pl-2>
                <p class="black--text mb-0 pr-1">${{ marketCap }}</p>
                <p class="info--text mb-0 cap-text">({{ $t('token.market') }})</p>
              </v-layout>
            </v-flex>
            <v-flex xs2>
              <v-btn outline small fab color="bttnToken" :to="tokenLink">
                <v-icon class="bttnToken--text fas fa-chevron-right" small />
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex hidden-xs-only sm12>
        <v-card flat white>
          <v-layout grid-list-xs row wrap align-center justify-start fill-height class="pl-2 pr-2 pt-2">
            <v-flex xs4>
              <v-layout grid-list-xs row align-center justify-start fill-height>
                <v-img v-if="!token.image" :src="require('@/assets/icon-token.png')" height="25px" max-width="25px" contain class="ml-4 mr-4" />
                <v-img v-else :src="token.image" height="25px" max-width="25px" contain class="ml-4 mr-4" />
                <router-link class="black--text" :to="tokenLink">{{ token.name }}</router-link>
                <p class="black--text text-uppercase mb-0 pl-1">({{ token.symbol }})</p>
              </v-layout>
            </v-flex>
            <v-flex xs2>
              <p class="black--text text-truncate mb-0">${{ price }}</p>
            </v-flex>
            <v-flex xs2>
              <v-layout grid-list-xs row align-center justify-start>
                <p :class="token.priceChangeClass">{{ token.priceChangeFormatted }}%</p>
                <v-img v-if="token.priceChangeSymbol === '+'" :src="require('@/assets/up.png')" height="18px" max-width="18px" contain></v-img>
                <v-img v-if="token.priceChangeSymbol === '-'" :src="require('@/assets/down.png')" height="18px" max-width="18px" contain></v-img>
              </v-layout>
            </v-flex>
            <v-flex xs2>
              <p class="black--text text-truncate mb-0">${{ volume }}</p>
            </v-flex>
            <v-flex xs2>
              <p class="black--text text-truncate mb-0">${{ marketCap }}</p>
            </v-flex>
          </v-layout>
          <v-divider class="mb-2 mt-2" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { StringConcatMixin } from '@app/core/components/mixins'
import { Component, Prop, Mixins } from 'vue-property-decorator'
import BN from 'bignumber.js'
import { TokenExchangeRatePageExt_items } from '@app/core/api/apollo/extensions/token-exchange-rate-page.ext'

@Component
export default class TokenTableRow extends Mixins(StringConcatMixin) {
  /*
  ===================================================================================
    Props
  ===================================================================================
  */

  @Prop(Object) token!: TokenExchangeRatePageExt_items

  /*
  ===================================================================================
    Computed
  ===================================================================================
  */

  get price(): string {
    return this.token.currentPriceBN ? this.getRoundNumber(this.token.currentPriceBN) : '0.00'
  }

  get volume(): string {
    return this.token.totalVolume ? this.getInt(this.token.totalVolume) : '0'
  }

  get marketCap(): string {
    return this.token.marketCap ? this.getInt(this.token.marketCap) : '0.00'
  }

  get tokenLink(): string {
    return `/token/${this.token.address}`
  }
}
</script>

<style scoped lang="css">
.token-mobile {
  border: 1px solid #b4bfd2;
  padding: 10px 0px 10px 0px;
}

.v-btn--floating.v-btn--small {
    height: 30px;
    width: 30px;
    margin-right: 0px;
    margin-left: 0px;
}

.cap-text{
  font-size: 9px;
}
</style>
