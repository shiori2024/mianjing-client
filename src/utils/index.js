
// 格式化时间戳
function formattedDate(timestamp) {
    let timer = new Date(timestamp).toLocaleString()
    return timer
}

export default formattedDate