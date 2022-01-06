import {useEffect, useState} from 'react'
import {api, responseBody} from './axios'
import createPersistedState from 'use-persisted-state'

async function getFact() {
  const response = await api.get('https://catfact.ninja/fact')
  console.log('res:', response)
  return responseBody(response)
}

const useFactState = createPersistedState('fact')
export type Fact = {fact: string; length: number}

const useCatFacts = () => {
  // const [fact, setFact] = useState<Fact>()
  const [fact, setFact] = useFactState<Fact>()

  function newFact() {
    getFact().then(f => setFact(f))
  }

  useEffect(() => {
    if (!fact) newFact()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [fact, newFact] as const
}

export default useCatFacts
