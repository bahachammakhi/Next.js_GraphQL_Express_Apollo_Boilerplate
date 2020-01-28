/**
 * Create User Mutation
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import {gql} from 'apollo-boost';

const CREATE_USER = gql`
  mutation createUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      token
      userId
    }
  }
`;

export default CREATE_USER;
