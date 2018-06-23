import { State, Mutation, Action } from '@apollo-flux/angular';
import { of } from 'rxjs';
import { mapTo, catchError, tap } from 'rxjs/operators';
import gql from 'graphql-tag';

import {
  currentGameQuery,
  currentGameStatusQuery,
  goalMutation,
  updateNameMutation,
  resetCurrentGameMutation,
  updateGameStatusMutation,
} from './index';
import { Update } from './update';
import {
  GameCreationSuccess,
  GameCreationFailure,
  ResetCurrentGame,
  UpdateGameStatus,
  CreateGame,
} from './actions';

const defaultState = {
  currentGameStatus: {
    __typename: 'GameStatus',
    created: false,
    error: false,
  },
  currentGame: {
    __typename: 'CurrentGame',
    teamAScore: 0,
    teamBScore: 0,
    teamAName: 'Team A',
    teamBName: 'Team B',
  },
};

@State({
  defaults: defaultState,
})
export class Games {
  @Mutation({
    mutation: updateNameMutation,
  })
  @Update(currentGameQuery)
  updateName(state, { team, name }, context) {
    state.currentGame[`team${team}Name`] = name;
  }

  @Mutation({
    mutation: goalMutation,
  })
  @Update(currentGameQuery)
  goal(state, { team }) {
    state.currentGame[`team${team}Score`] += 1;
  }

  @Mutation({
    mutation: updateGameStatusMutation,
  })
  @Update(currentGameStatusQuery)
  updateGameStatus(state, { created, error }) {
    if (typeof created !== 'undefined') {
      state.currentGameStatus.created = created;
    }

    if (typeof error !== 'undefined') {
      state.currentGameStatus.error = error;
    }
  }

  @Mutation({
    mutation: resetCurrentGameMutation,
  })
  @Update(currentGameQuery)
  resetCurrentGame() {
    return {
      currentGame: defaultState.currentGame,
    };
  }

  @Action(GameCreationSuccess)
  onSuccess() {
    return of(new UpdateGameStatus(true, false));
  }

  @Action(GameCreationFailure)
  onFailure() {
    return of(new UpdateGameStatus(false, true));
  }

  @Action(ResetCurrentGame)
  onReset() {
    return of(new UpdateGameStatus(false, false));
  }

  @Action(CreateGame)
  onCreateGame(_action, action$) {
    return action$.pipe(
      mapTo(new GameCreationSuccess()),
      catchError(() => of(new GameCreationFailure())),
    );
  }
}
