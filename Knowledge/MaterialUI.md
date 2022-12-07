[React Components - Material UI (mui.com)](https://mui.com/material-ui/) 
# Material UI - Overview

Material UI is a library of React UI components that implements Google's Material Design.[!
## Introduction

Material UI is an open-source React component library that implements Google's [Material Design](https://m2.material.io/).

It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

Material UI v5 supports Material Design v2. Adoption of v3 is tentatively planned for Material UI v6—see [the release schedule](https://mui.com/versions/#release-schedule). You can follow [this GitHub issue](https://github.com/mui/material-ui/issues/29345) for future updates.

## Advantages of Material UI

-   **Ship faster:** Over 2,500 open-source [contributors](https://github.com/mui/material-ui/graphs/contributors) have poured countless hours into these components. Focus on your core business logic instead of reinventing the wheel—we've got your UI covered.
-   **Beautiful by default:** we're meticulous about our implementation of [Material Design](https://m2.material.io/), ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.
-   **Customizability:** the library includes an extensive set of intuitive customizability features. [The templates](https://mui.com/store/) in our store demonstrate how far you can go with customization.
-   **Cross-team collaboration:** Material UI's intuitive developer experience reduces the barrier to entry for back-end developers and less technical designers, empowering teams to collaborate more effectively. The [design kits](https://mui.com/design-kits/) streamline your workflow and boost consistency between designers and developers.
-   **Trusted by thousands of organizations:** Material UI has the largest UI community in the React ecosystem. It's almost as old as React itself—its history stretches back to 2014—and we're in this for the long haul. You can count on community's support for years to come (e.g. [Stack Overflow](https://insights.stackoverflow.com/trends?tags=material-ui)).

## Material UI vs. MUI Base

Material UI and [MUI Base](https://mui.com/base/getting-started/overview/) feature many of the same UI components, but MUI Base comes without any default styles or styling solutions.

Material UI is _comprehensive_ in that it comes packaged with default styles, and is optimized to work with [Emotion](https://emotion.sh/) (or [styled-components](https://styled-components.com/)).

MUI Base, by contrast, could be considered the "skeletal" or "headless" counterpart to Material UI—in fact, Material UI v6 will use MUI Base components and hooks for its foundational structure.
# Installation

Install Material UI, the world's most popular React UI framework.Help us keep runningIf you don't mind tech-related ads (no tracking or remarketing), and want to keep us running, please whitelist MUI in your blocker.Thank you! ❤️

## Default installation

Run one of the following commands to add Material UI to your project:

### npm

```sh
npm install @mui/material @emotion/react @emotion/styled
```

### yarn

```sh
yarn add @mui/material @emotion/react @emotion/styled
```

## With styled-components

Material UI uses [Emotion](https://emotion.sh/) as its default styling engine. If you want to use [styled-components](https://styled-components.com/) instead, run one of the following commands:

### npm

```sh
npm install @mui/material @mui/styled-engine-sc styled-components
```

### yarn

```sh
yarn add @mui/material @mui/styled-engine-sc styled-components
```

Visit the [Styled engine guide](https://mui.com/material-ui/guides/styled-engine/) for more information about how to configure styled-components.

## Peer dependencies

[`react`](https://www.npmjs.com/package/react) >= 17.0.0 and [`react-dom`](https://www.npmjs.com/package/react-dom) >= 17.0.0 are peer dependencies.

## Roboto font

Material UI is designed to use the [Roboto](https://fonts.google.com/specimen/Roboto) font by default. You may add it to your project with npm or yarn via [Fontsource](https://fontsource.org/), or with the Google Fonts CDN.

### npm

```sh
npm install @fontsource/roboto
```

### yarn

```sh
yarn add @fontsource/roboto
```

Then you can import it in your entry point like this:

```tsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

Fontsource can be configured to load specific subsets, weights and styles. Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.

### Google Web Fonts

To install the Roboto font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's `<head />` tag:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

## Icons

To use the [font Icon component](https://mui.com/material-ui/icons/#icon-font-icons) or the prebuilt SVG Material Icons (such as those found in the [icon demos](https://mui.com/material-ui/icons/)), you must first install the [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) font. You can do so with npm or yarn, or with the Google Web Fonts CDN.

### npm

```sh
npm install @mui/icons-material
```

### yarn

```sh
yarn add @mui/icons-material
```

### Google Web Fonts

To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's `<head />` tag:

To use the font `Icon` component, you must first add the [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) font. Here are [some instructions](https://mui.com/material-ui/icons/#icon-font-icons) on how to do so. For instance, via Google Web Fonts:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

## CDN

You can start using Material UI right away with minimal front-end infrastructure by installing it via CDN, which is a great option for rapid prototyping. Follow [this CDN example](https://github.com/mui/material-ui/tree/master/examples/cdn) to get started.

We do _not_ recommend using this approach in production. It requires the client to download the entire library—regardless of which components are actually used—which negatively impacts performance and bandwidth utilization.

Two Universal Module Definition (UMD) files are provided:

-   one for development: [https://unpkg.com/@mui/material@latest/umd/material-ui.development.js](https://unpkg.com/@mui/material@latest/umd/material-ui.development.js)
-   one for production: [https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js](https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js)

The UMD links use the `latest` tag to point to the latest version of the library. This pointer is _unstable_ and subject to change as we release new versions. You should consider pointing to a specific version, such as [v5.0.0](https://unpkg.com/@mui/material@5.0.0/umd/material-ui.development.js).

React Dashboard using material UI
[material-ui/docs/data/material/getting-started/templates/dashboard at v5.10.17 · mui/material-ui (github.com)](https://github.com/mui/material-ui/tree/v5.10.17/docs/data/material/getting-started/templates/dashboard)
# Click-Away Listener

The ClickAwayListener component detects when a click event happens outside of its child element.Help us keep runningIf you don't mind tech-related ads (no tracking or remarketing), and want to keep us running, please whitelist MUI in your blocker.Thank you! ❤️

-   📦 [992 B gzipped](https://mui.com/size-snapshot/).
-   ⚛️ Supports portals

-   [Feedback](https://github.com/mui/material-ui/labels/component%3A%20ClickAwayListener)
-   [Bundle size](https://bundlephobia.com/package/@mui/material@latest)

## Example

For instance, if you need to hide a menu dropdown when people click anywhere else on your page:

Open menu dropdown

```tsx
<ClickAwayListener onClickAway={handleClickAway}>
  <Box sx={{ position: 'relative' }}>
    <button type="button" onClick={handleClick}>
      Open menu dropdown
    </button>
    {open ? (
      <Box sx={styles}>
        Click me, I will stay visible until you click outside.
      </Box>
    ) : null}
  </Box>
</ClickAwayListener>
```

Press Enter to start editing

Notice that the component only accepts one child element. You can find a more advanced demo on the [Menu documentation section](https://mui.com/material-ui/react-menu/#menulist-composition).

## Portal

The following demo uses [`Portal`](https://mui.com/material-ui/react-portal/) to render the dropdown into a new "subtree" outside of current DOM hierarchy.

Open menu dropdown

```tsx
<ClickAwayListener onClickAway={handleClickAway}>
  <div>
    <button type="button" onClick={handleClick}>
      Open menu dropdown
    </button>
    {open ? (
      <Portal>
        <Box sx={styles}>
          Click me, I will stay visible until you click outside.
        </Box>
      </Portal>
    ) : null}
  </div>
</ClickAwayListener>
```

Press Enter to start editing

## Leading edge

By default, the component responds to the trailing events (click + touch end). However, you can configure it to respond to the leading events (mouse down + touch start).

Open menu dropdown

```tsx
<ClickAwayListener
  mouseEvent="onMouseDown"
  touchEvent="onTouchStart"
  onClickAway={handleClickAway}
>
  <Box sx={{ position: 'relative' }}>
    <button type="button" onClick={handleClick}>
      Open menu dropdown
    </button>
    {open ? (
      <Box sx={styles}>
        Click me, I will stay visible until you click outside.
      </Box>
    ) : null}
  </Box>
</ClickAwayListener>
```

Press Enter to start editing

⚠️ In this mode, only interactions on the scrollbar of the document is ignored.

## Accessibility

By default `<ClickAwayListener />` will add an `onClick` handler to its children. This can result in e.g. screen readers announcing the children as clickable. However, the purpose of the `onClick` handler is not to make `children` interactive.

In order to prevent screen readers from marking non-interactive children as "clickable" add `role="presentation"` to the immediate children:

```tsx
<ClickAwayListener>
  <div role="presentation">
    <h1>non-interactive heading</h1>
  </div>
</ClickAwayListener>
```

This is also required to fix a quirk in NVDA when using Firefox that prevents announcement of alert messages (see [mui/material-ui#29080](https://github.com/mui/material-ui/issues/29080)).

## Unstyled

-   📦 [981 B gzipped](https://bundlephobia.com/package/@mui/base@latest)

As the component does not have any styles, it also comes with the Base package.

```js
import ClickAwayListener from '@mui/base/ClickAwayListener';
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

-   [`<ClickAwayListener />`](https://mui.com/base/api/click-away-listener/)
# API design approach

We have learned a great deal regarding how MUI is used, and the v1 rewrite allowed us to completely rethink the component API.

API design is hard because you can make it seem simple but it's actually deceptively complex, or make it actually simple but seem complex.

[@sebmarkbage](https://twitter.com/sebmarkbage/status/728433349337841665)

As Sebastian Markbage [pointed out](https://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html), no abstraction is superior to wrong abstractions. We are providing low-level components to maximize composition capabilities.

## Composition

You may have noticed some inconsistency in the API regarding composing components. To provide some transparency, we have been using the following rules when designing the API:

1.  Using the `children` prop is the idiomatic way to do composition with React.
2.  Sometimes we only need limited child composition, for instance when we don't need to allow child order permutations. In this case, providing explicit props makes the implementation simpler and more performant; for example, the `Tab` takes an `icon` and a `label` prop.
3.  API consistency matters.

## Rules

Aside from the above composition trade-off, we enforce the following rules:

### Spread

Props supplied to a component which are not explicitly documented are spread to the root element; for instance, the `className` prop is applied to the root.

Now, let's say you want to disable the ripples on the `MenuItem`. You can take advantage of the spread behavior:

```jsx
<MenuItem disableRipple />
```

The `disableRipple` prop will flow this way: [`MenuItem`](https://mui.com/material-ui/api/menu-item/) > [`ListItem`](https://mui.com/material-ui/api/list-item/) > [`ButtonBase`](https://mui.com/material-ui/api/button-base/).

### Native properties

We avoid documenting native properties supported by the DOM like [`className`](https://mui.com/material-ui/customization/how-to-customize/#overriding-styles-with-class-names).

### CSS Classes

All components accept a [`classes`](https://mui.com/material-ui/customization/how-to-customize/#overriding-styles-with-class-names) prop to customize the styles. The classes design answers two constraints: to make the classes structure as simple as possible, while sufficient to implement the Material Design guidelines.

-   The class applied to the root element is always called `root`.
-   All the default styles are grouped in a single class.
-   The classes applied to non-root elements are prefixed with the name of the element, e.g. `paperWidthXs` in the Dialog component.
-   The variants applied by a boolean prop **aren't** prefixed, e.g. the `rounded` class applied by the `rounded` prop.
-   The variants applied by an enum prop **are** prefixed, e.g. the `colorPrimary` class applied by the `color="primary"` prop.
-   A variant has **one level of specificity**. The `color` and `variant` props are considered a variant. The lower the style specificity is, the simpler it is to override.
-   We increase the specificity for a variant modifier. We already **have to do it** for the pseudo-classes (`:hover`, `:focus`, etc.). It allows much more control at the cost of more boilerplate. Hopefully, it's also more intuitive.

```js
const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};
```

### Nested components

Nested components inside a component have:

-   their own flattened props when these are key to the top level component abstraction, for instance an `id` prop for the `Input` component.
-   their own `xxxProps` prop when users might need to tweak the internal render method's sub-components, for instance, exposing the `inputProps` and `InputProps` props on components that use `Input` internally.
-   their own `xxxComponent` prop for performing component injection.
-   their own `xxxRef` prop when you might need to perform imperative actions, for instance, exposing an `inputRef` prop to access the native `input` on the `Input` component. This helps answer the question ["How can I access the DOM element?"](https://mui.com/material-ui/getting-started/faq/#how-can-i-access-the-dom-element)

### Prop naming

-   **Boolean**
    
    -   The default value of a boolean prop should be `false`. This allows for better shorthand notation. Consider an example of an input that is enabled by default. How should you name the prop that controls this state? It should be called `disabled`:
        
        ```jsx
        ❌ <Input enabled={false} />
        ✅ <Input disabled />
        ```
        
    -   If the name of the boolean is a single word, it should be an adjective or a noun rather than a verb. This is because props describe _states_ and not _actions_. For example an input prop can be controlled by a state, which wouldn't be described with a verb:
        
        ```jsx
        const [disabled, setDisabled] = React.useState(false);
        
        ❌ <Input disable={disabled} />
        ✅ <Input disabled={disabled} />
        ```
        

### Controlled components

Most of the controlled component are controlled via the `value` and the `onChange` props, however, the `open` / `onClose` / `onOpen` combination is used for display related state. In the cases where there are more events, we put the noun first, and then the verb, for example: `onPageChange`, `onRowsChange`.

### boolean vs. enum

There are two options to design the API for the variations of a component: with a _boolean_; or with an _enum_. For example, let's take a button that has different types. Each option has its pros and cons:

-   Option 1 _boolean_:
    
    ```tsx
    type Props = {
      contained: boolean;
      fab: boolean;
    };
    ```
    
    This API enables the shorthand notation: `<Button>`, `<Button contained />`, `<Button fab />`.
    
-   Option 2 _enum_:
    
    ```tsx
    type Props = {
      variant: 'text' | 'contained' | 'fab';
    };
    ```
    
    This API is more verbose: `<Button>`, `<Button variant="contained">`, `<Button variant="fab">`.
    
    However, it prevents an invalid combination from being used, bounds the number of props exposed, and can easily support new values in the future.
    

The MUI components use a combination of the two approaches according to the following rules:

-   A _boolean_ is used when **2** possible values are required.
-   An _enum_ is used when **> 2** possible values are required, or if there is the possibility that additional possible values may be required in the future.

Going back to the previous button example; since it requires 3 possible values, we use an _enum_.

### Ref

The `ref` is forwarded to the root element. This means that, without changing the rendered root element via the `component` prop, it is forwarded to the outermost DOM element which the component renders. If you pass a different component via the `component` prop, the ref will be attached to that component instead.

## Glossary

-   **host component**: a DOM node type in the context of `react-dom`, e.g. a `'div'`. See also [React Implementation Notes](https://reactjs.org/docs/implementation-notes.html#mounting-host-elements).
-   **host element**: a DOM node in the context of `react-dom`, e.g. an instance of `window.HTMLDivElement`.
-   **outermost**: The first component when reading the component tree from top to bottom i.e. breadth-first search.
-   **root component**: the outermost component that renders a host component.
-   **root element**: the outermost element that renders a host component.