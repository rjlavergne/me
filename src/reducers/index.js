import {combineReducers} from 'redux';
import ProjectsReducer from './ProjectsReducer';

const rootReducer = combineReducers({
  projects: ProjectsReducer
});

export default rootReducer;
