'use client';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';

import { TOAST_TYPE_PROPS } from '@/constants';
import { toastsAtom } from '@/store';

import * as styles from './styles.css';

export type ToastType = 'success' | 'error';

export type ToastPosition =
  | 'topLeft'
  | 'topRight'
  | 'topCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'bottomCenter';

export interface ToastProps {
  visible?: boolean;
  template?: React.ReactNode | string;
  type?: ToastType;
  position?: ToastPosition;
}

export const Toast: React.FC<ToastProps> = () => {
  const toast = useAtomValue(toastsAtom);

  const { visible, template, type, position } = toast;
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.toastContainer({ position })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <motion.div
            className={styles.toastWrapper}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {type && (
              <motion.div
                className={styles.toastIconWrapper}
                style={{
                  ...assignInlineVars({
                    [styles.backgroundColor]: TOAST_TYPE_PROPS[type].background,
                  }),
                }}
              >
                <FontAwesomeIcon
                  icon={TOAST_TYPE_PROPS[type].icon}
                  color="white"
                  fontSize="1.2rem"
                />
              </motion.div>
            )}
            {typeof template === 'string' && <div>{template}</div>}
            {typeof template !== 'string' && template}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
