type HomeProps = { catFacts: string[] | undefined }

const Home = ({ catFacts }: HomeProps) => (
  <div>
    <ul>
      {catFacts?.map(catFact => (
        <li key={catFact}>Fact: {catFact}</li>
      ))}
    </ul>
  </div>
)

export const getStaticProps = async () => {
  // const response = await fetch('https://cat-fact.herokuapp.com/facts')
  // const parsedData = await response.json()

  // const formattedData = parsedData?.map((cat) => cat.text)

  const formattedData = [
    'Cats make about 100 different sounds. Dogs make only about 10.',
    'Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.',
    'I do not know anything about cats.',
    'The technical term for a cat’s hairball is a bezoar.',
    'Cats are the most popular pet in the United States.',
  ]

  return {
    props: { catFacts: formattedData },
  }
}

export default Home
