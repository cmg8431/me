'use client';
import { useEffect, useRef, useState } from 'react';

import { VisualState, useKBar } from 'kbar';

import * as styles from './Search.css';

export const KBAR_LISTBOX = 'kbar-listbox';
export const getListboxItemId = (id: number) => `kbar-listbox-item-${id}`;

export const KBarSearch: React.FC = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  const {
    query,
    searchQuery,
    actions,
    currentRootActionId,
    activeIndex,
    showing,
    options,
  } = useKBar((state) => ({
    searchQuery: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
    activeIndex: state.activeIndex,
    showing: state.visualState === VisualState.showing,
  }));
  const [search, setSearch] = useState(searchQuery);
  const ownRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    query.setSearch('');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ownRef.current!.focus();
    return () => query.setSearch('');
  }, [currentRootActionId, query]);

  useEffect(() => {
    query.setSearch(search);
  }, [query, search]);

  return (
    <input
      ref={(el) => {
        ownRef.current = el;
        query.inputRefSetter(el as HTMLInputElement);
      }}
      autoFocus
      autoComplete="off"
      role="combobox"
      spellCheck="false"
      aria-expanded={showing}
      aria-controls={KBAR_LISTBOX}
      aria-activedescendant={getListboxItemId(activeIndex)}
      value={search}
      className={styles.inputElement}
      placeholder="검색어를 입력해주세요..."
      onChange={(event) => {
        props.onChange?.(event);
        setSearch(event.target.value);
        options?.callbacks?.onQueryChange?.(event.target.value);
      }}
      onKeyDown={(event) => {
        props.onKeyDown?.(event);
        if (currentRootActionId && !search && event.key === 'Backspace') {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
      {...props}
    ></input>
  );
};
