const f2 = (a, b) => {
    return Math.max(a, b);
}
const f3 = () => {
    return Math.floor(Math.random() * 10);
}
const f4 = (a, b) => {
    return Math.floor(Math.random(a, b) * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b));
}
const f5 = () => {
    return new Date().toISOString().slice(0, 10);
}
const f6 = (year) => {
    return new Date(year, 1, 29).getDate() === 29;
}