const KEY = "lost_in_trivia_results";
export function saveResult(result) {
    localStorage.setItem(KEY, JSON.stringify({
        ...getResults(),
        [result.id]: result
    }, null, 2))
}

function getResults() {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}');
}

export function getResult(id) {
    return getResults()[`${id}`]
}