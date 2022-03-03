import { MapSlice } from './mapSlice'

export const getBoundsZoomLevel = (
  bounds: MapSlice['bounds'],
  mapDim: {
    height: number
    width: number
  }
) => {
  const WORLD_DIM = { height: 256, width: 256 }
  const ZOOM_MAX = 21

  function latRad(lat: number) {
    const sin = Math.sin((lat * Math.PI) / 180)
    const radX2 = Math.log((1 + sin) / (1 - sin)) / 2
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2
  }

  function zoom(mapPx: number, worldPx: number, fraction: number) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2)
  }

  const ne = bounds[0]
  const sw = bounds[1]

  const latFraction = (latRad(ne[1]) - latRad(sw[1])) / Math.PI

  const lngDiff = ne[0] - sw[0]
  const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360

  const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction)
  const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction)

  return Math.min(latZoom, lngZoom, ZOOM_MAX)
}
