export enum Status {
    ToDo,
    InProgress,
    Done
}

export interface ICard {
    id: number;
    title: string;
    description: string;
    status: Status;
    tasks: ITask[];
}

export interface ITask{
    id: number;
    name: string;
    done: boolean;
}