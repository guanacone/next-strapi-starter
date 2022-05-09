import { gql } from '@apollo/client'
import client from '../lib/apolo-client'

const Testing = (props) => {
  return (
    <>
      <h1>Hello world</h1>
      <h2>Page was build with {props.locale} language</h2>
      <p>{props.homepage.attributes.hero.title}</p>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const currentLocale = locale === 'en' ? 'en' : 'es-NI'
  const {
    data: {
      homepage: { data },
    },
  } = await client.query({
    query: gql`
      query homepage($currentLocale: I18NLocaleCode) {
        homepage(locale: $currentLocale) {
          data {
            attributes {
              hero {
                title
              }
            }
          }
        }
      }
    `,
    variable: { currentLocale },
  })
  console.log('querry in: ' + currentLocale, 'data: ' + JSON.stringify(data))
  return {
    props: {
      homepage: data,
      locale: currentLocale,
    },
  }
}

export default Testing
