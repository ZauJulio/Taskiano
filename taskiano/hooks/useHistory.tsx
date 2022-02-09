import { useContextSelector } from 'use-context-selector';
import {
  HistoryContext,
  IHistoryContext,
} from '../contexts/HistoryContext/Provider';

export function useHistory(selector: (value: IHistoryContext) => any) {
  return useContextSelector(HistoryContext, selector);
}
