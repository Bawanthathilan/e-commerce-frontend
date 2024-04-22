import {TypedUseSelectorHook , useDispatch , useSelector} from 'react-redux'

import type { RootState , AppDispacth } from '@/redux/store/index'

export const useAppDispatch: () => AppDispacth = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
