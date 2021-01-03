import { EventFilters, SearchResultEvent } from '@/models'
import { LoadingStatus } from '@/store/types'
import { EventsRouteQuery } from './types'

export type EventsState = {
  organizations: any[]
  locations: any[]
  audiences: any[]
  dates: any[]
  durations: any[]
  formats: any[]
  recurrences: any[]

  autosuggestItems: string[]
  autosuggestItemsLoading: LoadingStatus

  events: SearchResultEvent[]
  totalEvents: number
  eventsLoading: LoadingStatus
  eventsPage: number
  eventsLastFilter: EventFilters
  routeQuery: EventsRouteQuery
}

const state = (): EventsState => ({
  organizations: [],
  locations: [],
  audiences: [],
  dates: [],
  durations: [],
  formats: [],
  recurrences: [],

  autosuggestItems: [],
  autosuggestItemsLoading: LoadingStatus.Unloaded,

  events: [],
  totalEvents: 0,
  eventsPage: 1,
  eventsLoading: LoadingStatus.Unloaded,
  eventsLastFilter: {
    keyword: '',
    organizations: [],
    locations: [],
    audiences: [],
    dates: [],
    durations: [],
    formats: [],
    recurrences: []
  },
  routeQuery: {}
})

export default state
