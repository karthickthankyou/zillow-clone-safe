import { useContext } from 'react'
import { MapContext } from 'react-map-gl'

export const MapProvider = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  // @ts-ignore
  <MapContext.Provider>
    <div className={className}>{children}</div>
  </MapContext.Provider>
)

export const useMap = () => {
  const context = useContext(MapContext)
  if (!context) throw Error('You forgot to wrap your Map with <MapProvider />')
  return context
}
