export const TODO_STATUS = {
  TODO: "todo",
  WIP: "wip",
  DONE: "done"
}

export const TODO_STATUS_LABEL =  Object.values(TODO_STATUS).map((value) => ({
  label: capitalize(value),
  value
}))

function capitalize(value){
  return value.slice(0,1).toUpperCase()+value.slice(1)
}