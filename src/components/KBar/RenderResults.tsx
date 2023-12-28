import { forwardRef, useMemo } from 'react';
import React from 'react';

import { ActionId, ActionImpl, KBarResults, useMatches } from 'kbar';

export const RenderResults: React.FC = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === 'string' ? (
          <div>{item}</div>
        ) : (
          <ResultItem action={item} active={active} id={rootActionId || ''} />
        );
      }}
    />
  );
};

interface ResultItemProps {
  action: ActionImpl;
  active: boolean;
  id: ActionId;
}

const ResultItem = forwardRef<HTMLDivElement, ResultItemProps>((props, ref) => {
  const { action, active, id } = props;

  const ancestors = useMemo(() => {
    if (!id) return action.ancestors;

    const current = action.ancestors.findIndex(
      (ancestor) => ancestor.id === id
    );

    return action.ancestors.slice(current + 1);
  }, [action.ancestors, id]);

  return (
    <div ref={ref}>
      {/* {ancestors.length > 0 &&
        ancestors.map((ancestor) => (
          <React.Fragment key={ancestor.id}></React.Fragment>
        ))}

      {action.shortcut?.length ? (
        <div aria-hidden className="grid grid-flow-col gap-2">
          {action.shortcut.map((sc) => (
            <kbd key={sc}>{sc}</kbd>
          ))}
        </div>
      ) : null} */}
    </div>
  );
});
