import { gql } from 'apollo-boost';

export const GET_ALL_PEOPLE = gql`
  query GetPeoples($first: Int, $after: String, $before: String, $last: Int) {
    allPeople(first: $first, after: $after, before: $before, last: $last) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      totalCount
      people {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld {
          name
          diameter
          rotationPeriod
          orbitalPeriod
          gravity
          population
          climates
          terrains
          surfaceWater
        }
        filmConnection {
          films {
            title
            episodeID
            openingCrawl
            director
            producers
            releaseDate
            releaseDate
            created
            edited
            id
          }
        }
        species {
          name
        }
        starshipConnection {
          starships {
            name
          }
        }
        vehicleConnection {
          vehicles {
            name
          }
        }
        created
        edited
        id
      }
    }
  }
`;

export const GET_PERSON_INFO = gql`
  query GetPeoples($id: ID!) {
    person(id: $id) {
      name
      filmConnection {
        films {
          title
          director
          planetConnection {
            planets {
              name
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;
