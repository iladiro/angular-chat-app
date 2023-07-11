export interface Chat {
    chat_uuid?: number;
    open: boolean;
    collapsed: boolean;
    created_by: CreatedBy;
    recipient: Receiver;
    created_at?: Date;
    messages: Message[];
}

/* export interface Window {
    open: boolean;
    collapsed: boolean;
    created_by: Sender;
    receiver: Receiver;
} */

export interface Message {
    id: number;
    text: string;
    sender: Sender;
    receiver: Receiver;
    send_at: Date;
}

interface CreatedBy {
    id: number;
    firstname: string;
    lastname: string;
}

interface Sender {
    id: number;
    firstname: string;
    lastname: string;
}

interface Receiver {
    id: number;
    firstname: string;
    lastname: string;
}

export interface LoggedAccount {
    id: number;
    firstname: string;
    lastname: string;
}