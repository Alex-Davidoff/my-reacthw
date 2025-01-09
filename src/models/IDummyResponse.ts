import { ITodo } from "./ITodo";

export interface IDummyResponse {
    todos: ITodo[],
    total: number,
    skip: number,
    limit: number
}