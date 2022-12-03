import { gql } from '@apollo/client'

export const GET_EVENTS = gql`
    query GetEvents{
        events{
            id
            title
            desc
            date
        }
    }
`

export const EVENTS_SUBSCRIPTION = gql`
  subscription{
    eventCreated{
      id
      title
      desc
      date
    }
  }
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

export const EVENT_COUNT_SUBSCRIPTION = gql`
subscription{
  eventCount
}
`