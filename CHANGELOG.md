# v1.0.0
## Updates `Radio` component and creates substitute `LabledRadio` component

The `Radio` component has a different style than the angular one, as it has a label wrapping it.
The label has been removed and needs to be added per Radio component as per necessity.

A substitute component, to facilitate migrations, has been created and works exactly the same as the previous `Radio`,
it is called `LabledRadio`.

In order to migrate either use the `LabledRadio` instead of the existin `Radio` or add the label manually in your project.

# v0.4.0
## Adds initial `Stepper` component

A sweet new component for all your flow needs.

# v0.3.0
## Adds enhancements to `Select`

Adds the following to the `Select` component:

* Pass a `block` property to toggle if the `Select` button is a block button or normal one (defaults to `true`)
* Pass a `size` property (one of `xs, sm, md, lg`) to select the size of the `Select` button (defaults to `md`)
* Pass an `id` property to `Select` to set the id of the toggler button

# v0.2.1
## Fixes prop type warning

Updates the min prop-type version to 15.5.10 package.

# v0.2.0
## Adds keyboard navigation to `Select`

This release adds simple keyboard navigation to the `Select` component.

# v0.1.1
## Fixes exporting

The previous published version did not export anything, as it was missing webpack configuration. This release fixes that and makes this library consumable.

# v0.1.0
## First release

Misses a lot of features, mostly here to get the build/deploy system working.
