export default (startTime: string, endTime: string): string => {
  const leaveTime = new Date(startTime)
  const arriveTime = new Date(endTime)

  const durationInMs = arriveTime.getTime() - leaveTime.getTime()
  const durationInMinutes = durationInMs / 1000 / 60
  const durationInHours = Math.floor(durationInMinutes / 60)
  const remainingMinutes = Math.floor(durationInMinutes % 60)

  return ` ${durationInHours} h ${remainingMinutes} minutes`
}
