/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  map,
  pairwise,
} from 'rxjs'
import { store$ } from 'src/store'

const Streams = () => {
  useEffect(() => {
    console.log('`````````STREAMS`````````')
  }, [])

  return null
}

export default Streams

// (v) => (w) => (x) => console.log('Middleware: ', v, w, x)
