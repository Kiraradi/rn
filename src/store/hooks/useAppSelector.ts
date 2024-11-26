import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppState} from '..';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
