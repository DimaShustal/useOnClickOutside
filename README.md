# @goo_co/use-on-click-outside

> React hook for listening for clicks outside an element.

## Installation

```sh
npm install --save @goo_co/use-on-click-outside
# or
yarn add @goo_co/use-on-click-outside
```

## Simple example

```jsx
import React from 'react';
import useOnClickOutside from '@goo_co/use-on-click-outside';

const MyComponent = () => {
    const [wrapperRef, setSelectWrapperRef] = React.useState(null);
    const clickOutsideCallback = () => {
        console.log('There was a click outside the wrapper');
    };

    useOnClickOutside(wrapperRef, clickOutsideCallback);

    return (
        <div ref={wrapperRef}>
            Inside
        </div>
    );
}

export default MyComponent;
```

## Arguments

| Name                  | Description                                                                         |                         | Default |
|-----------------------|-------------------------------------------------------------------------------------|-------------------------|---------|
| wrapperRef*           | Element ref for which you want to detect outside clicks                             | ReactRef                | -       |
| clickOutsideCallback* | Function to call on outside click                                                   | (e: MouseEvent) => void | -       |
| config.capture        | The option which forces to dispatch events to the listener before the target object | boolean                 | false   |
| config.enabled        | The option which enables/disables event listening bindings                          | boolean                 | true    |

## License

This project is licensed under the terms of the
[MIT license](https://github.com/DimaShustal/useOnClickOutside/blob/master/LICENSE).
