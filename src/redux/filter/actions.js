import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "./types";

const showActiveActionCreator = (id) => ({
    type: SHOW_ACTIVE,
    payload: id
})
const showAllActionCreator = (id) => ({
    type: SHOW_ALL,
    payload: id
})

const showCompletedActionCreator = (id) => ({
    type: SHOW_COMPLETED,
    payload: id
})


export {
    showActiveActionCreator,
    showAllActionCreator,
    showCompletedActionCreator
}