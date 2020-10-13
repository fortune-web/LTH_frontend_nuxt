import { ActionTree } from 'vuex'

import { RootState, TypedAction } from '@/store/types'
import { AdsState } from './state'
import { Ad } from '~/models'

export type AdActions = ActionTree<AdsState, RootState>
export type AdAction<T, R = any> = TypedAction<AdsState, RootState, T, R>

const actions: AdActions = {
  loadActiveAd({ commit }) {
    // TODO: Link with the backend after the backend is updated
    // const { data } = await api.get('ad')
    // commit('SET_ACTIVE_AD', data.data)

    const activeAd: Ad = {
      id: 1,
      name: 'Active',
      adPositions: {
        desktopHomeHorizontalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/litera.png',
          redirectUrl: 'https://www.litera.com/?utm_source=legaltechhub&utm_medium=banner&utm_campaign=lthublaunch'
        },
        desktopCommonHorizontalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/litera.png',
          redirectUrl: 'https://www.litera.com/?utm_source=legaltechhub&utm_medium=banner&utm_campaign=lthublaunch'
        },
        mobileCommonHorizontalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/litera.png',
          redirectUrl: 'https://www.litera.com/?utm_source=legaltechhub&utm_medium=banner&utm_campaign=lthublaunch'
        },

        desktopHomeLeftVerticalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/KU25_Home-Vertical-Ad_460x800.gif',
          redirectUrl:
            'https://imanage.com/solution/knowledge-unlocked/?utm_medium=display&utm_source=media-partner&utm_campaign=legaltech-hub-advertising&vertical=all'
        },
        desktopCommonLeftVerticalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/KU25_Common-vertical-ad---300-x-900.gif',
          redirectUrl:
            'https://imanage.com/solution/knowledge-unlocked/?utm_medium=display&utm_source=media-partner&utm_campaign=legaltech-hub-advertising&vertical=all'
        },
        mobileCommonLeftVerticalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/KU25_Mobile-vertical-ad---180-x-300.gif',
          redirectUrl:
            'https://imanage.com/solution/knowledge-unlocked/?utm_medium=display&utm_source=media-partner&utm_campaign=legaltech-hub-advertising&vertical=all'
        },

        desktopHomeRightVerticalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/Ping+Home+Vertical+Ad.png',
          redirectUrl: 'https://www.timebyping.com'
        },
        desktopCommonRightVerticalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/Ping+Common+Vertical+Ad.png',
          redirectUrl: 'https://www.timebyping.com'
        },
        mobileCommonRightVerticalAd: {
          image: 'https://legal-uploads.s3.us-east-2.amazonaws.com/ads/samples/Ping+Mobile+Vertical+Ad.png',
          redirectUrl: 'https://www.timebyping.com'
        }
      },

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    commit('SET_ACTIVE_AD', activeAd)
  }
}

export default actions
