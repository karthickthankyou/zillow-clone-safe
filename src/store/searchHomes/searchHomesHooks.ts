export const useSearchHomes = () => {
  const [{ data, fetching }] = useSearchCitiesQuery({
    variables: { search: inputValue },
  })
}
