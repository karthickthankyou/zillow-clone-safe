import { useEffect } from 'react'
import { interval } from 'rxjs'
import { useAppSelector } from '..'
import { selectCitySearchText } from '../cities/citySlice'
import { selectHomesMap } from './homeSlice'

export const ticker$ = interval(1000)

// https://medium.com/@fahad19/streaming-redux-state-as-an-observable-with-rxjs-390a8f7bc08c
// https://www.youtube.com/watch?v=Urv82SGIu_0&t=795s

// How to listen to state change in middleware?
// You can use state.subscribe() to listen to state change.
// https://stackoverflow.com/a/36558267/11123158

export const useSubscribeTicker = () => {
  const selectSomething = useAppSelector(selectCitySearchText)
  useEffect(() => {
    console.log('Subscribing ticker$')
    const ticSub = ticker$.subscribe(console.log)

    return () => {
      console.log('unsubscribe from ticker$')
      ticSub.unsubscribe()
    }
  }, [selectSomething])
}
