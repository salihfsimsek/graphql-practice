import { gql } from '@apollo/client'

export const GET_PARTICIPANTS = gql`
    query getParticipants($id: ID!){
        event(id: $id){
            participants{
                user{
                username
                }
            }
        }
    }
`

export const PARTICIPANTS_SUBSCRIPTION = gql`
    subscription participantCreated($event_id: ID){
        participantCreated(event_id: $event_id){
            user{
                username
            }
        }
    }
`