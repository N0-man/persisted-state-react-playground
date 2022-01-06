import useCatFacts from './hooks/useCatFacts.hook'

const CatFactCard = () => {
  const [fact, newFact] = useCatFacts()
  return fact ? (
    <div>
      <p>{fact.fact}</p>
    </div>
  ) : (
    <></>
  )
}

export default CatFactCard
