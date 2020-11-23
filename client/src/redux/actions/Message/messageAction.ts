export const PUSH_MESSAGE = "PUSH_MESSAGE" as const;

// triggered by application
export const pushMessage = (text: string) => ({
    type: PUSH_MESSAGE ,
    payload: text 
})

export type PushMessageType = ReturnType<typeof pushMessage>;
export type MessageActionType = PushMessageType;