const cacheObj = {};
const KEY = "quiz_data";
export async function quizLoader() {
  if (cacheObj.data) {
    return cacheObj;
  }
  try {
    const res = await fetch(`${process.env.REACT_APP_DATA_URL}`);
    const data = await res.json();
    cacheObj.data = data;
    localStorage.setItem(KEY, JSON.stringify(cacheObj, null, 2));
    return cacheObj;
  } catch (e) {
    return JSON.parse(localStorage.getItem(KEY)) || {data: []}
  }
}
