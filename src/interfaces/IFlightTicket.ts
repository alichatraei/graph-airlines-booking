interface IFlightTicket {
  logoSrc: string
  logoStyle: {
    height: string
    margin: string
  }
  src: {
    country: string
    iso3: string
    time: string
    airline: string
  }
  dst: {
    country: string
    iso3: string
    time: string
    airline: string
  }
  boarding: string
  transfer: boolean
  gates: number
  seat: string
  price: string
  class: string
}
export default IFlightTicket
