export interface Super {
    id?: number;
    dateCreated?: Date;
    dateUpdated?: Date;
}
export interface User extends Super {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    imgUrl: string;
    messages: Message[];
}

export interface Chat extends Super {
    name: string;
    imgUrl: string;
    messages: Message[];
    users?: User[];
}

export interface Message extends Super {
    body: string;
    user: User
    chat: Chat
}

