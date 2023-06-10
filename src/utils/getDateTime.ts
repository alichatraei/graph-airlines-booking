export default (dateTime: string, exportType = 'time') => {
  const dateTimeObj = new Date(dateTime)
  const monthName = dateTimeObj.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  })
  if (exportType === 'time') {
    const time = dateTimeObj.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    })
    return time
  }
  return monthName
}
