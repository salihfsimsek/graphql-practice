import { gql } from '@apollo/client'

const eventsFragment = gql`
  fragment EventsFragment on Event {
    id
    title
    desc
    date
  }
`

export const GET_EVENTS = gql`
    query GetEvents{
      events{
          ...EventsFragment
      }
    }
    ${eventsFragment}
`

export const EVENTS_SUBSCRIPTION = gql`
  subscription{
    eventCreated{
      ...EventsFragment
    }
  }
  ${eventsFragment}
`

export const GET_EVENT = gql`
query getEvent($id: ID!){
    event(id:$id){
      id
      title
      desc
      date
      poster
      location{
        name
      }
      user{
        username
      }
    }
  }
`

export const NEW_EVENT_MUTATION = gql`
  mutation createNewEvent($data: CreateEventInput!){
    createEvent(data: $data){
      id
      title
    }
  }
`

export const EVENT_COUNT_SUBSCRIPTION = gql`
subscription{
  eventCount
}
`