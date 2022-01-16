import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'

export interface IChakraSliderProps {}

const ChakraSlider = () => (
  <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
)

export default ChakraSlider
