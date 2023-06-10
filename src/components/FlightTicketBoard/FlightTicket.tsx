import { ReactElement, useState } from 'react'
import AirplaneIcon from '@assets/airplane.png'
import './styles.css'
import IFlightTicket from '../../interfaces/IFlightTicket'
import getDateTime from '@utils/getDateTime'
import getTimesDuration from '@utils/getTimesDuration'

interface IFlightTicketProps {
  flight: IFlightTicket
}

const FlightTicket = ({ flight }: IFlightTicketProps): ReactElement => {
  const [isActive, setIsIsActive] = useState(false)
  const handleClick = () => {
    setIsIsActive(!isActive)
  }

  return (
    <div
      className={`relative w-[400px] h-[50px] rounded-5 transform origin-bottom m-20 cursor-pointer duration-1000 mx-auto	 ${
        isActive ? 'h-[250px]' : 'h-[50px]'
      }`}
      onClick={handleClick}
    >
      <div
        className="w-full h-[150px] absolute bg-white rounded-lg flex flex-1 justify-around  items-center shadow-2xl overflow-hidden"
        id="firstDisplay"
      >
        <div className="relative">
          <div className="absolute bg-red-500 p-1  transform -rotate-45 -top-14 -left-11 px-10 text-white">
            {flight.class}
          </div>
        </div>
        <div className="relative text-[23px] font-bold text-gray-700 text-center ">
          <div
            id="detailLabel"
            className="font-bold"
            style={{ color: 'rgb(13, 28, 83)' }}
          >
            From
          </div>
          {flight.src.iso3 || ''}
          <div id="detailLabel">{flight.src.airline}</div>
        </div>
        <div className=" flex flex-col items-center gap-y-3">
          <div className="relative text-[23px] font-bold text-gray-700 text-center w-20 flex flex-col items-center">
            <div className="absolute w-[19px] h-[10px] top-1/2 left-16 overflow-hidden pl-0">
              <div id="anim">
                <div id="circle" />
                <div id="circle" />
                <div id="circle" />
              </div>
            </div>
            <div className="absolute  w-[19px] h-[10px] top-1/2 left-0 overflow-hidden pl-0 ">
              <div id="anim">
                <div id="circle" />
                <div id="circle" />
                <div id="circle" />
              </div>
            </div>
            <img className="w-9 relative z-0" src={AirplaneIcon} />
          </div>
          <span className=" bg-gray-300 rounded-lg text-sm w-fit p-1 ">
            {`$ ${flight.price}`}
          </span>
        </div>
        <div className="relative text-[23px] font-bold text-gray-700 text-center">
          <div
            id="detailLabel"
            className="font-bold"
            style={{ color: 'rgb(13, 28, 83)' }}
          >
            To
          </div>
          {flight.dst.iso3}
          <div id="detailLabel"> {flight.dst.airline}</div>
        </div>
      </div>
      <div
        className={`absolute w-[400px] h-[150px] rounded-5 text-black transform origin-bottom transition duration-200   ${
          isActive ? `delay-300` : 'delay-200'
        }`}
        id="first"
        style={{
          transform: isActive
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
        }}
      >
        <div
          className="absolute w-full h-[150px] bg-white rounded-xl shadow-lg flex flex-col flex-1 px-2 overflow-hidden"
          id="firstTop"
        >
          <div className="relative z-0">
            <div className="absolute bg-red-500 p-1  transform -rotate-45 top-5 -left-11 px-10 text-white">
              {flight.class}
            </div>
          </div>
          <div className="flex flex-1 justify-around items-center ">
            <img
              style={{ height: flight.logoStyle.height }}
              src={flight.logoSrc}
            />
            <div className="flex">
              <div className="text-gray-400 text-sm text-center ">
                {flight.src.country}
                <div className=" font-bold text-[21px] my-2 text-black">
                  {getDateTime(flight.src.time)}
                </div>
                {getDateTime(flight.src.time, 'date')}
              </div>
              <img className="w-8 h-7 mx-4 mt-6" src={AirplaneIcon} />
              <div className="text-gray-400 text-sm text-center ">
                {flight.dst.iso3}
                <div className=" font-bold text-[21px] my-2 text-black">
                  {getDateTime(flight.dst.time)}
                </div>
                {getDateTime(flight.dst.time, 'date')}
              </div>
            </div>
          </div>
          <div className="flex justify-center  ">
            <span className="border border-dashed border-gray-600 rounded-lg px-12">
              {`$ ${flight.price}`}
            </span>
          </div>
        </div>
        <div
          id="firstBehind"
          className="w-full h-[150px] absolute bg-white transform origin-center rounded-lg border border-dashed border-gray-400 border-l-0 border-r-0"
        >
          <div className="absolute w-full h-[150px] bg-white rounded-lg md:p-23 flex  items-center justify-around shadow-lg">
            <div id="firstBehindRow">
              <div id="detail">
                {getDateTime(flight.src.time)} - {getDateTime(flight.dst.time)}
                <div id="detailLabel">Flight Time</div>
              </div>
              <div id="detail">
                {flight.boarding}
                <div id="detailLabel">Transfer</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                {getTimesDuration(flight.src.time, flight.dst.time)}
                <div id="detailLabel">Duration</div>
              </div>
              <div id="detail">
                {flight.gates}
                <div id="detailLabel">Gate</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                {flight.boarding}
                <div id="detailLabel">Boarding</div>
              </div>
              <div id="detail">
                {flight.seat}
                <div id="detailLabel">Seat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightTicket
