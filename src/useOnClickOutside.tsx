import React, { useEffect } from 'react';

type UseOnClickOutsideConfig = {
  capture?: boolean;
  enabled?: boolean;
};

const defaultConfig = {
  capture: false,
  enabled: true,
};

/**
 * Detects clicks outside a specified element and handles them
 *
 * @param {Ref} ref - Element for which we want to detect outside clicks
 * @param {Function} callback - Function to call on outside click
 * @param {Object} config - Config options
 * @param {Boolean} config.capture - The option which forces to dispatch events to the listener before the target object
 * @param {Boolean} config.enabled - The option which enables/disables event listening bindings
 */
const useOnClickOutside = (
    ref: React.Ref<any>,
    callback: (e: HTMLElementEventMap['click']) => void,
    config: UseOnClickOutsideConfig = {}
) => {
  useEffect(() => {
    const refElement = (ref as any)?.current ?? ref;
    const capture = typeof config.capture === 'boolean' ? config.capture : defaultConfig.capture;
    const enabled = typeof config.enabled === 'boolean' ? config.enabled : defaultConfig.enabled;

    const listener = (e: HTMLElementEventMap['click']) => {
      if (!refElement || refElement.contains(e.target)) {
        return;
      }

      callback(e);
    };

    if (enabled) {
      document.addEventListener('click', listener, { capture });
    } else {
      document.removeEventListener('click', listener, { capture });
    }

    return () => document.removeEventListener('click', listener, { capture });
  }, [ref, callback, config]);
};

export default useOnClickOutside;
