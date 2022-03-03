import { useContext } from 'react'
import { MapContext } from 'react-map-gl'

export const MapProvider = ({ children }: { children: any }) => (
  // @ts-ignore
  <MapContext.Provider>{children}</MapContext.Provider>
)

export const useMap = () => {
  const context = useContext(MapContext)
  if (!context) throw Error('You forgot to wrap your Map with <MapProvider />')
  return context
}
