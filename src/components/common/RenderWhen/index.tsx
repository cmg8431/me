import React from 'react';

interface RenderWhenProps {
  limit?: number;
  isTrue?: boolean;
  children: React.ReactNode;
}

export const RenderWhen = ({
  limit = 1,
  isTrue = true,
  children,
}: RenderWhenProps) => {
  const element: React.ReactNode[] = [];

  if (isTrue !== true) return null;

  React.Children.map(children, (child) => {
    if (!React.isValidElement<Pick<RenderWhenProps, 'isTrue'>>(child))
      return null;

    const { isTrue: isChildTrue } = child.props || {};
    if (isChildTrue && element.length < limit) element.push(child);
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <React.Fragment>{element}</React.Fragment>;
};

RenderWhen.If = ({ children }: Omit<RenderWhenProps, 'limit'>) =>
  // eslint-disable-next-line react/jsx-no-useless-fragment
  children ? <React.Fragment>{children}</React.Fragment> : null;
