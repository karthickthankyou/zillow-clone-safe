import React, { Dispatch } from 'react'
import ReactMapGL, {
  Marker,
  NavigationControl,
  WebMercatorViewport,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import { useSearchHomesByLocationQuery } from 'src/generated/graphql'
import { useTransition, animated } from 'react-spring'
import { FilterAction } from 'src/components/templates/ProductListingPage/ProductListingPage'

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'TOKEN_NOT_FOUND'
const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

export type MapLocation = {
  longitude: number
  latitude: number
  zoom: number
  height: number
  width: number
  ne: [number, number]
  sw: [number, number]
}

export type MarkerType = { id: string; lat: number; lng: number }[]
interface IMapBoxProps {
  viewport: MapLocation
  setLocation: (arg: MapLocation) => void
  className?: string
  highlightedId?: number | null
  dispatch: Dispatch<FilterAction>
}

const MapBox = ({
  viewport,
  setLocation,
  className,
  highlightedId,
  dispatch,
}: IMapBoxProps) => {
  const setLocationAll = ({
    width,
    height,
    latitude,
    longitude,
    zoom,
  }: Omit<MapLocation, 'ne' | 'sw'>) => {
    const webMercatorViewport = new WebMercatorViewport({
      width: width * 1.1,
      height: height * 1.1,
      latitude,
      longitude,
      zoom,
      // bearing: 0,
      // altitude: 0,
      pitch: 40,
      // fovy: 45,
      // position: [longitude, latitude],
      // nearZMultiplier: 0.1,
      // farZMultiplier: 0.1,
    })
    // console.log('WebMercatorViewport', webMercatorViewport)
    // console.log('WebMercatorViewport bounds: ', webMercatorViewport.getBounds())
    const [ne, sw] = webMercatorViewport.getBounds()

    // console.log('View matrix: ', webMercatorViewport.getBoundingRegion())
    // const nw = webMercatorViewport.unprojectFlat([0, 0])
    // const se = webMercatorViewport.unprojectFlat([ width, height ])

    setLocation({
      latitude,
      longitude,
      zoom,
      height,
      width,
      ne: ne as [number, number],
      sw: sw as [number, number],
    })
    // console.log('ne ', ne)
    // console.log('sw: ', sw)
  }

  const [homes] = useSearchHomesByLocationQuery({
    variables: {
      where: {
        lat: {
          _gt: viewport.ne[1],
          _lt: viewport.sw[1],
        },
        lng: {
          _gt: viewport.ne[0],
          _lt: viewport.sw[0],
        },
      },
    },
  })
  const markersTransitions = useTransition(homes.data?.homes, {
    keys: (home) => home?.id || '3',
    from: { opacity: 0, transform: 'translateY(-6px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-6px)' },
    config: {
      duration: 200,
    },
    trail: 100,
  })

  return (
    <div className={`relative w-full ${className}  `}>
      <ReactMapGL
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...viewport}
        // onMouseUp={(map) => console.log(map.getBounds(), 'Map ')}
        onViewportChange={({ width, height, latitude, longitude, zoom }) => {
          setLocationAll({ width, height, latitude, longitude, zoom })
        }}
        dragPan
        scrollZoom={false}
        width='100%'
        height='100%'
        pitch={40}
        // altitude={1.5}
        // className='shadow-inner'
        mapboxApiAccessToken={accessToken}

        // visibilityConstraints={{
        //   minZoom: 12,
        //   maxZoom: 16,
        // }}
        // transitionDuration={100}
        // transitionInterpolator={new FlyToInterpolator()}
      >
        <NavigationControl className='p-2' />

        <Marker latitude={viewport.ne[1]} longitude={viewport.sw[0]}>
          <div id='red'>
            <HomeIcon className='w-4 h-4 text-red-500' />
          </div>
        </Marker>
        <Marker latitude={viewport.sw[1]} longitude={viewport.ne[0]}>
          <div id='green'>
            <HomeIcon className='w-4 h-4 text-green-500' />
          </div>
        </Marker>
        <Marker latitude={viewport.ne[1]} longitude={viewport.ne[0]}>
          <div id='red'>
            <HomeIcon className='w-4 h-4 text-red-500' />
          </div>
        </Marker>
        <Marker latitude={viewport.sw[1]} longitude={viewport.sw[0]}>
          <div id='green'>
            <HomeIcon className='w-4 h-4 text-green-500' />
          </div>
        </Marker>
        {markersTransitions((style, marker) => (
          <animated.div key={marker?.id} style={style}>
            <Marker latitude={marker?.lat} longitude={marker?.lng}>
              <HomeIcon
                onMouseOver={() =>
                  dispatch({ type: 'SET_HIGHLIGHTED_ID', payload: marker?.id })
                }
                className={`w-5 h-5  transition-all shadow-2xl cursor-pointer ease-in-out duration-500 relative  ${
                  highlightedId === marker?.id
                    ? 'text-primary-500 scale-150 opacity-100  border border-primary-500 rounded z-20  '
                    : 'text-primary-900 -z-10 opacity-70'
                }`}
              />
              {/* <div className='w-4 h-4 scale-y-50 border-2 border-blue-600 rounded-full ' /> */}
            </Marker>
          </animated.div>
        ))}
      </ReactMapGL>
    </div>
  )
}

export default MapBox

// {
//   homes.data?.homes.map((marker) => (
//     <Marker key={marker.id} latitude={marker.lat} longitude={marker.lng}>
//       <HomeIcon
//         className={`w-5 h-5 opacity-80 outline-white  ${
//           highlightedId === marker.id
//             ? 'text-primary-500 scale-125 z-20'
//             : 'text-primary-900 -z-10'
//         }`}
//       />
//       {/* <div className='w-4 h-4 scale-y-50 border-2 border-blue-600 rounded-full ' /> */}
//     </Marker>
//   ))
// }

// Use fitbounds. https://stackoverflow.com/questions/70304280/how-to-use-fitbounds-with-react-mapbox-gl
