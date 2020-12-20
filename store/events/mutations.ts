import { MutationTree } from 'vuex'

import { EventFilters, SearchResultEvent } from '@/models'
import { LoadingStatus } from '@/store/types'
import { EventsState } from './state'
import { EventsRouteQuery } from './types'

const mutations: MutationTree<EventsState> = {
  SET_ORGANIZATIONS(state: EventsState, organizations: any) {
    state.organizations = organizations.data
  },
  SET_NAMES(state: EventsState, names: any) {
    state.names = names.data
  },
  SET_LOCATIONS(state: EventsState, locations: any) {
    state.locations = locations.data
  },
  SET_AUDIENCES(state: EventsState, audiences: any) {
    state.audiences = audiences.data
  },
  SET_DATES(state: EventsState, dates: any) {
    state.dates = dates.data
  },
  SET_DURATIONS(state: EventsState, durations: any) {
    state.durations = durations.data
  },
  SET_RECURRENCES(state: EventsState, recurrences: any) {
    state.recurrences = recurrences.data
  },

  SET_AUTOSUGGEST_ITEMS(state: EventsState, items: string[]) {
    state.autosuggestItems = items
  },
  SET_AUTOSUGGEST_ITEMS_LOADING(state: EventsState, loading: LoadingStatus) {
    state.autosuggestItemsLoading = loading
  },

  SET_EVENTS(state: EventsState, events: SearchResultEvent[]) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state: EventsState, total: number) {
    state.totalEvents = total
  },
  SET_EVENTS_LOADING(state: EventsState, loading: LoadingStatus) {
    state.eventsLoading = loading
  },
  SET_EVENTS_PAGE_NUMBER(state: EventsState, pageNumber: number) {
    state.eventsPage = pageNumber
  },
  SET_LAST_ROUTE_QUERY(state: EventsState, query: EventsRouteQuery) {
    state.routeQuery = query
  },
  SAVE_LAST_FILTER(state: EventsState, filter: EventFilters) {
    state.eventsLastFilter = filter
  }
}

export default mutations
