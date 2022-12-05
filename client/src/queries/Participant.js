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