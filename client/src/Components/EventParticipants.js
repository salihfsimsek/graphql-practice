import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useLazyQuery } from "@apollo/client";

import { GET_PARTICIPANTS, PARTICIPANTS_SUBSCRIPTION } from "../queries/Participant";

import Loading from "./Loading";

const EventParticipants = () => {
    const { id } = useParams();

    const [loadParticipants, { called, loading, data, subscribeToMore }] = useLazyQuery(
        GET_PARTICIPANTS,
        {
            variables: { id: id },
        }
    );


    const loadButton = () => {
        return <div className='flex justify-center items-center mt-5'>
            <button
                onClick={loadParticipants}
                className="border-2 rounded-md px-4 py-2 border-gray-500 flex justify-between items-center w-fit"
            >
                {loading && <Loading otherClassName="h-fit" />}
                <span className="whitespace-nowrap text-gray-400">
                    Show Participants
                </span>
            </button>
        </div>
    }

    useEffect(() => {
        if (!loading && called) {
            subscribeToMore({
                document: PARTICIPANTS_SUBSCRIPTION,
                variables: { event_id: id },
                updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev
                    const newParticipant = subscriptionData.data.participantCreated
                    return {
                        ...prev,
                        event: {
                            ...prev.event,
                            participants: [newParticipant, ...prev.event.participants]
                        }
                    }
                }
            })
        }
    }, [loading, called, subscribeToMore])

    return (
        <div className="mt-5 text-center">
            {data?.event?.participants?.length > 0 ? <span className="font-normal text-lg text-gray-700">Participants</span> : null}
            <div id="participant-list" className="mt-5 ">
                <ul className="text-start">
                    {data &&
                        data.event.participants.map((participant, index) => (
                            <li key={index} className="text-gray-700">
                                {participant.user.username}
                            </li>
                        ))}
                </ul>
                {loadButton()}
            </div>
        </div>
    );
};

export default EventParticipants;
